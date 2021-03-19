export function errorToString (error: Error, prefix?: string): string {
  return Error
    .prototype
    .toString
    .call(error);
}
