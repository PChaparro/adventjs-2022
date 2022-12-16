const solve = (letter) => {
  const santaRegExp = new RegExp('Santa Claus', 'gi');
  const spacesRegExp = new RegExp('\\s+', 'g');
  const punctuationRegExp = new RegExp('\\s[,.]?\\s', 'g');
  const questionMarkRegExp = new RegExp('\\?+', 'g');
  const separatorsRegExp = new RegExp('([.?!])', 'g');
  const alfanumRegExp = new RegExp('^[a-zA-Z0-9]');

  const sanitized = letter
    // Remove redundant spaces
    .replaceAll(spacesRegExp, ' ')
    // Capitalize Santa Claus name
    .replaceAll(santaRegExp, 'Santa Claus')
    // Remove spaces before punctuation signs andd add a space after
    .replaceAll(punctuationRegExp, (match) => {
      return `${match.trim()} `;
    })
    // Remove redundant question mark
    .replaceAll(questionMarkRegExp, '?')
    // Capitalize and remove spaces at the begining and end
    .replaceAll(separatorsRegExp, (match) => {
      // Add an special character to split easily
      return `${match}<>`;
    })
    .split('<>')
    .map((sentence) => {
      const trim = sentence.trim();
      return trim ? trim[0].toUpperCase() + trim.slice(1) : trim;
    })
    .join(' ')
    .trim()
    .replaceAll(' "', '"');

  return sanitized.at(-1).match(alfanumRegExp)
    ? `${sanitized}.`
    : sanitized;
};

module.exports = { solve };
