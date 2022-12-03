$(".Popupbtn").click(function() {
    $("div[id=" + $(this).attr("data-activity") +"]").fadeIn(200);
    });
$(".popup_close").click(function() {
    $(".mask").fadeOut(200);
});

$(function(){ 
    $('.p1btn-1').click(function(){ 
    $('html,body').animate({scrollTop:$('.page02').offset().top}, 500);});  
    $('.p1btn-2').click(function(){ 
    $('html,body').animate({scrollTop:$('.page03').offset().top}, 500);});  
    $('.p1btn-3').click(function(){ 
    $('html,body').animate({scrollTop:$('.page04').offset().top}, 500);});
    $('.topicon').click(function(){ 
    $('html,body').animate({scrollTop:$('.page01').offset().top}, 500);});
}); 

$(document).scroll(function() {
    var topy = $(this).scrollTop();
    if (topy > 500) {
        $('.top').addClass('dark');
        $("#dark").fadeIn(400);
    } else {
        $('.top').removeClass('dark');
        $("#dark").fadeOut(400);
    }
});

