function convertTime(postDate, currentDate) {
  const date1 = new Date(currentDate);
  const date2 = new Date(postDate);
  let result = 0;
  let lastDigit = 0;
  
  if (date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate() &&
      date1.getUTCHours() === date2.getUTCHours() &&
      date1.getUTCMinutes() === date2.getUTCMinutes()
      && date1.getUTCSeconds() !== date2.getUTCSeconds()) {
        result = date1.getUTCSeconds() - date2.getUTCSeconds();
        if (result !== 0) {
          lastDigit = result % 10;
          if (lastDigit === 1 && result !== 11) {
          return result + ' секунду назад';
        } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
          return result + ' секунды назад';
        } else {
          return result + ' секунд назад';
        }
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
            return result + ' минуту назад';
          } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
            return result + ' минуты назад';
          } else {
            return result + ' минут назад';
          }
          }
      }
      if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() === date2.getUTCMonth()
        && date1.getUTCDate() === date2.getUTCDate()
        && date1.getUTCHours() !== date2.getUTCHours()) {
          result = date1.getUTCHours() - date2.getUTCHours();
          if (result !== 0) {
            let lastDigit = result % 10;
            if (lastDigit === 1 && result !== 11) {
              return result + ' час назад';
            } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
              return result + ' часа назад';
            } else {
              return result + ' часов назад';
            }
      }
    }
      if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() === date2.getUTCMonth()
        && date1.getUTCDate() !== date2.getUTCDate()) {
          result = date1.getUTCDate() - date2.getUTCDate();
          if (result !== 0) {
            lastDigit = result % 10;
            if (lastDigit === 1 && result !== 11) {
            return result + ' день назад';
          } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
            return result + ' дня назад';
          } else {
            return result + ' дней назад';
          }
          }
      }
      if (date1.getUTCFullYear() === date2.getUTCFullYear()
        && date1.getUTCMonth() !== date2.getUTCMonth()) {
          result = date1.getUTCMonth() - date2.getUTCMonth();
          if (result !== 0) {
            lastDigit = result % 10;
            if (lastDigit === 1 && result !== 11) {
            return result + ' месяц назад';
          } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
            return result + ' месяца назад';
          } else {
            return result + ' месяцев назад';
          }
          }
      }
      if (date1.getUTCFullYear() !== date2.getUTCFullYear()) {
        result = date1.getUTCFullYear() - date2.getUTCFullYear();
        if (result !== 0) {
          lastDigit = result % 10;
          if (lastDigit === 1 && result !== 11) {
          return result + ' год назад';
        } else if (lastDigit >= 2 && lastDigit <= 4 && (result < 10 || result > 20)) {
          return result + ' года назад';
        } else {
          return result + ' лет назад';
        }
        }
      }
      return "Только что";
}