export default function numToDigitsArray(num) {
	return num.split('').map(digit => +digit);
}
