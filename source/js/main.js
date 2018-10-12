$(document).ready(function(){
  $('.slider').slick({    
    infinite: true,
    slidesToShow: 1,
    prevArrow: $('.btn-lft'),
    nextArrow: $('.btn-rght')
  });

  $('.slider').on('afterChange', function(event, slick, currrentSlide, nextSlide){
    $('.hero__slider-counter').text(currrentSlide + 1 + '/3');
    console.log(currrentSlide);
  })

  $('.s-projects__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.btn-lft'),
    nextArrow: $('.btn-rght')
  });
 
})