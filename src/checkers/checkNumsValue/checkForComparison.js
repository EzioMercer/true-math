import {isNaNum} from "../checkers.js";
import {INFINITY, NAN} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

export default function checkForComparison(nums) {
	const num1 = nums[0];
	const num2 = nums[1];

	if (isNaNum(num1) || isNaNum(num2)) return NAN;
	if (isPositiveInfinite(num1) || isPositiveInfinite(num2)) return INFINITY;
	if (isNegativeInfinite(num1)) return num2;
	if (isNegativeInfinite(num2)) return num1;
}
