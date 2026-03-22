const courseProgramItems = document.querySelector(".course-program__content-items");

courseProgramItems.addEventListener("click", event => {
  let courseItem = event.target.closest(".course-program__content-item");

  if (!courseItem) return;

  courseItem.classList.toggle('course-program__content-item--active');
})