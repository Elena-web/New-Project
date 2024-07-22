import convertTime from './convert_time.js';
/* Отображение loader */
const loaderContainer = document.querySelectorAll('.loader-container');
const postWrap = document.querySelectorAll('.post_wrap');
function showLoader(show) {
  loaderContainer.forEach((elem) => {
    let element = elem;
    element.style.display = show ? 'flex' : 'none';
    element = null;
  });

  postWrap.forEach((elem) => {
    let element = elem;
    element.style.display = show ? 'none' : 'flex';
    element = null;
  });
}

showLoader(true);
// Количество ожидаемых данных
const totalDataToLoad = 2;
// Количество загруженных данных
let dataLoaded = 0;

// Отбражение статистики
const usersRegistr = document.querySelector('.info__block.regitr');
const writMessages = document.querySelector('.info__block.message');
const writeToday = document.querySelector('.info__block.today');

const urlStatistic = 'https://burtovoy.github.io/statistic.json';

fetch(urlStatistic)
  .then((response) => response.json())
  .then((statisticOfUsers) => {
    const statisticData = statisticOfUsers.statistic;
    const registeredUsers = statisticData.usersRegistr;
    const messagesWritten = statisticData.writMessages;
    const messagesWrittenToday = statisticData.writToday;

    usersRegistr.innerHTML = `
      <div class="info__num regitr">${registeredUsers}</div>
      <div class="info__txt">Пользователей зарегистрировано</div>
    `;

    writMessages.innerHTML = `
      <div class="info__num">${messagesWritten}</div>
      <div class="info__txt">Сообщений написано</div>
    `;

    writeToday.innerHTML = `
      <div class="info__num">${messagesWrittenToday}</div>
      <div class="info__txt">Написано сегодня</div>
    `;
  });

// Отбражение фото
const avatarContainers = document.querySelectorAll('.avatar');
const urlPictures = 'https://burtovoy.github.io/pictures.json';

fetch(urlPictures)
  .then((response) => response.json())
  .then((picturesAvatar) => {
    const picturesData = picturesAvatar.pictures;
    picturesData.forEach((picture, index) => {
      const avatarContainer = avatarContainers[index];
      avatarContainer.innerHTML = `
          <img src="${picture.url}" alt="photo">
        `;
    });
    // Увеличение счетчика загруженных данных
    dataLoaded += 1;
  });

// Отбражение постов
const urlMessages = 'https://burtovoy.github.io/messages.json';
const postContainers = document.querySelectorAll('.post__block');
function fetchAndRenderMessages() {
  fetch(urlMessages)
    .then((response) => response.json())
    .then((messagesOfUsers) => {
      const messagesData = messagesOfUsers.messages;
      messagesData.forEach((message, index) => {
        const postContainer = postContainers[index];
        // Преобразование даты, разделяем дату и время
        const parts = message.date.split(' ');
        const datePart = parts[0];
        const timePart = parts[1];
        // Разделяем день, месяц и год
        const dateParts = datePart.split('.');
        const day = dateParts[0];
        const month = dateParts[1];
        const year = dateParts[2];

        // Разделяем часы и минуты
        const timeParts = timePart.split(':');
        const hours = timeParts[0];
        const minutes = timeParts[1];

        // Создаем новый объект Date с указанными значениями
        const date = new Date(year, month - 1, day, hours, minutes);

        // Получаем отформатированную строку в формате "YYYY-MM-DDTHH:MM:SSZ"
        const formattedTime = convertTime(date, new Date());
        postContainer.innerHTML = `
        <div class="post__top">
          <div class="post__name">
            <p class="name">${message.name}</p>
            <p  class="user-name">${message.mail}</p>
          </div>
          <div class="post__time">${formattedTime}</div>
        </div>
        <div class="post__txt">
          <p>${message.message}</p>
        </div>
        ${message.img_message ? `
          <div class="post__img">
            <img src="${message.img_message}" alt="photo">
          </div>
        ` : ''}
        <div class="post__icons">
        <div class="replies">
          <span class="replies__icon"></span>
          <p class="replies__num">${message.quantityReposts}</p>
        </div>
        <div class="likes">
          <span class="likes__icon"></span>
          <p class="likes__num">${message.quantityLike}</p>
        </div>
        <div class="save">
          <span class="save__icon"></span>
          <p class="save__num">${message.quantityShare}</p>
        </div>
        </div>`;
      });

      // Увеличение счетчика загруженных данных
      dataLoaded += 1;

      // Если все данные загружены, скрыть загрузочный индикатор
      if (dataLoaded === totalDataToLoad) {
        showLoader(false);
      }
    });
}
fetchAndRenderMessages();
setInterval(fetchAndRenderMessages, 60000);
