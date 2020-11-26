$(document).ready(function () {
  $('.slide').slick({
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '250px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })
});
