import {ifArray, ifArrayOfNums} from '../checkers/checkers.js';
import getNegative from "../helpers/getNegative.js";
import {sum} from "../true-math.js";

export default function subtract (nums) {

	ifArray(nums);
	ifArrayOfNums(nums);

	for(let num = 1; num < nums.length; ++num) {
		nums[num] = getNegative(nums[num]);
	}

	return sum(nums, true);
}
