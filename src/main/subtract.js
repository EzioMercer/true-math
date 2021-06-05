import {ifArray, ifArrayOfNums} from '../checkers/checkers.js';
import getNegative from "../helpers/getNegative.js";
import {sumWithoutChecking} from "./sum.js";

export function subtractWithoutChecking(nums) {
	for(let num = 1; num < nums.length; ++num) {
		nums[num] = getNegative(nums[num]);
	}

	return sumWithoutChecking(nums);
}

export default function subtract (nums) {

	ifArray(nums);
	ifArrayOfNums(nums);

	return subtractWithoutChecking(nums)
}
