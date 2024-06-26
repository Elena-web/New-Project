export default function convertLinksToHTML(text) {
  const txtArr = text.split(' ');
  const protocolNames = ['http://', 'https://', 'www.'];
  const domainsNames = ['.com', '.org', '.net', '.ru', '.gov', '.edu', '.mil', '.cn', '.by', '.info', '.biz'];

  for (let i = 0; i < txtArr.length; i += 1) {
    let isProtocol = false;
    let isDomain = false;

    for (let j = 0; j < protocolNames.length; j += 1) {
      if (txtArr[i].includes(protocolNames[j])) {
        isProtocol = true;
        break;
      }
    }

    for (let j = 0; j < domainsNames.length; j += 1) {
      if (txtArr[i].includes(domainsNames[j])) {
        isDomain = true;
        break;
      }
    }

    if (isProtocol || isDomain) {
      txtArr[i] = `<a href="${txtArr[i]}">${txtArr[i]}</a>`;
    }
  }

  return txtArr.join(' ');
}
