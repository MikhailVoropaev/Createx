const refreshIconBtn = document.querySelector('.featured-courses__refresh-btn');

refreshIconBtn.addEventListener('click', function () {
  if (this.classList.contains('animating')) {
    return;
  }

  this.classList.add('animating');

  setTimeout(() => {
    this.classList.remove('animating');
  }, 500);
})