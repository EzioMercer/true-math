import assert from 'assert';
import {difference, sum} from '../src/true-math.js';

//TEST DATASET ITEM IS [NUM1, NUM2, SUM, SUBTRACT];
const testDataset = [
	['9', '99', '108', '-90'],
	['9', '1', '10', '8'],
	['9', '-1', '8', '10'],
	['-9', '1', '-8', '-10'],
	['-9', '-1', '-10', '-8'],
	['1', '9', '10', '-8'],
	['-1', '9', '8', '-10'],
	['1', '-9', '-8', '10'],
	['-1', '-9', '-10', '8'],
	['5', '6', '11', '-1'],
	['5', '-6', '-1', '11'],
	['-5', '6', '1', '-11'],
	['-5', '-6', '-11', '1'],
	['6', '5', '11', '1'],
	['-6', '5', '-1', '-11'],
	['6', '-5', '1', '11'],
	['-6', '-5', '-11', '-1']
];

describe('SUM', () => {
	for (let testData of testDataset) {
		it(`${testData[0]} + ${testData[1]} = ${testData[2]}`, () => {
			assert.strictEqual(sum(testData.slice(0, 2)), testData[2]);
		})
	}
});

describe('SUBTRACT', () => {
	for (let testData of testDataset) {
		it(`${testData[0]} - ${testData[1]} = ${testData[3]}`, () => {
			assert.strictEqual(difference(testData.slice(0, 2)), testData[3]);
		})
	}
});
