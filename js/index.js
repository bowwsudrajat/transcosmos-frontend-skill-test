'use strict';

(function () {
  if (typeof window === 'undefined') return;
  if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.slick) return;

  const $ = window.jQuery;

  $(document).ready(function () {
    const $slider = $('.project-slider');

    if (!$slider.length) return;
    if ($slider.hasClass('slick-initialized')) return;

    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: true,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],

      prevArrow: $('.project-slider__arrow--prev'),
      nextArrow: $('.project-slider__arrow--next'),

      appendDots: $('.project-slider__dots'),
      customPaging: function () {
        return '<button type="button" aria-label="Go to slide"></button>';
      }
    });
  });
})();
