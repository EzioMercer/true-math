import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";

export default function checkForMinus(nums, result) {
	let hasInfinity = false;
	let infinityIndex = -1;
	let hasNegativeInfinity = false;
	let negativeInfinityIndex = -1;

	for (let i = 0; i < nums.length; ++i) {

		const num = nums[i];

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			break;
		} else if (isPositiveInfinite(num) && !hasInfinity) {
			result.hasSpecificValue = true;
			infinityIndex = i;
			hasInfinity = true;
		} else if (isNegativeInfinite(num) && !hasNegativeInfinity) {
			result.hasSpecificValue = true;
			negativeInfinityIndex = i;
			hasNegativeInfinity = true;
		}

		if (hasInfinity && hasNegativeInfinity) {
			break;
		}
	}

	if (hasInfinity && hasNegativeInfinity) {
		if (infinityIndex < negativeInfinityIndex) {
			result.returnValue = INFINITY;
			return;
		}

		if (infinityIndex > negativeInfinityIndex) {
			result.returnValue = NEGATIVE_INFINITY;
		}
	} else if (hasInfinity) {
		if (infinityIndex > 0) {
			if (isPositiveInfinite(nums[0])) {
				result.returnValue = NAN;
				return;
			}

			result.returnValue = NEGATIVE_INFINITY;
			return;
		}

		result.returnValue = INFINITY;
	} else if (hasNegativeInfinity) {
		if (negativeInfinityIndex > 0) {
			if (isNegativeInfinite(nums[0])) {
				result.returnValue = NAN;
				return;
			}

			result.returnValue = INFINITY;
			return;
		}

		result.returnValue = NEGATIVE_INFINITY;
	}
}
