import {ifValidNum, isSpecificValue} from '../checkers/checkers.js';
import {normalizeNumber, split} from '../helpers/helpers.js';

export function roundUnsafe(num) {
	const [integerPart, decimalPart] = split(num);

	return integerPart === '-0' ? '0' : integerPart;
}

export default function round(num, accuracy = '0') {

	ifValidNum(num);

	if (isSpecificValue(num)) return num;

	return roundUnsafe(normalizeNumber(num));
}
