import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";
import {signUnsafe} from "../../helpers/sign.js";

/*
 a  b |  +
----------
 0 ?i |  N
 x ?i | ?i * sign
*/

export default function checkForMultiplication(nums, result) {
	let hasInfinity = false;
	let hasNegativeInfinity = false;
	let hasZero = false;
	let isAnswerNegative = false;

	for (const num of nums) {

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;

			if (hasZero) {
				result.returnValue = NAN;
				return;
			}

			hasInfinity = true;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;

			if (hasZero) {
				result.returnValue = NAN;
				return;
			}

			hasNegativeInfinity = true;
			isAnswerNegative = !isAnswerNegative;
			continue;
		} else if (num === '0') {
			hasZero = true;

			if (hasInfinity || hasNegativeInfinity) {
				result.returnValue = NAN;
				return;
			}

			continue;
		}

		if (signUnsafe(num) === -1) isAnswerNegative = !isAnswerNegative;
	}

	if (hasInfinity || hasNegativeInfinity) {
		if (isAnswerNegative) result.returnValue = NEGATIVE_INFINITY;
		else result.returnValue = INFINITY;
		return;
	}

	if (hasZero) {
		result.hasSpecificValue = true;
		result.returnValue = '0';
	}
}
