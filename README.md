# Вычислитель отличий

### Hexlet tests and linter status:
[![Actions Status](https://github.com/biryukovpavel/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/biryukovpavel/frontend-project-46/actions)
[![Builder CI](https://github.com/biryukovpavel/frontend-project-46/actions/workflows/builder.yml/badge.svg)](https://github.com/biryukovpavel/frontend-project-46/actions/workflows/builder.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/25e2b475afdec7a68daa/maintainability)](https://codeclimate.com/github/biryukovpavel/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/25e2b475afdec7a68daa/test_coverage)](https://codeclimate.com/github/biryukovpavel/frontend-project-46/test_coverage)

## Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Требования

- Git клиент
- Node.js 18 или выше
- Make

## Установка

* Клонировать проект
```
$ git clone 
```

* Установить пакет(может потребоваться sudo)
```
$ make setup
```

## Пример использования

### Сравнение плоских файлов (JSON)

```
$ gendiff filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/eiGPR0FZoEh359LFfWxnoz2PV.svg)](https://asciinema.org/a/eiGPR0FZoEh359LFfWxnoz2PV)

### Сравнение плоских файлов (yaml)

```
$ gendiff filePath1.yml filePath2.yml
```

[![asciicast](https://asciinema.org/a/vO0GXONtu6El4cVJks8RZujn5.svg)](https://asciinema.org/a/vO0GXONtu6El4cVJks8RZujn5)

### Рекурсивное сравнение

```
$ gendiff __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/T9voEkw3CVlDBiSGckGayTekW.svg)](https://asciinema.org/a/T9voEkw3CVlDBiSGckGayTekW)

### Плоский формат вывода

```
$ gendiff -f plain __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/53hgxXT5NcChrFT2w52ll69M6.svg)](https://asciinema.org/a/53hgxXT5NcChrFT2w52ll69M6)

### Вывод в json

```
$ gendiff --format json __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/Th5D4yJmhhSCSh8VUXqlhUAhP.svg)](https://asciinema.org/a/Th5D4yJmhhSCSh8VUXqlhUAhP)
