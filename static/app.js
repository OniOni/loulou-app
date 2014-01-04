$(function () {
  $('button[data-role=incr]').each(function () {
    var button = $(this);
    button.click(function () {
      console.log(button.attr('id'));
      var name = button.attr('id').split('_')[0];
      $.getJSON('/'+name, function(data) {
        $('#'+name).html(data[name]);
      });
    });
  });

  $('li').each(function () {
    var nav = $(this);
    nav.click(function () {
      var page = nav.attr('data-dest');
      console.log("Nav !!! " + page);
      $("body").pagecontainer("change", $('#list'));
      $("h1").html(page);
      $.getJSON('/'+page+'/info', function(data) {
        var list = $('#info-list');
        console.log(data);

        for(var i = 0; i < data['times'].length; i++) {
          var d = new Date(data['times'][i]);
          console.log(d);

          var str = d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear();
          str += " at " + d.getHours() + ":";

          var m = d.getMinutes();
          str += m >= 10 ? m : '0'+m;

          list.append('<li class="ui-body-inherit ui-li-static">'+str+"</li>")
        }
      })

    });
  });
});
