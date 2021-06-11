import assert from 'assert';
import {ceil, floor} from '../src/true-math.js';

//TEST DATASET ITEM IS [NUM, CEIL, FLOOR];
const testDataset = [
	['-1', '-1', '-1'],
	['0', '0', '0'],
	['1', '1', '1'],
	['1.5', '2', '1'],
	['-1.5', '-1', '-2']
];

describe('CEIL', () => {
	for (let testData of testDataset) {
		it(`ceil of ${testData[0]} is ${testData[1]}`, () => {
			assert.strictEqual(ceil(testData[0]), testData[1]);
		})
	}
});

describe('FLOOR', () => {
	for (let testData of testDataset) {
		it(`floor of ${testData[0]} is ${testData[2]}`, () => {
			assert.strictEqual(floor(testData[0]), testData[2]);
		})
	}
});
