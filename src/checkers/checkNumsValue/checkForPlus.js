import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

export default function checkForPlus(nums, result) {
	let hasInfinity = false;
	let hasNegativeInfinity = false;

	for (const num of nums) {

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;
			hasInfinity = true;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;
			hasNegativeInfinity = true;
		}

		if (hasInfinity && hasNegativeInfinity) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		}
	}

	if (hasInfinity) {
		result.returnValue = INFINITY;
		return;
	}

	if (hasNegativeInfinity) result.returnValue = NEGATIVE_INFINITY;
}
