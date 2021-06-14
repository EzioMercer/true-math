# true-math
True Math - math library for numbers of arbitrary length

## Install
```
npm install true-math --save
```

## Usage

Just import need functions from `true-math` library and use them

Available functions:
* abs(string): string
* ceil(string): string
* compare(string, string): number
* floor(string): string
* subtraction ([string]): string
* sum ([string]): string
* product ([string]): string

## Example

Import `{needFuntions}` from `true-math` in the file test.js

```
import {sum, subtract, ...} from 'true-math';
```

then call them like shown below:

```
const testData = ['0.1001', '0.0002'];

console.log('\nTest for:', testData);
console.log('Sum is : ', sum(testData));
console.log('Difference is : ', subtract(testData));

```

## License
GPL-3.0-only


