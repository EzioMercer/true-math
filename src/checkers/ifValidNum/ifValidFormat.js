export default function ifValidFormat(num) {
	const regexp = /(^-?)(\d+)(\.\d+)?$/;

	if (!regexp.test(num)) throw new Error('Number can contain only digits, dot and minus. Must start with minus or digit and end with digit');
}
