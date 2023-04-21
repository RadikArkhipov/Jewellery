const pageHeader = document.querySelector('.page-header');
const userNavToggle = document.querySelector('.user-nav__toggle');

pageHeader.classList.remove('page-header--nav-nojs');
userNavToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--nav-open');
});

const noveltiesSliderContainer = document.querySelector('.novelties__slider-container');
const noveltiesSliderPagination = document.querySelector('.novelties__slider-pagination');

if (noveltiesSliderContainer) {
  const nextButton = noveltiesSliderContainer.querySelector('.novelties__slider-btn--next');
  const prevButton = noveltiesSliderContainer.querySelector('.novelties__slider-btn--prev');

  new Swiper(noveltiesSliderContainer, {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },

    pagination: {
      el: noveltiesSliderPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  })
}
