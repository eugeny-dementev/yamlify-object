import { typeOf } from './typeOf';
import { Config, getConfig } from './config';
import { getPrefix } from './getPrefix';
export { Config }

/**
 * value types that not require indent after property name that include the value
 */
const NO_INDENT_TYPES = ['object', 'array'];

export default function yamlifyObject (target: object|any[], config: Config) {
  const {
    colors,
    prefix,
    postfix,
    dateToString,
    errorToString,
    indent: indentChars,
  } = getConfig(config);

  const seen = new Map();

  /**
   * Object to yaml string formatter
   */
  function objectProperty (obj: object, indentLength: number = 1, inArray: number = 0): string {
    if (Object.keys(obj).length === 0) {
      return ` ${colors.base('{}')}`;
    }

    let str = '\n';
    const objectPrefix = getPrefix(indentLength, indentChars);

    Object
      .keys(obj)
      .forEach((name) => {
        const value = obj[name];
        const type = typeOf(value);
        const inArrayPrefix = getPrefix(inArray, '  ');
        const afterPropsIndent = NO_INDENT_TYPES.includes(type) ? '' : ' ';
        const valueString = checkCircular(value)
          ? ` ${colors.base('[Circular]')}`
          : typifiedString(type, value, indentLength + 1, inArray);

        str += `${
          inArrayPrefix
        }${
          objectPrefix
        }${
          colors.base(`${name}:`)
        }${
          afterPropsIndent
        }${
          valueString
        }\n`;
      });

    return str.substring(0, str.length - 1);
  }

  /**
   * Array to yaml string formatter
   */
  function arrayProperty (values: any[], indentLength: number = 1, inArray: number = 0): string {
    if (values.length === 0) {
      return ` ${colors.base('[]')}`;
    }

    let str = '\n';
    const arrayPrefix = getPrefix(indentLength, indentChars);

    values
      .forEach((value) => {
        const type = typeOf(value);
        const inArrayPrefix = getPrefix(inArray, '  ');
        const valueString = checkCircular(value)
          ? colors.base('[Circular]')
          : typifiedString(type, value, indentLength, inArray + 1)
            .toString()
            .trimLeft();

        str += `${
          inArrayPrefix
        }${
          arrayPrefix
        }${
          `${colors.base('-')} `
        }${
          valueString
        }\n`;
      });

    return str.substring(0, str.length - 1);
  }

  function typifiedString (type: string, value, indentLength: number, inArray: number): string {
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
      case 'error':
        return colors.error(errorToString(value, getPrefix(indentLength, indentChars)));
      default:
        if (value && value.toString) {
          return value.toString();
        }
        return Object.prototype.toString.call(value);
    }
  }

  function checkCircular (value) {
    if (!['object', 'array'].includes(typeOf(value))) {
      return false;
    }

    if (seen.has(value)) {
      return true;
    }

    seen.set(value, true);

    return false;
  }

  let string = '';

  seen.set(target, true);

  if (
    typeOf(target) === 'object'
    && Object.keys(target).length > 0
  ) {
    string = objectProperty(target);
  } else if (
    typeOf(target) === 'array'
    && (target as any[]).length > 0
  ) {
    string = arrayProperty(target as any[]);
  }

  if (string.length === 0) {
    return '';
  }

  return `${
    prefix
  }${
    string.slice(1)
  }${
    postfix
  }`;
};
