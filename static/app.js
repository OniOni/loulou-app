
$(function () {
    $('a[data-role=button]').each(function ({
	$(this).click(function () {
	    console.log($(this).id());
	    var name = $(this).id().split('_')[0];
	    $.getJSON('/'+name, function(data) {
		$('#'+name).html(data[name]);
	    });
	});
    });
});

