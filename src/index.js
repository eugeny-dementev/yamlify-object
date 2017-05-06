const configureYamlifyObject = require('./yamlifyObject');

const defaultDateToString = require('./dateToString');
const defaultColors = require('./colors');

module.exports = function prepareOptions (options) {
  const {
    prefix = true,
    postfix = true,
    dateToString = defaultDateToString,
    colors = {},
    indent = '  ',
  } = options;

  return configureYamlifyObject({
    prefix,
    postfix,
    dateToString,
    colors: Object.assign({}, defaultColors, colors),
    indent,
  });
};
