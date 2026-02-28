const MAX_LENGTH_SLIDER_ITEMS_DESK = 3;
const MAX_LENGTH_SLIDER_ITEMS_TAB = 2;

function debounce(callback, ms = 300) {
  let timeoutId = null;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, arguments);
    }, ms);
  }
}

function eventsSliderTransform(sliderCards) {
  const transformCards = Array.from(sliderCards);
  const activeCards = transformCards.filter(card => card.classList.contains('events-slider__item--active'));
  const isTab = window.innerWidth > 640 && window.innerWidth <= 992;
  const maxLengthSlider = isTab ? MAX_LENGTH_SLIDER_ITEMS_TAB : MAX_LENGTH_SLIDER_ITEMS_DESK;

  if (window.innerWidth > 640 && activeCards.length < maxLengthSlider) {
    const diffSlider = maxLengthSlider - activeCards.length;

    for (let i = 0; i < diffSlider; i++) {
      const lastActiveCardIndex = transformCards.findLastIndex((card) => card.classList.contains('events-slider__item--active'));

      if (lastActiveCardIndex === sliderCards.length - 1) {
        const firstActiveCardIndex = transformCards.findIndex((card) => card.classList.contains('events-slider__item--active'));

        transformCards[firstActiveCardIndex - 1].classList.remove('events-slider__item--slider__left');
        transformCards[firstActiveCardIndex].classList.add('events-slider__item--active');
      } else {
        transformCards[lastActiveCardIndex + 1].classList.remove('events-slider__item--slider__right');
        transformCards[lastActiveCardIndex + 1].classList.add('events-slider__item--active');
      }
    }
  }

  if (window.innerWidth > 640 && window.innerWidth <= 992) {
    if (activeCards.length <= 2) return;

    const lastActiveCard = activeCards[activeCards.length - 1];
    lastActiveCard.classList.remove("events-slider__item--active");
    lastActiveCard.classList.add("events-slider__item--slider__right");
  }

  if (window.innerWidth <= 640) {
    if (activeCards.length <= 1) return;

    const lastActiveCard = activeCards[activeCards.length - 1];
    lastActiveCard.classList.remove("events-slider__item--active");
    lastActiveCard.classList.add("events-slider__item--slider__right");
  }
}

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
  });

  eventsSliderTransform(sliderCards);

  window.addEventListener("resize", debounce(() => eventsSliderTransform(sliderCards), 500));
});