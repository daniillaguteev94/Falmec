$(document).ready(function(){

$('[data-modal=partner]').on('click', function() {
    $('.overlay, #partner').fadeIn();
});

$('.modal__close').on('click', function() {
    $('.overlay, #partner').fadeOut(1000);
});


});