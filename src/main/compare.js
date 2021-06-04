import {isNegative, makeNumsSameLength} from "../helpers/helpers.js";
import {abs} from "../true-math.js";

export default function compare(num1, num2, skipNumsFormatting = false) {

	let [num1IsNegative, num2IsNegative] = [isNegative(num1), isNegative(num2)];

	if (num1IsNegative && !num1IsNegative) return -1;
	if (!num1IsNegative && num2IsNegative) return 1;

	if (!skipNumsFormatting) {
		if (num1IsNegative && num2IsNegative) [num1, num2] = [abs(num1), abs(num2)];
		[num1, num2] = makeNumsSameLength(num1, num2);
	}

	let multiplier = num1IsNegative && num2IsNegative ? -1 : 1;

	for (let digit = 0; digit < num1.length; ++digit) {
		if (num1[digit] > num2[digit]) return multiplier;
		if (num1[digit] < num2[digit]) return -multiplier;
	}

	return 0;
}
