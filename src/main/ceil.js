import {ifValidNum, isSpecificValue} from "../checkers/checkers.js";
import {normalizeNumber, sign, split} from "../helpers/helpers.js";
import {sum2nums} from "./sum.js";

export function ceilUnsafe(num) {
	const [integerPart, decimalPart] = split(num);

	if (sign(num) === 1) {

		if (decimalPart.length === 0) return integerPart;

		return sum2nums(integerPart, '1');
	}

	return integerPart === '-0' ? '0' : integerPart;
}

export default function ceil(num) {

	ifValidNum(num);

	if(isSpecificValue(num)) return num;

	return ceilUnsafe(normalizeNumber(num))
}
