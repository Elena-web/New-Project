export default function postSize(str) {
  const wordsArr = str.split(' ');
  const domains = {
    1: '.org',
    2: '.com',
    3: '.ru',
    4: '.net',
    5: '.gov',
    6: '.edu',
    7: '.mil',
    8: '.cn',
    9: '.by',
    10: '.info',
    11: '.biz',
    12: 'www.',
    13: 'http://',
    14: 'https://',
  };
  for (let j = 0; j < domains.length; j += 1) {
    for (let i = 0; i < wordsArr.length; i += 1) {
      if (wordsArr[i].includes(domains[j])) {
        if (i === wordsArr.length - 1) {
          // Заменяю последний элемент на пробел
          wordsArr[i] = '';
        } else {
          // Удаляю элемент с индексом i
          wordsArr.splice(i, 1);
          i -= 1;
        }
      }
    }
  }
  const result = wordsArr.join(' ');
  return result.length;
}
