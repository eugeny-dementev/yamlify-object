module.exports = function typeOf (value) {
  if (Array.isArray(value)) {
    return 'array';
  }

  if (value instanceof Date) {
    return 'date';
  }

  if (!value && typeof value === 'object') {
    return 'null';
  }

  return typeof value;
};
