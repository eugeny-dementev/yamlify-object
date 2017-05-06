const typeOf = require('./typeOf');
const getPrefix = require('./getPrefix');

/**
 * value types that not require indent after property name that include the value
 */
const NO_INDENT_TYPES = ['object', 'array'];

module.exports = function configureYamlifyObject ({
  colors,
  prefix,
  postfix,
  dateToString,
  indent: indentChars,
}) {
  /**
   * Object to yaml string formatter
   *
   * @param {Object} obj
   * @param {number} [indentLength=1]
   * @returns {string}
   */
  function objectProperty (obj, indentLength = 1, inArray = false) {
    if (Object.keys(obj).length === 0) {
      return (indentLength === 1
        ? (inArray ? '{}' : '')
        : ' {}');
    }

    let str = '\n';
    const prefix = getPrefix(indentLength, indentChars);

    Object.keys(obj).forEach((name, index) => {
      const value = obj[name];
      const type = typeOf(value);
      const inArrayPrefix = index !== 0 && inArray ? '  ' : '';
      const afterPropsIndent = NO_INDENT_TYPES.includes(type) ? '' : ' ';

      str += `${inArrayPrefix}${prefix}${name}:${afterPropsIndent}${typifiedString(type, value, indentLength + 1)}\n`;
    });

    return str.substring(0, str.length - 1);
  }

  /**
   * Array to yaml string formatter
   *
   * @param {Array} values
   * @param {number} [indentLength=1]
   * @return {string}
   */
  function arrayProperty (values, indentLength = 1, inArray = false) {
    if (values.length <= 0) {
      return (indentLength === 1
        ? (inArray ? '[]' : '')
        : ' []');
    }

    let str = '\n';
    const prefix = getPrefix(indentLength, indentChars);

    values.forEach((value) => {
      const type = typeOf(value);
      const valueString = typifiedString(type, value, indentLength, true)
        .toString()
        .trim();

      str += `${prefix}- ${valueString}\n`;
    });

    return str.substring(0, str.length - 1);
  }

  function typifiedString (type, value, indentLength, inArray) {
    switch (type) {
      case 'array':
        return arrayProperty(value, indentLength, inArray);
      case 'object':
        return objectProperty(value, indentLength, inArray);
      case 'string':
        return colors.string(value);
      case 'symbol':
        return colors.symbol(value.toString());
      case 'number':
        return colors.number(value);
      case 'boolean':
        return colors.boolean(value);
      case 'null':
        return colors.null('null');
      case 'undefined':
        return colors.undefined('undefined');
      case 'date':
        return colors.date(dateToString(value));
      default:
        return Object.prototype.toString.call(value);
    }
  }

  /**
   * @params {object} obj
   */
  return function yamlifyObject (obj) {
    if (
      typeOf(obj) === 'object'
      && Object.keys(obj).length > 0
    ) {
      return objectProperty(obj);
    }

    if (
      typeOf(obj) === 'array'
      && obj.length > 0
    ) {
      return arrayProperty(obj);
    }

    return '';
  };
};

function trim () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
