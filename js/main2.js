$(function(){
    $(".content").load("home.html"); 
});

function loadPage(page){
    $(".content").load(page);
}

$(document).ready(function(){

    $('.menu-trigger').click(function(){
        $('nav ul').slideToggle(500);
    });

    $(window).resize(function(){
        if($(window).width() > 500) {
            $('nav ul').removeAttr('style');
        }

    });


});