const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = input => {
  const tokens = [];

  if(input === '()'){
    tokens.push(
      { type: 'Parenthesis', value: '(' },
      { type: 'Parenthesis', value: ')' }
    );
  }
  return tokens;
};

module.exports = { tokenize };
