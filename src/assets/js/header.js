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

  burger.addEventListener('click', toggleHamburger);
  document.body.addEventListener('click', clickOutside);
});
