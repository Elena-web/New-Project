export default function convertTime(postDate, currentDate) {
  const date1 = new Date(currentDate);
  const date2 = new Date(postDate);
  let result = 0;
  let lastDigit = 0;
  let timePost = '';

  if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() === date2.getUTCMonth()
        && date1.getUTCDate() === date2.getUTCDate()
        && date1.getUTCHours() === date2.getUTCHours()
        && date1.getUTCMinutes() === date2.getUTCMinutes()
        && date1.getUTCSeconds() !== date2.getUTCSeconds()) {
    result = date1.getUTCSeconds() - date2.getUTCSeconds();
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} секунду назад`;
        return timePost;
      } if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} секунды назад`;
        return timePost;
      }
      timePost = `${result} секунд назад`;
      return timePost;
    }
  }
  if (date1.getUTCFullYear() === date2.getUTCFullYear()
    && date1.getUTCMonth() === date2.getUTCMonth()
    && date1.getUTCDate() === date2.getUTCDate()
    && date1.getUTCHours() === date2.getUTCHours()
    && date1.getUTCMinutes() !== date2.getUTCMinutes()) {
    result = date1.getUTCMinutes() - date2.getUTCMinutes();
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} минуту назад`;
        return timePost;
      } if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} минуты назад`;
        return timePost;
      }
      timePost = `${result} минут назад`;
      return timePost;
    }
  }
  if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() === date2.getUTCMonth()
        && date1.getUTCDate() === date2.getUTCDate()
        && date1.getUTCHours() !== date2.getUTCHours()) {
    result = date1.getUTCHours() - date2.getUTCHours();
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} час назад`;
        return timePost;
      } if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} часа назад`;
        return timePost;
      }
      timePost = `${result} часов назад`;
      return timePost;
    }
  }
  if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() === date2.getUTCMonth()
        && date1.getUTCDate() !== date2.getUTCDate()) {
    result = date1.getUTCDate() - date2.getUTCDate();
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} день назад`;
        return timePost;
      } if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} дня назад`;
        return timePost;
      }
      timePost = `${result} дней назад`;
      return timePost;
    }
  }

  const diffInYears = date1.getUTCFullYear() - date2.getUTCFullYear();
  const diffInMonths = (diffInYears * 12) + (date1.getUTCMonth() - date2.getUTCMonth());

  if ((date1.getUTCFullYear() === date2.getUTCFullYear() && diffInMonths !== 0)
  || (diffInYears === 0 && diffInMonths !== 0)
  || (diffInYears === 1 && (diffInMonths > 0 && diffInMonths < 12))) {
    if (diffInYears === 1 && (diffInMonths > 0 && diffInMonths < 12)) {
      result = 12 - date2.getUTCMonth() + date1.getUTCMonth();
    } else {
      result = date1.getUTCMonth() - date2.getUTCMonth();
    }
    result = Math.abs(result); // Make the result positive
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} месяц назад`;
        return timePost;
      }
      if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} месяца назад`;
        return timePost;
      }
      timePost = `${result} месяцев назад`;
      return timePost;
    }
  }

  if (date1.getUTCFullYear() !== date2.getUTCFullYear()) {
    result = date1.getUTCFullYear() - date2.getUTCFullYear();
    if (result !== 0) {
      lastDigit = result % 10;
      if (lastDigit === 1 && result !== 11) {
        timePost = `${result} год назад`;
        return timePost;
      } if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
        timePost = `${result} года назад`;
        return timePost;
      }
      timePost = `${result} лет назад`;
      return timePost;
    }
  }
  return 'Только что';
}

