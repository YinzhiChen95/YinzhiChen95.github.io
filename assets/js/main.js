$(document).ready(function(){
	console.log("ready")

	Marquee3k.init()

	$('.r-menu').mouseenter(function() {
    $('.p-menu').addClass('p-show'); });
    $(".pop .close").click(function() {
    $(this).parent().removeClass("p-show");});

    // $('.r-menu').mouseleave(function() {
    // $('.p-menu').removeClass('p-show');});

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
