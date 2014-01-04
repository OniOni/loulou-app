import os
import time

import redis

from flask import Flask, jsonify, render_template, url_for
app = Flask(__name__)


redis_url = os.getenv('REDISTOGO_URL', 'redis://localhost:6379')
r = redis.from_url(redis_url)

@app.route("/app")
def main():
    url_for('static', filename='app.js')
    return render_template('index.html', caca=r.llen('caca'), pipi=r.llen('pipi'))

def add_one(value):
    now = time.time()
    r.lpush(value, now)
    return jsonify(**{'result': 'OK', value: r.llen(value)})

@app.route("/pipi")
def pipi():
    return add_one('pipi')

@app.route("/caca")
def caca():
    return add_one('caca')

@app.route("/<obj>/info")
def info(obj):
    return jsonify(times=[int(t.split('.')[0]) for t in r.lrange(obj, 0, 9)])

@app.route("/status")
def status():
    return jsonify(caca=r.llen('caca'), pipi=r.llen('pipi'))


if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        debug=True)
