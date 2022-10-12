import fs from 'fs';
import path from 'path';
import process from 'process';
import _ from 'lodash';

const getData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf8');
};

const getExtension = (filepath) => path.extname(filepath).slice(1);

const parse = (rawData, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(rawData);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const indent = '  '
  const lines = sortedKeys.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      return [...acc, `${indent}+ ${key}: ${data2[key]}`];
    } else if (!Object.hasOwn(data2, key)) {
      return [...acc, `${indent}- ${key}: ${data1[key]}`];
    } else if (data1[key] !== data2[key]) {
      return [
        ...acc,
        `${indent}- ${key}: ${data1[key]}`,
        `${indent}+ ${key}: ${data2[key]}`,
      ];
    } else {
      return [...acc, `${indent}  ${key}: ${data1[key]}`];
    }
  }, []);

  return [
    '{',
    ...lines,
    '}',
  ].join('\n');
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parse(getData(filepath1), getExtension(filepath1));
  const data2 = parse(getData(filepath2), getExtension(filepath2));

  return buildDiff(data1, data2);
};

export default genDiff;
