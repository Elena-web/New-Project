function highlightHashtags(text) {
  const words = text.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    if (word.startsWith('#')) {
      const hashtags = word.split('#').filter(Boolean);
      const links = hashtags.map((hashtag) => `<a href="/search?tag=${encodeURIComponent(hashtag)}">#${hashtag}</a>`);
      result.push(links.join(''));
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
}
export default highlightHashtags;
