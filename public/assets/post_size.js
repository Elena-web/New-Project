 const posSize = (str) => {
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
    for (let key in domains) {
        for (let i = 0; i < wordsArr.length; i++) {
          if (wordsArr[i].includes(domains[key])) {
            if (i === wordsArr.length - 1) {
              // Заменяю последний элемент на пробел
              wordsArr[i] = '';
            } else {
              // Удаляю элемент с индексом i
              wordsArr.splice(i, 1);
              i--;
            }
          }
        }
      }
    const result = wordsArr.join(' ');
    console.log(result.length);
}
export default posSize;