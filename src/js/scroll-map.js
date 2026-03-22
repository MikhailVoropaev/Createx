document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    const href = this.getAttribute('href');

    if (href === '#') return;

    const targetId = href.substring(href.indexOf('#') + 1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});