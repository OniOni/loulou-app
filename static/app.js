$(function () {
    $('#caca_button').click(function () {
	console.log('caca');
	$.getJSON('/caca', function(data) {
	    $('#caca').html(data.caca);
	});
    });
    
    $('#pipi_button').click(function () {
	console.log('pipi');
	$.getJSON('/pipi', function(data) {
	    $('#pipi').html(data.pipi);
	});
    });
});
