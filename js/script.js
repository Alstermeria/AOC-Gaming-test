
$(document).ready(function () {
$('.test-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
    adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
     fade: true,
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