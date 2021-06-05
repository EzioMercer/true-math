export default function ifArrayOfNums(nums) {

	const regexp = /(^-?)(\d+)(\.\d+)?$/;

	for (const num of nums) {
		if (typeof (num) !== 'string') throw new Error('All array items nums must be a string');
		if (num.length === 0) throw new Error('Array item must contain at least one digit');
		if (!regexp.test(num)) throw new Error('Number can contain only digits, dot and minus. Must start with minus or digit and end with digit');
	}
}
