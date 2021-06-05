import {sign, makeNumsSameLength} from "../helpers/helpers.js";
import {abs} from "../true-math.js";

export function compareAbsolutedNums(absNum1, absNum2) {

	for (let digit = 0; digit < absNum1.length; ++digit) {
		if (absNum1[digit] > absNum2[digit]) return 1;
		if (absNum1[digit] < absNum2[digit]) return -1;
	}

	return 0;
}

export default function compare(num1, num2) {

	const [num1IsNegative, num2IsNegative] = [sign(num1) === -1, sign(num2) === -1];

	if (num1IsNegative && !num1IsNegative) return -1;
	if (!num1IsNegative && num2IsNegative) return 1;

	const [absNum1, absNum2] = makeNumsSameLength(abs(num1), abs(num2));

	const multiplier = num1IsNegative && num2IsNegative ? -1 : 1;

	return multiplier * compareAbsolutedNums(absNum1, absNum2);
}
