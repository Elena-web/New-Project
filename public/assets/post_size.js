function postSize(str) {
  const wordsArr = str.split(' ');
  const protocolNames = {
    1: 'www.',
    2: 'http://',
    3: 'https://',
  };
  const domainsNames = {
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
  };

  for (let j = 0; j < Object.keys(protocolNames).length; j += 1) {
    for (let k = 0; k < Object.keys(domainsNames).length; k += 1) {
      for (let i = 0; i < wordsArr.length; i += 1) {
        let slicedWord = wordsArr[i];
        if (wordsArr[i].includes(protocolNames[j]) && wordsArr[i].includes(domainsNames[k])) {
          const startIndex = wordsArr[i].indexOf(protocolNames[j]);
          const endIndex = wordsArr[i].lastIndexOf(domainsNames[k]) + domainsNames[k].length - 1;
          if (startIndex !== -1 && endIndex !== -1) {
            slicedWord = wordsArr[i].substring(0, startIndex) + wordsArr[i].substring(endIndex + 1);
          }
          wordsArr[i] = slicedWord;
        } else if (wordsArr[i].includes(domainsNames[k])
          && (!wordsArr[i].includes(protocolNames[1])
          && !wordsArr[i].includes(protocolNames[2])
          && !wordsArr[i].includes(protocolNames[3]))
          && (wordsArr[i].length > domainsNames[k].length)) {
          const endIndex = wordsArr[i].lastIndexOf(domainsNames[k]) + domainsNames[k].length - 1;
          if (endIndex !== -1) {
            slicedWord = wordsArr[i].substring(endIndex + 1);
          }
          wordsArr[i] = slicedWord;
        }
      }
    }
  }
  const result = wordsArr.join(' ');
  return result.length;
}
export default postSize;
