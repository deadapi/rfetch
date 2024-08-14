# zrnf

**zrnf** is a JavaScript package for generating random strings, numbers, or symbols.

## Installation

To install **zrnf**, use npm:

```bash
npm install zrnf
```

## Usage

```js
const zrnf = require('zrnf');

let result = zrnf.random("exampleString", 5);
console.log(result); // Outputs a random 5-character string from "exampleString"
```