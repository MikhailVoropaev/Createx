import './assets/scss/reset.scss'
import './assets/scss/global.scss'
import './assets/scss/mixins.scss'
import './assets/scss/mixins.scss'



document.addEventListener('DOMContentLoaded', () => {
  const svgs = document.querySelectorAll('[src$=".svg"]');

  if (!svgs.length) return;

  for (const imgElem of svgs) {
    if (imgElem.dataset.svgFill !== 'false') continue;

    const imgUrl = imgElem.getAttribute('src');
    fetch(imgUrl)
      .then(res => res.text())
      .then(svgText => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = svgDoc.querySelector('svg');

        if (svg) {
          if (imgElem.className) {
            svg.classList = imgElem.classList;
          }

          svg.removeAttribute('fill');

          const svgElemsInner = svg.querySelectorAll('path, g');

          for (const svgElem of svgElemsInner) {

            if (svgElem.tagName === 'path') {
              svgElem.setAttribute('fill', 'currentColor');
            }

            if (svgElem.tagName === 'g') {
              svgElem.removeAttribute('opacity');
            }
          }

          imgElem.replaceWith(svg);
        }
      })
  }
})



