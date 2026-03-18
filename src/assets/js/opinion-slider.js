const opinionSlider = document.querySelector('.opinion__slider');
const slidesBox = opinionSlider.querySelector('.opinion__slider-box');
const slide = slidesBox.querySelectorAll('.opinion__content');
const prevBtn = opinionSlider.querySelector('.slider-control-prev');
const nextBtn = opinionSlider.querySelector('.slider-control-next');
const paginationItems = document.querySelectorAll('.opinion__pagination-item');

let currentIndex = 0;
const totalSlides = slide.length;

function updatePagination() {
  paginationItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function updateSliderPosition() {
  slidesBox.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();
}

function goToSlide(index) {
  if (index >= 0 && index < totalSlides) {
    currentIndex = index;
    updateSliderPosition();
  }
}

if (slidesBox && slide.length > 0 && prevBtn && nextBtn) {

  updatePagination();

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
  });

  paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      goToSlide(index);
    });
  });
}