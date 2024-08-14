# Rfetch

**Rfetch** is a JavaScript package for generating random strings, numbers, or symbols.

## Installation

To install **rfetch**, use npm:

```bash
npm install rfetch
```

## Usage
```js
const rfetch = require('rfetch');

let result = rfetch.random("exampleString", 5);
console.log(result); // Outputs a random 5-character string from "exampleString"
```