import {isNaNum} from "../checkers.js";
import {INFINITY, NAN, NEGATIVE_INFINITY} from "../../main/constants.js";
import isPositiveInfinite from "../specificValue/isPositiveInfinite.js";
import isNegativeInfinite from "../specificValue/isNegativeInfinite.js";
import {signUnsafe} from "../../helpers/sign.js";

/*
 a  b |  +
----------
 0  i |  N
 0 -i |  N
 x  i |  i * sign(x)
 x -i | -i * sign(x)
*/

export default function checkForMultiplication(nums, result) {
	let hasInfinity = false;
	let hasNegativeInfinity = false;
	let needChangeSign = false;

	for (const num of nums) {

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isPositiveInfinite(num)) {
			result.hasSpecificValue = true;
			hasInfinity = true;
			continue;
		} else if (isNegativeInfinite(num)) {
			result.hasSpecificValue = true;
			hasNegativeInfinity = true;
			continue;
		} else if (num === '0' && (hasInfinity || hasNegativeInfinity)) {
			result.returnValue = NAN;
			return;
		}

		if (signUnsafe(num) === -1) needChangeSign = !needChangeSign;
	}

	if (hasInfinity) {
		if (needChangeSign) result.returnValue = NEGATIVE_INFINITY;
		else result.returnValue = INFINITY;
		return;
	}

	if (hasNegativeInfinity) {
		if (needChangeSign) result.returnValue = INFINITY;
		else result.returnValue = NEGATIVE_INFINITY;
	}
}
