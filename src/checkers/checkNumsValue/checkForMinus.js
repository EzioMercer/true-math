import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

/*
 a  b  c  |  -
--------------
 x  i -i  |  N
 x -i  i  |  N
 i  i  x  |  N
-i -i  x  |  N
 x -i  x  |  i
 i  x  x  |  i
 x  i  x  | -i
-i  x  x  | -i
*/

export default function checkForMinus(nums, result) {
	if (isNaN(nums[0])) {
		result.hasSpecificValue = true;
		result.returnValue = NAN;
		return;
	}

	const isFirstInfinity = isPositiveInfinite(nums[0]);
	const isFirstNegativeInfinity = isNegativeInfinite(nums[0]);

	let isAnotherInfinity = false;
	let isAnotherNegativeInfinity = false;

	for (let i = 1; i < nums.length; ++i) {

		const num = nums[i];

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;

			if (isFirstInfinity || isAnotherNegativeInfinity) {
				result.returnValue = NAN;
				return;
			}

			isAnotherInfinity = true;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;

			if (isFirstNegativeInfinity || isAnotherInfinity) {
				result.returnValue = NAN;
				return;
			}

			isAnotherNegativeInfinity = true;
		}
	}

	if (isFirstInfinity || isAnotherNegativeInfinity) {
		result.returnValue = INFINITY;
		return;
	}

	if (isFirstNegativeInfinity || isAnotherInfinity) {
		result.returnValue = NEGATIVE_INFINITY;
	}
}
