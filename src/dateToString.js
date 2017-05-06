/**
 * @params {Date} date
 */
module.exports = function defaultDateToString (date) {
  return `new Date(${
    Date.prototype.toISOString.call(date)
  })`;
};
