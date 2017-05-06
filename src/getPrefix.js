module.exports = function getPrefix (indentLength = 1, indentChars = '  ') {
  let prefix = '';
  for (let i = 0; i < indentLength; i++) {
    prefix += indentChars;
  }

  return prefix;
};
