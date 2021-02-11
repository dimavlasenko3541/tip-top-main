$(document).ready(function () {
    $('.cards-slider').slick({
        arrows: true,
        rows: 2,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        draggable: false,
        toushTreshold: 10,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});