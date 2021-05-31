import TM from './true-math.js';

const testDatas = [
	/*['0', '0'],
	['0', '-0'],
	['-0', '0'],
	['-0', '-0'],
	['0.0', '0.0'],
	['-0.0', '0.0'],
	['0.0', '-0.0'],
	['-0.0', '-0.0'],
	['0.0', '0'],
	['0.0', '-0'],
	['-0.0', '0'],
	['-0.0', '-0'],
	[ '0', '0.0'],
	[ '-0', '0.0'],
	[ '0', '-0.0'],
	[ '-0', '-0.0'],*/

	['-0000000000000001.0', '-001.80000']
];

for (const testData of testDatas) {
	console.log('\nTest for:', testData);
	console.log('Sum is : ', TM.sum(testData));
	console.log('Difference is : ', TM.subtract(testData));
}
