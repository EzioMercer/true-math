import {ifArray, ifValidNums} from '../checkers/checkers.js';
import changeSign from "../helpers/changeSign.js";
import {sum2nums, sumUnsafe} from "./sum.js";
import {deleteUnnecessaryZeros} from "../helpers/helpers.js";

export function subtract2nums(num1, num2) {
	return sum2nums(num1, changeSign(num2));
}

export function subtractUnsafe(nums) {

	for (let num = 1; num < nums.length; ++num) {
		nums[num] = changeSign(nums[num]);
	}

	return sumUnsafe(nums);
}

export default function subtract(nums) {

	ifArray(nums);
	ifValidNums(nums);

	return subtractUnsafe(nums.map(num => deleteUnnecessaryZeros(num)))
}
