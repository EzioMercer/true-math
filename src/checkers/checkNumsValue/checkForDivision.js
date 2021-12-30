import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

export default function checkForDivision(nums, result) {
	let hasInfinity = false;
	let infinityIndex;
	let hasNegativeInfinity = false;
	let negativeInfinityIndex;

	for (let i = 0; i < nums.length; ++i) {

		const num = nums[i];

		if (isNaNum(num) || hasInfinity && hasNegativeInfinity) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;
			infinityIndex = i;
			hasInfinity = true;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;
			negativeInfinityIndex = i;
			hasNegativeInfinity = true;
		}
	}

	if (hasInfinity) {
		if (infinityIndex > 0) return '0';
		return INFINITY;
	}

	if (hasNegativeInfinity) {
		if (negativeInfinityIndex > 0) return '0';
		return NEGATIVE_INFINITY;
	}
}
