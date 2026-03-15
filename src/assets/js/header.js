document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const headerContainer = document.querySelector('.header__container');

  const toggleHamburger = () => {
    headerContainer.classList.toggle('burger--active');
  }

  const clickOutside = (event) => {
    const target = event.target;

    if (target.closest('.burger')) return;

    if (!headerContainer.classList.contains('burger--active') || target.closest('.header__nav')) {
      return;
    }

    headerContainer.classList.remove('burger--active');
  }

  const scrollOutside = () => {
    const headerNav = document.querySelector('.header__nav');
    const stylesHeaderNav = getComputedStyle(headerNav);

    if (headerContainer.classList.contains('burger--active') && parseInt(stylesHeaderNav.top) === -20) {
      setTimeout(() => {
        headerContainer.classList.remove('burger--active');
      }, 500);
    }
  }


  document.addEventListener('scroll', scrollOutside);
  burger.addEventListener('click', toggleHamburger);
  document.body.addEventListener('click', clickOutside);
});


