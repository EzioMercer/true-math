import {deleteUnnecessaryZeros, sign} from "../helpers/helpers.js";

export function absWithoutFormatting(num) {
	if (sign(num) === -1) return num.slice(1);

	return num;
}

export default function abs(num) {

	num = deleteUnnecessaryZeros(num);

	return absWithoutFormatting(num);
}
