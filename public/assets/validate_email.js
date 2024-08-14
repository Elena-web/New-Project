function validateEmail(str) {
  // Проверка на наличие 1-го символа '@'
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '@') {
      index += 1;
    }
  }
  if (index === 1 && str[0] !== '@') {
    const arr = str.split('@');
    if (arr.length === 2 && arr[1].includes('.')) {
      const domainParts = arr[1].split('.');
      if (domainParts.length >= 2) {
        for (let i = 0; i < domainParts.length; i += 1) {
          if (domainParts[i].length >= 2) {
            return true;
          }
        }
      }
    }
    return false;
  }
  return false;
}
export default validateEmail;
