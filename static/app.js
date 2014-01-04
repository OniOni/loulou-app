$(function () {
    $('button').each(function () {
        var button = $(this);
        button.click(function () {
            console.log(button.attr('id'));
            var name = button.attr('id').split('_')[0];
            $.getJSON('/'+name, function(data) {
                $('#'+name).html(data[name]);
            });
        });
    });
});
