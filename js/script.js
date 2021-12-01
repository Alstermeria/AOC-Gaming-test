
$(document).ready(function () {
$('.slider-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    adaptiveHeight: true,
    centerMode: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
    {
          breakpoint: 1051,
          settings: {
              arrows: true,
              dots: false,
              fade: true,
              slidesToScroll: 1,
              slidesToShow: 1,
              centerMode: false
          }
      }]
    });

});