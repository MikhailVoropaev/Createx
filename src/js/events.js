const eventsFlexBtn = document.querySelector('.filters__view-action--flex');
const eventsGridBtn = document.querySelector('.filters__view-action--grid');
const eventsViewFlex = document.querySelector('.events-list');
const eventsViewGrid = document.querySelector('.events-grid');

const onClickEventsFlexBtn = () => {
  if (eventsFlexBtn.classList.contains('filters__view-action--active')) return;

  eventsGridBtn.classList.remove('filters__view-action--active');
  eventsFlexBtn.classList.add('filters__view-action--active');

  eventsViewGrid.classList.remove('view--visible');
  eventsViewFlex.classList.add('view--visible');
}

const onClickEventsGridBtn = () => {
  if (eventsGridBtn.classList.contains('filters__view-action--active')) return;

  eventsFlexBtn.classList.remove('filters__view-action--active');
  eventsGridBtn.classList.add('filters__view-action--active');

  eventsViewFlex.classList.remove('view--visible');
  eventsViewGrid.classList.add('view--visible');
}

eventsFlexBtn.onclick = onClickEventsFlexBtn;
eventsGridBtn.onclick = onClickEventsGridBtn;