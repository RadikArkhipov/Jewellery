const pageHeader = document.querySelector('.page-header');
const siteNavToggle = document.querySelector('.site-nav__toggle');

pageHeader.classList.remove('page-header--nav-nojs');
siteNavToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--nav-open');
});
