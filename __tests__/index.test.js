import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('testing function genDiff for json format', () => {
  const expected = readFile('expected_file.json');
  const actual = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(actual).toEqual(expected);
});

test('testing function genDiff for yaml format', () => {
  const expected = readFile('expected_file.json');
  const actual = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  expect(actual).toEqual(expected);
});
