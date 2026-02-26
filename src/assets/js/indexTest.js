document.addEventListener("DOMContentLoaded", () => {
  const buttonVideoModal  = document.querySelector(".play__video");
  const videoModal = document.querySelector(".play__modal");
  const closeButton = document.querySelector(".play__modal-btn");

  const toggleModal = () => {
    videoModal.classList.toggle("play__modal--active");
    document.body.style.overflow = 'hidden';

    const closeModal = () => {
      videoModal.classList.remove("play__modal--active");
      document.body.style.overflow = '';
    }

    closeButton.addEventListener("click", closeModal);
  }

  buttonVideoModal.addEventListener('click', toggleModal);
})


document.addEventListener("DOMContentLoaded", () => {
  const advantagesListItems = document.querySelectorAll('.advantages__list-item');
  const set = new Set();

  advantagesListItems.forEach(advantage => {
    advantage.addEventListener('mouseenter', function () {
      if (!this.classList.contains('advantages__list-item--active')) {
        this.classList.add('advantages__list-item--active');

        if (set.size === 1) {
          Array.from(set)[0].classList.remove('advantages__list-item--active');
          set.clear();
        }

        set.add(this);
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.querySelector('.team');
  const sliderBtnPrev = teamContainer.querySelector(".slider-control-prev");
  const sliderBtnNext = teamContainer.querySelector(".slider-control-next");
  const sliderCards = teamContainer.querySelectorAll('.team__card');

  if (sliderCards[0].classList.contains('team__card--active')) {
    sliderBtnPrev.disabled = true;
  }

  if (sliderCards[sliderCards.length - 1].classList.contains('team__card--active')) {
    sliderBtnNext.disabled = true;
  }

  sliderBtnPrev.addEventListener('click', () => {
    const lastSliderCardLeftIndex = Array.from(sliderCards).findLastIndex((card) => card.classList.contains('team__card--slider__left'));
    const lastSliderCardActiveIndex = Array.from(sliderCards).findLastIndex(card => card.classList.contains('team__card--active'));

    if (lastSliderCardActiveIndex === sliderCards.length - 1) {
      sliderBtnNext.disabled = false;
    }

    sliderCards[lastSliderCardLeftIndex].classList.remove('team__card--slider__left');
    sliderCards[lastSliderCardLeftIndex].classList.add('team__card--active');
    sliderCards[lastSliderCardActiveIndex].classList.add('team__card--slider__right');
    sliderCards[lastSliderCardActiveIndex].classList.remove('team__card--active');

    if (lastSliderCardLeftIndex === 0) {
      sliderBtnPrev.disabled = true;
    }
  });

  sliderBtnNext.addEventListener('click', () => {
    const firstSliderCardRightIndex = Array.from(sliderCards).findIndex((card) => card.classList.contains('team__card--slider__right'));
    const firstSliderCardActiveIndex = Array.from(sliderCards).findIndex(card => card.classList.contains('team__card--active'));

    if (firstSliderCardActiveIndex === 0) {
      sliderBtnPrev.disabled = false;
    }

    sliderCards[firstSliderCardRightIndex].classList.remove('team__card--slider__right');
    sliderCards[firstSliderCardRightIndex].classList.add('team__card--active');
    sliderCards[firstSliderCardActiveIndex].classList.add('team__card--slider__left');
    sliderCards[firstSliderCardActiveIndex].classList.remove('team__card--active');

    if (firstSliderCardRightIndex === sliderCards.length - 1) {
      sliderBtnNext.disabled = true;
    }
  });
})
