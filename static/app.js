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
          list.append('<li class="ui-body-inherit ui-li-static">'+data['times'][i]+"</li>")
        }
      })

    });
  });
});
