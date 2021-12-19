import ifValidArray from "../checkers/ifValidArray.js";
import {normalizeNumber} from "../helpers/helpers.js";
import {signUnsafe} from "../helpers/sign.js";
import {difference2nums} from "./difference.js";
import {absUnsafe} from "./abs.js";
import {sum2nums} from "./sum.js";
import {product2nums} from "./product.js";

function quotient2nums(num1, num2) {

	const [num1Sign, num2Sign] = [signUnsafe(num1), signUnsafe(num2)];
	const needMinus = num1Sign * num2Sign === -1;

	[num1, num2] = [absUnsafe(num1), absUnsafe(num2)];

	let limit = 8;
	let quotientNextNumber = '0';
	let quotient = '';
	let num1Prev = num1;

	while (true) {
		while (signUnsafe(num1) === 1) {
			num1Prev = num1;
			num1 = difference2nums(num1, num2);
			quotientNextNumber = sum2nums(quotientNextNumber, '1');
		}

		quotient += quotientNextNumber;

		if (signUnsafe(num1) === 0) {
			break;
		} else {
			quotientNextNumber = '0';
			num1 = product2nums(num1Prev, '10');
		}
	}

	if (needMinus) return '-' + quotient;

	return quotient;
}

export function quotientUnsafe(nums) {

	if (nums.length === 0) return '1';
	if (nums.length === 1) return nums[0];

	let quotient = nums[0];

	for (let i = 1; i < nums.length; ++i) {
		const num = nums[i];

		if (quotient === '0') {
			if (num === '0') {
				quotient = 'NaN';
				break;
			}

			continue;
		}

		if (num === '0') {
			quotient = signUnsafe(quotient) === 1 ? '' : '-';
			quotient += 'Infinity';
			break;
		}

		quotient = quotient2nums(quotient, num);
	}

	return quotient;
}

export default function quotient(nums) {

	ifValidArray(nums);

	return quotientUnsafe(nums.map(num => normalizeNumber(num)));
}
