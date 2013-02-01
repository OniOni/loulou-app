from flask import Flask, jsonify, render_template, url_for
app = Flask(__name__)

import redis
import os

redis_url = os.getenv('REDISTOGO_URL', 'redis://localhost:6379')
r = redis.from_url(redis_url)

@app.route("/app")
def main():    
    url_for('static', filename='app.js')
    return render_template('index.html', caca=r.get('caca'), pipi=r.get('pipi'))


@app.route("/pipi")
def pipi():
    r.incr('pipi')
    return jsonify(result='OK', pipi=r.get('pipi'))


@app.route("/caca")
def caca():
    r.incr('caca')
    return jsonify(result='OK', caca=r.get('caca'))


@app.route("/status")
def status():
    return jsonify(caca=r.get('caca'), pipi=r.get('pipi'))


if __name__ == "__main__":
    app.run(
        host='0.0.0.0',
        debug=True)
    
