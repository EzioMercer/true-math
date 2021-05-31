export default function checkIfArrayOfNums(nums) {

	const regexp = /(^-?)(\d+)(\.\d+)?$/;

	if(nums.length < 2) throw new Error('Array must contain at least two nums');

	for (const num of nums) {
		if (typeof (num) !== 'string') throw new Error('All array items must be in a string format');
		if (num.length === 0) throw new Error('Array item must contain at least one digit');
		if (!regexp.test(num)) throw new Error('Number can contain only digits, dot and character minus at the start. Must start with minus or digit and end with digit');
	}
}
