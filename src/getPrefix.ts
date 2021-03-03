export function getPrefix (indentLength: number = 1, indentChars: string = '  '): string {
  let prefix = '';
  for (let i: number = 0; i < indentLength; i += 1) {
    prefix += indentChars;
  }

  return prefix;
};
