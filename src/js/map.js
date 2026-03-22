(async function() {
  await ymaps3.ready;
  const {YMap, YMapDefaultSchemeLayer} = ymaps3;
  const map = new YMap(document.getElementById('contacts-map'), {
    location: { center: [-74.22322290246669,40.101960115252886], zoom: 12 }
  });
  map.addChild(new YMapDefaultSchemeLayer());
})();


































// // Функция проверки загрузки API
// function waitForYmaps() {
//   return new Promise((resolve, reject) => {
//     // Если API уже загружено
//     if (typeof ymaps3 !== 'undefined') {
//       resolve();
//       return;
//     }
//
//     // Ждем загрузки скрипта
//     const checkInterval = setInterval(() => {
//       if (typeof ymaps3 !== 'undefined') {
//         clearInterval(checkInterval);
//         resolve();
//       }
//     }, 100);
//
//     // Таймаут через 10 секунд
//     setTimeout(() => {
//       clearInterval(checkInterval);
//       reject(new Error('API Яндекс.Карт не загрузилось. Проверьте ключ и подключение к интернету'));
//     }, 10000);
//   });
// }
//
// // Основная функция
// async function initMap() {
//   try {
//     console.log('Ожидание загрузки API...');
//     await waitForYmaps();
//     console.log('API загружено, создаем карту');
//
//     await ymaps3.ready;
//
//     const { YMap, YMapDefaultSchemeLayer } = ymaps3;
//
//     const mapElement = document.getElementById('contacts-map');
//     if (!mapElement) {
//       throw new Error('Элемент #contacts-map не найден');
//     }
//
//     const map = new YMap(
//       mapElement,
//       {
//         location: {
//           center: [37.588144, 55.733842],
//           zoom: 10
//         }
//       }
//     );
//
//     map.addChild(new YMapDefaultSchemeLayer());
//     console.log('✅ Карта успешно создана!');
//
//   } catch (error) {
//     console.error('❌ Ошибка:', error.message);
//     // Показываем понятное сообщение пользователю
//     const mapElement = document.getElementById('contacts-map');
//     if (mapElement) {
//       mapElement.innerHTML = `
//                 <div style="padding: 20px; text-align: center; background: #ffeeee; border: 2px solid #ff0000;">
//                     <h3>Карта временно недоступна</h3>
//                     <p>Ошибка: ${error.message}</p>
//                 </div>
//             `;
//     }
//   }
// }
//
// // Запускаем
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', initMap);
// } else {
//   initMap();
// }