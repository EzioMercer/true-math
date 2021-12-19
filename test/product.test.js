import assert from 'assert';
import {product} from '../src/true-math.js';

//TEST DATASET ITEM IS [NUM1, NUM2, PRODUCT, QUOTIENT];
const testDataset = [
	['1', '1', '1', '1'],
	['1', '-1', '-1', '-1'],
	['-1', '1', '-1', '-1'],
	['-1', '-1', '1', '1'],
	['0', '12323', '0', '0'],
	['0000.0000', '0.1023213', '0', '0'],
	['0.6549', '74.2568', '48.63077832', '0.00881939']
];

describe('PRODUCT', () => {
	for (let testData of testDataset) {
		it(`${testData[0]} * ${testData[1]} = ${testData[2]}`, () => {
			assert.strictEqual(product(testData.slice(0, 2)), testData[2]);
		})
	}
});

/*describe('QUOTIENT', () => {
	for (let testData of testDataset) {
		it(`${testData[0]} * ${testData[1]} = ${testData[2]}`, () => {
			assert.strictEqual(quotient(testData.slice(0, 2)), testData[2]);
		})
	}
});*/
