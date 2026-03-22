document.addEventListener('DOMContentLoaded', () => {
  const advantagesList = document.querySelector('.advantages__list');
  const advantagesBtns = advantagesList.children;
  const advantagesBoxes = document.querySelector('.advantages__box').children;
  let currentAdvantageIndex = 0;

  advantagesList.addEventListener('click', (e) => {
    const advantageBtn = e.target.closest('.advantages__list-item');

    if (!advantageBtn && !advantageBtn.classList.contains('advantages__list-item--active')) return;

    advantagesBtns[currentAdvantageIndex].classList.remove('advantages__list-item--active');
    advantagesBoxes[currentAdvantageIndex].classList.remove('advantages__description-block--active');

    const newIndexBtn = Array.from(advantagesBtns).findIndex(item => item === advantageBtn);
    advantagesBtns[newIndexBtn].classList.add('advantages__list-item--active');
    advantagesBoxes[newIndexBtn].classList.add('advantages__description-block--active');

    currentAdvantageIndex = newIndexBtn;
  })
})