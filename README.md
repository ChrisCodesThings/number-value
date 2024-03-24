# number-value &middot; [![Test workflow status](https://github.com/ChrisCodesThings/number-value/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/number-value)](https://www.npmjs.com/package/@chriscodesthings/number-value) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Function to return the value of a number, in number or string format**

## Install

```sh
npm install --save @chriscodesthings/number-value
```

## Use

```js
import numberValue from '@chriscodesthings/number-value';

console.log(numberValue("123"));
// => 123
```

## Syntax

```js
numberValue(var);
```

### Parameters

- *var*: any

### Return Value

Returns a number if *var* is a number, or a string representation of a number, `undefined` otherwise.

> Note, values producing an `isNaN` result and `Infinity` will return as `undefined`.

## Description

Does what it says on the tin.