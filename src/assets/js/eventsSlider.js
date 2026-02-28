document.addEventListener("DOMContentLoaded", () => {
  const eventSliderContainer = document.querySelector('.events-slider');
  const sliderBtnPrev = eventSliderContainer.querySelector(".slider-control-prev");
  const sliderBtnNext = eventSliderContainer.querySelector(".slider-control-next");
  const sliderCards = eventSliderContainer.querySelectorAll(".events-slider__item");

  if (sliderCards[0].classList.contains("events-slider__item--active") ) {
    sliderBtnPrev.disabled = true;
  }

  if (sliderCards[sliderCards.length - 1].classList.contains("events-slider__item--active")) {
    sliderBtnNext.disabled = true;
  }

  sliderBtnPrev.addEventListener("click", () => {
    const lastSliderLeftIndex = Array.from(sliderCards).findLastIndex((card) => card.classList.contains('events-slider__item--slider__left'));
    const lastSlideActiveIndex = Array.from(sliderCards).findLastIndex((card) => card.classList.contains('events-slider__item--active'));

    if (lastSlideActiveIndex === sliderCards.length - 1) {
      sliderBtnNext.disabled = false;
    }

    sliderCards[lastSliderLeftIndex].classList.remove("events-slider__item--slider__left");
    sliderCards[lastSliderLeftIndex].classList.add("events-slider__item--active");
    sliderCards[lastSlideActiveIndex].classList.add('events-slider__item--slider__right');
    sliderCards[lastSlideActiveIndex].classList.remove('events-slider__item--active');

    if (lastSliderLeftIndex === 0) {
      sliderBtnPrev.disabled = true;
    }
  });

  sliderBtnNext.addEventListener('click', () => {
    const firstSliderRightIndex = Array.from(sliderCards).findIndex((card) => card.classList.contains('events-slider__item--slider__right'));
    const firstSliderActiveIndex = Array.from(sliderCards).findIndex((card) => card.classList.contains('events-slider__item--active'));

    if (firstSliderActiveIndex === 0) {
      sliderBtnPrev.disabled = false;
    }

    sliderCards[firstSliderRightIndex].classList.remove('events-slider__item--slider__right');
    sliderCards[firstSliderRightIndex].classList.add("events-slider__item--active");
    sliderCards[firstSliderActiveIndex].classList.add('events-slider__item--slider__left');
    sliderCards[firstSliderActiveIndex].classList.remove('events-slider__item--active');

    if (firstSliderRightIndex === sliderCards.length - 1) {
      sliderBtnNext.disabled = true;
    }

    window.addEventListener("resize", () => {
      const eventSliderWidth = window.innerWidth;

      if (eventSliderWidth <= 992) {

      }
    })
  })
})