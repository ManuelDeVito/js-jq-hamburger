

$('.fa-bars').click(function(){
    $('.hamburger-menu').show();
});

$('.fa-times').click(function(){
    $('.hamburger-menu').hide();
})


// Versione 2

$('.fa-bars').click(function(){
    $('.hamburger-menu').fadeIn('fast');
});

$('.fa-times').click(function(){
    $('.hamburger-menu').fadeOut('slow');
})
