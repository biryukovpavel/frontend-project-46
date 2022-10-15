import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const testCases = [
  {
    file1: 'file1.json',
    file2: 'file2.json',
    format: undefined,
    expectedFile: 'expected_file_stylish.txt',
  },
  {
    file1: 'file1.json',
    file2: 'file2.json',
    format: 'stylish',
    expectedFile: 'expected_file_stylish.txt',
  },
  {
    file1: 'file1.yml',
    file2: 'file2.yml',
    format: 'stylish',
    expectedFile: 'expected_file_stylish.txt',
  },
  {
    file1: 'file1.json',
    file2: 'file2.json',
    format: 'plain',
    expectedFile: 'expected_file_plain.txt',
  },
  {
    file1: 'file1.yml',
    file2: 'file2.yml',
    format: 'plain',
    expectedFile: 'expected_file_plain.txt',
  },
];

test.each(testCases)('testing function genDiff($file1, $file2, $format)', ({
  file1, file2, format, expectedFile,
}) => {
  const expected = readFile(expectedFile);
  const actual = genDiff(getFixturePath(file1), getFixturePath(file2), format);
  expect(actual).toEqual(expected);
});
