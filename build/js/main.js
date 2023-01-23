const pageHeader = document.querySelector('.page-header');
const userNavToggle = document.querySelector('.user-nav__toggle');

pageHeader.classList.remove('page-header--nav-nojs');
userNavToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--nav-open');
});
