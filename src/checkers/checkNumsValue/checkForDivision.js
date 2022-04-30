import {isInfinite, isNaNum} from '../checkers.js';
import {INFINITY, NAN, NEGATIVE_INFINITY} from '../../main/constants.js';
import {signUnsafe} from '../../helpers/sign.js';

/*
 a  b  c  |  /
--------------
 0  0  x  |  N
?i ?i  x  |  N
 x  0 ?i  |  N
 x  0  x  | ?i * sign
 x ?i  x  |  0
 0  x  x  |  0
*/

export default function checkForDivision(nums, result) {
	if (isNaN(nums[0])) {
		result.hasSpecificValue = true;
		result.returnValue = NAN;
		return;
	}

	const isFirstAnyInfinity = isInfinite(nums[0]);
	const isFirstZero = nums[0] === '0';

	let hasAnotherAnyInfinity = false;
	let hasZero = false;
	let isAnswerNegative = false;

	for (let i = 1; i < nums.length; ++i) {

		const num = nums[i];

		if (isNaNum(num)) {
			result.hasSpecificValue = true;
			result.returnValue = NAN;
			return;
		} else if (isInfinite(num)) {
			result.hasSpecificValue = true;

			if (isFirstAnyInfinity || hasZero) {
				result.returnValue = NAN;
				return;
			}

			hasAnotherAnyInfinity = true;
		} else if (num === '0') {
			result.hasSpecificValue = true;

			if (isFirstZero || hasAnotherAnyInfinity) {
				result.returnValue = NAN;
				return;
			}

			hasZero = true;
		}

		if (signUnsafe(num) === -1) isAnswerNegative = !isAnswerNegative;
	}

	if (hasZero) {
		if (isAnswerNegative) result.returnValue = NEGATIVE_INFINITY;
		else result.returnValue = INFINITY;
		return;
	}

	if (hasAnotherAnyInfinity || isFirstZero) {
		result.hasSpecificValue = true;
		result.returnValue = '0';
	}
}
