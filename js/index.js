'use strict';

(function () {
  if (typeof window === 'undefined') return;
  if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.slick) return;

  const $ = window.jQuery;

  $(document).ready(function () {

    /* ── Slick Slider ── */
    const $slider = $('.project-slider');

    if ($slider.length && !$slider.hasClass('slick-initialized')) {
      $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1024,
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
    }

    /* ── Mobile Navigation Overlay ── */

    // Build overlay DOM once
    const $overlay = $([
      '<div class="site-nav--mobile" role="dialog" aria-modal="true" aria-label="Navigation">',
      '  <div class="site-nav--mobile__header">',
      '    <div class="site-nav--mobile__logo">',
      '      <img class="site-nav--mobile__logo-star" src="images/ico_star_01.png" alt="" width="26" height="26">',
      '      <span class="site-nav--mobile__logo-name">Influenzailla</span>',
      '    </div>',
      '    <button class="site-nav--mobile__close" type="button" aria-label="Close navigation">Close</button>',
      '  </div>',
      '  <ul class="site-nav--mobile__list">',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#about">ABOUT</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#services">SERVICES</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#projects">CASES</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#team">TEAM</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#boost">BOOST PROGRAM</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#products">PRODUCTS</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#book">BOOK</a></li>',
      '    <li class="site-nav--mobile__item"><a class="site-nav--mobile__link" href="#blog">BLOG</a></li>',
      '    <li class="site-nav--mobile__item">',
      '      <button class="site-nav--mobile__lang-btn" type="button" aria-label="Change language">',
      '        <img src="images/ico_globe_01.svg" alt="" width="16" height="16">',
      '      </button>',
      '    </li>',
      '  </ul>',
      '</div>'
    ].join(''));

    $('body').append($overlay);

    function openNav() {
      $overlay.addClass('is-open');
      $('body').addClass('nav-open');
      $('.site-menu-btn').attr('aria-expanded', 'true');
      $overlay.find('.site-nav--mobile__close').focus();
    }

    function closeNav() {
      $overlay.removeClass('is-open');
      $('body').removeClass('nav-open');
      $('.site-menu-btn').attr('aria-expanded', 'false');
      $('.site-menu-btn').first().focus();
    }

    // Open on header Menu button
    $(document).on('click', '.site-menu-btn', function () {
      if ($overlay.hasClass('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close button inside overlay
    $(document).on('click', '.site-nav--mobile__close', function () {
      closeNav();
    });

    // Close when a nav link is clicked
    $(document).on('click', '.site-nav--mobile__link', function () {
      closeNav();
    });

    // Close on Escape key
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && $overlay.hasClass('is-open')) {
        closeNav();
      }
    });

    /* ── Tab panel logic for Objectives ── */
    $(document).on('click', '.objectives-tabs__tab', function () {
      const $tab = $(this);
      const target = $tab.data('tab');

      $('.objectives-tabs__tab').removeClass('objectives-tabs__tab--active').attr('aria-selected', 'false');
      $tab.addClass('objectives-tabs__tab--active').attr('aria-selected', 'true');

      $('.objectives-tabs__panel').each(function () {
        const $panel = $(this);
        if ($panel.data('panel') === target) {
          $panel.removeClass('objectives-tabs__panel--empty').addClass('objectives-tabs__panel--active').removeAttr('hidden');
        } else {
          $panel.removeClass('objectives-tabs__panel--active').addClass('objectives-tabs__panel--empty').attr('hidden', '');
        }
      });
    });

  });
})();
