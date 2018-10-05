$(document).ready(function(){
  $('.slider').slick({    
    infinite: false,
    slidesToShow: 1,
    prevArrow: $('.hero__btn-lft'),
    nextArrow: $('.hero__btn-rght')
  });

  $('.slider').on('afterChange', function(event, slick, currrentSlide, nextSlide){

    $('.hero__slider-counter').text(currrentSlide + 1 + '/3');
    console.log(currrentSlide);
  })
})