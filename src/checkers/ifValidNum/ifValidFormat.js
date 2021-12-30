export default function ifValidFormat(num) {
	const regexp = /(^-?)(\d+)(\.\d+)?$|NaN|Infinity/;

	if (!regexp.test(num)) throw new Error('Please enter correct number or NaN or Infinity or -Infinity');
}
