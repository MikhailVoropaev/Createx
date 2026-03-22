const blogGrid = document.querySelector(".blog-grid");

blogGrid.addEventListener("click", event => {
  let blogTitle = event.target.closest(".blog__item-title");
  let blogDescription = event.target.closest(".blog__item-description");

  if (!blogDescription && !blogTitle) return;

  if (blogTitle) {
    blogTitle.classList.toggle('blog__item-title--active');
  }

  if (blogDescription) {
    blogDescription.classList.toggle('blog__item-description--active');
  }
})




