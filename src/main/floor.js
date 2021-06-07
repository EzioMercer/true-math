import {deleteUnnecessaryZeros, sign, split} from "../helpers/helpers.js";
import {subtract2nums} from "./subtract.js";
import {ifValidNum} from "../checkers/checkers.js";

export function floorUnsafe(num) {

	const [integerPart, decimalPart] = split(num);

	if (sign(num) === -1) {

		if (decimalPart.length === 0) return integerPart;

		return subtract2nums(integerPart, '1');
	}

	return integerPart;
}

export default function floor(num) {

	ifValidNum(num);

	return floorUnsafe(deleteUnnecessaryZeros(num))
}
