# true-math
True Math - math library for numbers of arbitrary length

## Install
```
npm install true-math --save
```

## Usage

Just import need functions from `true-math` library and use them

Available functions:
* [abs](#abs)
* [ceil](#ceil)
* [compare](#compare)
* [difference](#difference)
* [floor](#floor)
* [product](#product)
* [sum](#sum)
* [quotient](#quotient)

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

## Documentation

### Notations

`NaN` - `Not a Number`

`Inf` or `+Inf` - `Infinity`

`-Inf` - `-Infinity`

`Any` - `Number or NaN or Inf or -Inf`

`-Number` - `Number < 0`

`+Number` - `Number > 0`

`Number` - `-Number or +Number or 0`

### Functions
<a id="abs"></a>
### `abs(num: string): string`

Returns absolute value of number

Table of specific values:

|   Num   | Return |
|:-------:|:------:|
|   NaN   |  NaN   |
| &pm;Inf |  Inf   |

<a id="ceil"></a>
### `ceil(num: string): string`

If number has decimal part then returns the closest next integer

Table of specific values:

|   Num   | Return  |
|:-------:|:-------:|
|   NaN   |   NaN   |
| &pm;Inf | &pm;Inf |

<a id="compare"></a>
### `compare(num1: string, num2: string): string`

Returns -1 if num1 < num2

Returns 0 if num1 = num2

Returns 1 if num1 > num2

Table of specific values (permutation does not change the result):

|  Num1  |  Num2   | Return  |
|:------:|:-------:|:-------:|
|  NaN   |   Any   |   NaN   |
|  Inf   | &pm;Inf |   Inf   |
|  Inf   | Number  |   Inf   |
|  -Inf  |  -Inf   |  -Inf   |
|  -Inf  | Number  | Number  |

<a id="difference"></a>
### `difference(nums: [string]): string`

Returns difference of first number and others

Table of specific values:

|  Num1   |  Num2   | Return  |
|:-------:|:-------:|:-------:|
|   NaN   |   Any   |   NaN   |
|   Any   |   NaN   |   NaN   |
|   Inf   |   Inf   |   NaN   |
|   Inf   |  -Inf   |   Inf   |
|  -Inf   |   Inf   |  -Inf   |
|  -Inf   |  -Inf   |   NaN   |
| &pm;Inf | Number  | &pm;Inf |
| Number  | &pm;Inf | &mp;Inf |

<a id="floor"></a>
### `floor(num: string): string`

If number has decimal part then returns the closest previous integer

Table of specific values:

|   Num   | Return  |
|:-------:|:-------:|
|   NaN   |   NaN   |
| &pm;Inf | &pm;Inf |

<a id="product"></a>
### `product(nums: [string]): string`
  
Returns product of first number and others

Table of specific values (permutation does not change the result):

|  Num1   |    Num2    | Return  |
|:-------:|:----------:|:-------:|
|   NaN   |    Any     |   NaN   |
|   Inf   |  &pm;Inf   | &pm;Inf |
|   Inf   | &pm;Number | &pm;Inf |
|  -Inf   |  &pm;Inf   | &mp;Inf |
|  -Inf   | &pm;Number | &mp;Inf |
| &pm;Inf |     0      |   NaN   |

<a id="sum"></a>
### `sum(nums: [string]): string`

Returns sum of first number and others

Table of specific values (permutation does not change the result):

|  Num1  |  Num2   | Return  |
|:------:|:-------:|:-------:|
|  NaN   |   Any   |   NaN   |
|  Inf   |   Inf   |   Inf   |
|  Inf   |  -Inf   |   NaN   |
|  -Inf  |  -Inf   |  -Inf   |
| Number | &pm;Inf | &pm;Inf |

<a id="quotient"></a>
### `quotient(nums: [string], accuracy: string): string`

Returns quotient of first number and others

`accuracy` must be a non-negative integer number and equal `'8'` if not defined

Table of specific values:

|    Num1    |    Num2    | Return  |
|:----------:|:----------:|:-------:|
|    NaN     |    Any     |   NaN   |
|    Any     |    NaN     |   NaN   |
|    Inf     | &pm;Number | &pm;Inf |
|    -Inf    | &pm;Number | &mp;Inf |
|  &pm;Inf   |  &pm;Inf   |   NaN   |
|  &pm;Inf   |     0      | &pm;Inf |
|     0      |  &pm;Inf   |    0    |
| &pm;Number |     0      | &pm;Inf |
|     0      |     0      |   NaN   |

## License
GPL-3.0-only


