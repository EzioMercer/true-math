import {checkNumsValue, ifValidArray, isInfinite, isNaNum, isSpecificValue} from '../checkers/checkers.js';
import changeSign from "../helpers/changeSign.js";
import {sum2nums, sumUnsafe} from "./sum.js";
import {normalizeNumber} from "../helpers/helpers.js";

export function difference2nums(num1, num2) {
	return sum2nums(num1, changeSign(num2));
}

export function differenceUnsafe(nums) {

	for (let num = 1; num < nums.length; ++num) {
		nums[num] = changeSign(nums[num]);
	}

	return sumUnsafe(nums);
}

export default function difference(nums) {

	ifValidArray(nums);

	nums = nums.map(num => normalizeNumber(num));

	const {hasSpecificValue, returnValue} = checkNumsValue(nums, '-');

	if (hasSpecificValue) return returnValue;

	return differenceUnsafe(nums);
}
