import {normalizeNumber, sign} from "../helpers/helpers.js";
import {ifValidNum} from "../checkers/checkers.js";

export function absUnsafe(num) {
	return sign(num) === -1 ? num.slice(1) : num;
}

export default function abs(num) {

	ifValidNum(num);

	return absUnsafe(normalizeNumber(num));
}
