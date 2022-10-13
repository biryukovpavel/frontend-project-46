import yaml from 'js-yaml';

const parse = (rawData, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(rawData);
    case 'yaml':
    case 'yml':
      return yaml.load(rawData);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default parse;
