import assert from 'assert';
import {abs} from '../src/true-math.js';

//TEST DATASET ITEM IS [NUM, ABS];
const testDataset = [
	['-1', '1'],
	['0', '0'],
	['1', '1']
];

describe('ABS', () => {
	for (let testData of testDataset) {
		it(`abs of ${testData[0]} is ${testData[1]}`, () => {
			assert.strictEqual(abs(testData[0]), testData[1]);
		})
	}
});
