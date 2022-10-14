import fs from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';
import parse from './parsers.js';
import stylish from './stylish.js';

const getData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf8');
};

const getExtension = (filepath) => path.extname(filepath).slice(1);

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  return sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, children: buildDiff(data1[key], data2[key]), status: 'nested' };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], status: 'deleted' };
    }
    if (data1[key] !== data2[key]) {
      return {
        key,
        valueOld: data1[key],
        valueNew: data2[key],
        status: 'changed',
      };
    }

    return { key, value: data1[key], status: 'unchanged' };
  });
};

const formatDiff = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown formatter: '${format}'!`);
  }
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(getData(filepath1), getExtension(filepath1));
  const data2 = parse(getData(filepath2), getExtension(filepath2));

  return formatDiff(buildDiff(data1, data2), formatName);
};

export default genDiff;
