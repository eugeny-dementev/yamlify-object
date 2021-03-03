/**
 * Default colors for all supported value types
 */

export type Colors = {
  base?(string): string,
  date?(string): string,
  error?(string): string,
  symbol?(string): string,
  string?(string): string,
  number?(string): string,
  boolean?(string): string,
  null?(string): string,
  undefined?(string): string,
}

export const colors: Colors = {
  base: noColor,
  date: noColor,
  error: noColor,
  symbol: noColor,
  string: noColor,
  number: noColor,
  boolean: noColor,
  null: noColor,
  undefined: noColor,
}

function noColor (value: string): string {
  return value;
}
