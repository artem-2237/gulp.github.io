$('#call-back_button').click(function() {
    $('.modal').css('display', 'flex');
    setTimeout(()=> $('.modal').css('display', 'none'), 5000);
});

$('#close_button').click(function() {
    $('.modal').css('display', 'none');
});




