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
  });

// Отбражение постов
const urlMessages = 'https://burtovoy.github.io/messages.json';
const postContainers = document.querySelectorAll('.post__block');

fetch(urlMessages)
  .then((response) => response.json())
  .then((messagesOfUsers) => {
    const messagesData = messagesOfUsers.messages;
    messagesData.forEach((message, index) => {
      const postContainer = postContainers[index];
      postContainer.innerHTML = `
      <div class="post__top">
        <div class="post__name">
          <p class="name">${message.name}</p>
          <p  class="user-name">${message.mail}</p>
        </div>
        <div class="post__time">${message.date}</div>
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
  });
