$(document).ready(function(){
	console.log("ready")

	Marquee3k.init()

	$('.r-menu').mouseenter(function() {
    $('.p-menu').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-space').mouseenter(function() {
    $('.p-space').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-record').mouseenter(function() {
    $('.p-record').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-memo').mouseenter(function() {
    $('.p-memo').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-handy').mouseenter(function() {
    $('.p-handy').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-pet').mouseenter(function() {
    $('.p-pet').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-spine').mouseenter(function() {
    $('.p-spine').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-co').mouseenter(function() {
    $('.p-co').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-two').mouseenter(function() {
    $('.p-two').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-dis').mouseenter(function() {
    $('.p-dis').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

        $('.r-ham').mouseenter(function() {
    $('.p-ham').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    $('.r-pro').mouseenter(function() {
    $('.p-pro').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});
    // $('.r-menu').mouseleave(function() {
    // $('.p-menu').removeClass('p-show');});


    // $('.r-jing').mouseenter(function() {
    // $('.p-jing').addClass('p-show');
    // });

    // $('.r-jing').mouseleave(function() {
    // $('.p-jing').removeClass('p-show');
    //  });


});

  $( function() {
    $( ".p-menu" ).draggable();
  } );




 
// window.onload=function(){
//   $slideshow = $('.lb-slides').slick({
//     prevArrow: '<div class="arrow-left">Previous</div>',
//     nextArrow: '<div class="arrow-right">Next</div>'
//   });
//   $('.lb-slides').click(function() {
//     $slideshow.slick('slickNext');
//   });
// };
