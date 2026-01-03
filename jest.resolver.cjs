module.exports = (path, options) => {
  if (
    !options.basedir.includes('node_modules') &&
    path.endsWith('.js') &&
    (path.startsWith('../') || path.startsWith('./'))
  ) {
    path = path.replace(/\.js$/, '.ts');
  }

  return options.defaultResolver(path, options);
};
