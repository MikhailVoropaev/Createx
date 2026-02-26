const eventOverviewItems = document.querySelector(".event-overview__content-items");

eventOverviewItems.addEventListener("click", (event) => {
  let btnContainer = event.target.closest(".event-overview__content-item");

  if (!btnContainer) return;

  btnContainer.classList.toggle('event-overview__content-item--active');
})


