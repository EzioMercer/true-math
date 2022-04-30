import ifValidArray from '../checkers/ifValidArray.js';
import {normalizeNumber} from '../helpers/helpers.js';
import {signUnsafe} from '../helpers/sign.js';
import {difference2nums} from './difference.js';
import {absUnsafe} from './abs.js';
import {sum2nums} from './sum.js';
import {product2nums} from './product.js';
import {checkNumsValue} from '../checkers/checkers.js';

function quotient2nums(num1, num2, accuracy) {

	let [num1Sign, num2Sign] = [signUnsafe(num1), signUnsafe(num2)];
	const needMinus = num1Sign * num2Sign === -1;

	[num1, num2] = [absUnsafe(num1), absUnsafe(num2)];

	let quotientNextNumber = '0';
	let quotient = '';
	let num1Prev = num1;
	let hasDot = false;

	while (accuracy !== '-1') {
		while (true) {
			num1Prev = num1;
			num1 = difference2nums(num1, num2);
			num1Sign = signUnsafe(num1);

			if (num1Sign === 1 || num1Sign === 0) {
				quotientNextNumber = sum2nums(quotientNextNumber, '1');

				if (num1Sign === 1) continue;
			}

			break;
		}

		quotient += quotientNextNumber;

		if (num1Sign === 0) {
			break;
		} else {
			if (!hasDot && accuracy !== '0') {
				quotient += '.';
				hasDot = true;
			}

			accuracy = difference2nums(accuracy, '1');
			quotientNextNumber = '0';
			num1 = product2nums(num1Prev, '10');
		}
	}

	if (needMinus) return '-' + quotient;

	return quotient;
}

export function quotientUnsafe(nums, accuracy) {

	if (nums.length === 0) return '1';
	if (nums.length === 1) return nums[0];

	let quotient = nums[0];

	for (let i = 1; i < nums.length; ++i) {
		quotient = quotient2nums(quotient, nums[i], accuracy);
	}

	return quotient;
}

export default function quotient(nums, accuracy = '8') {

	ifValidArray(nums);

	if (accuracy !== undefined) {
		if (typeof (accuracy) !== 'string') throw new Error('Accuracy must be a string');
		if (!(/^\d+$/.test(accuracy))) throw new Error('Accuracy must be a non-negative integer number');
	}

	nums.map(num => normalizeNumber(num));

	const {hasSpecificValue, returnValue} = checkNumsValue(nums, '/');

	if (hasSpecificValue) return returnValue;

	return quotientUnsafe(nums, accuracy);
}
