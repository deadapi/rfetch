# zrnf

**zrnf** is your go-to for quick random strings, numbers, or symbols in JavaScript. Just give it an input and length, and it’ll handle the rest!.

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

```js
const zrnf = require('zrnf');

let result = zrnf.random("exampleString");
console.log(result); // Outputs a random string with the same length as "exampleString"
```