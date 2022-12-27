$(function () {
  $('.product-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  })
});
  
  
