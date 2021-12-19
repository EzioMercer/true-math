import {ifValidArray} from '../checkers/checkers.js';
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

	return differenceUnsafe(nums.map(num => normalizeNumber(num)))
}
