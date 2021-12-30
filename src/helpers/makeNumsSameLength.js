import {padNums, split} from "./helpers.js";

export default function makeNumsSameLength(num1, num2) {

	let [num1IntegerPart, num1DecimalPart] = split(num1);
	let [num2IntegerPart, num2DecimalPart] = split(num2);

	const targetIntegerLength = num1IntegerPart.length > num2IntegerPart.length ? num1IntegerPart.length : num2IntegerPart.length;
	const targetDecimalLength = num1DecimalPart.length > num2DecimalPart.length ? num1DecimalPart.length : num2DecimalPart.length;

	[num1IntegerPart, num1DecimalPart] = padNums(num1IntegerPart, num1DecimalPart, targetIntegerLength, targetDecimalLength);
	[num2IntegerPart, num2DecimalPart] = padNums(num2IntegerPart, num2DecimalPart, targetIntegerLength, targetDecimalLength);

	if (targetDecimalLength !== 0) {
		return [num1IntegerPart + '.' + num1DecimalPart, num2IntegerPart + '.' + num2DecimalPart, targetDecimalLength];
	}

	return [num1IntegerPart + num1DecimalPart, num2IntegerPart + num2DecimalPart, targetDecimalLength];
}
