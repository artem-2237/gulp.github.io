$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('#left-arrow'),
    nextArrow: $('#right-arrow'),
    responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


