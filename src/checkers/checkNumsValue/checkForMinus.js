import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

/*
 a  b  c  |  -
--------------
 x  i -i  |  N
 i  i  x  |  N
-i -i  x  |  N
 x -i  x  |  i
 x  i  x  | -i
?i  x  x  | ?i
*/

export default function checkForMinus(nums, result) {
	if (isNaN(nums[0])) {
		result.hasSpecificValue = true;
		result.returnValue = NAN;
		return;
	}

	const isFirstInfinity = isPositiveInfinite(nums[0]);
	const isFirstNegativeInfinity = isNegativeInfinite(nums[0]);

	let hasAnotherInfinity = false;
	let hasAnotherNegativeInfinity = false;

	for (let i = 1; i < nums.length; ++i) {

		const num = nums[i];

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;

			if (isFirstInfinity || hasAnotherNegativeInfinity) {
				result.returnValue = NAN;
				return;
			}

			hasAnotherInfinity = true;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;

			if (isFirstNegativeInfinity || hasAnotherInfinity) {
				result.returnValue = NAN;
				return;
			}

			hasAnotherNegativeInfinity = true;
		}
	}

	if (isFirstInfinity || hasAnotherNegativeInfinity) {
		result.returnValue = INFINITY;
		return;
	}

	if (isFirstNegativeInfinity || hasAnotherInfinity) {
		result.returnValue = NEGATIVE_INFINITY;
	}
}
