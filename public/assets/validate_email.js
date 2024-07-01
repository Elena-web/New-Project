export default function validateEmail(str) {
  const domainsNames = ['.com', '.org', '.net', '.ru', '.gov', '.edu', '.mil', '.cn', '.by', '.info', '.biz'];

  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '@') {
      index += 1;
    }
  }
  if (index === 1 && str[0] !== '@') {
    const arr = str.split('@');
    const domainFound = domainsNames.some((domain) => arr[1].endsWith(domain));
    if (domainFound) {
      return true;
    }
    return false;
  }
  return false;
}
