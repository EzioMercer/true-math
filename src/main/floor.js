import {normalizeNumber, sign, split} from '../helpers/helpers.js';
import {difference2nums} from './difference.js';
import {ifValidNum, isSpecificValue} from '../checkers/checkers.js';

export function floorUnsafe(num) {

	const [integerPart, decimalPart] = split(num);

	if (sign(num) === -1) {

		if (decimalPart.length === 0) return integerPart;

		return difference2nums(integerPart, '1');
	}

	return integerPart;
}

export default function floor(num) {

	ifValidNum(num);

	if (isSpecificValue(num)) return num;

	return floorUnsafe(normalizeNumber(num));
}
