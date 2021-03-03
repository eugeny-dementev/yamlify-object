export function dateToString (date: Date): string {
  return `new Date(${
    Date.prototype.toISOString.call(date)
  })`;
}
