import ifArray from "../checkers/ifArray.js";
import {ifValidNums} from "../checkers/checkers.js";
import {deleteUnnecessaryZeros, sign} from "../helpers/helpers.js";
import {signUnsafe} from "../helpers/sign.js";

function quotient2nums(num1, num2) {

	const [num1Sign, num2Sign] = [sign(num1), sign(num2)];

	return [num1, num2];
}

export function quotientUnsafe(nums) {

	if (nums.length === 0) return '1';
	if (nums.length === 1) return nums[0];

	let quotient = nums[0];

	for (let num = 1; num < nums.length; ++num) {

		if (quotient === '0') {
			if (nums[num] === '0') {
				quotient = 'NaN';
				break;
			}

			continue;
		}

		if (nums[num] === '0') {
			quotient = signUnsafe(quotient) === 1 ? '' : '-';
			quotient += 'Infinity';
			break;
		}

		quotient = quotient2nums(quotient, nums[num]);
	}

	return quotient;
}

export default function quotient(nums) {
	ifArray(nums);
	ifValidNums(nums);

	return quotientUnsafe(nums.map(num => deleteUnnecessaryZeros(num)));
}