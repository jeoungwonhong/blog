$(function(){
    $('.ri-menu-line').click(function(){
        $('.hiddenbox').fadeIn(300);
        $('.hidden-s').animate({ 'margin-left' : -15 }, 300);
    })
    $('.ri-close-line').click(function(){
        $('.hiddenbox').fadeOut(300);
        $('.hidden-s').animate({ 'margin-left' : -550 }, 300);
    })
})