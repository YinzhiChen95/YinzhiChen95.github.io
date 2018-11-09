$(document).ready(function(){
	console.log("ready")
});

  $( function() {
    $( ".layer" ).draggable();
  } );

    $( function() {
    $( ".essaylayer" ).draggable();
  } );

window.onload=function(){
  $slideshow = $('.lb-slides').slick({
    prevArrow: '<div class="arrow-left">Previous</div>',
    nextArrow: '<div class="arrow-right">Next</div>'
  });
  $('.lb-slides').click(function() {
    $slideshow.slick('slickNext');
  });
};
