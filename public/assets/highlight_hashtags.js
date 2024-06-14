export default function highlightHashtags(text) {
  const words = text.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i][0] === '#') {
      const str = words[i].substring(1);
      words[i] = `<a href="/search?tag=${str}">${words[i]}</a>`;
    }
  }
  const newText = words.join(' ');
  return newText;
}
