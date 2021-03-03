import { errorToString } from './errorToString';
import { dateToString } from './dateToString';
import { colors, Colors } from './colors';

export type Config = {
  indent?: string,
  prefix?: string,
  postfix?: string,
  errorToString?(Error, string?): string,
  dateToString?(Date): string,
  colors?: Colors,
}

export const defaultConfig: Config = {
  indent: ' ',
  prefix: '\n',
  postfix: '',
  errorToString,
  dateToString,
  colors,
};

export function getConfig (config: Config = {}): Config {
  return Object.assign({}, defaultConfig, config, {
    colors: Object.assign({}, colors, config.colors),
  });
};
