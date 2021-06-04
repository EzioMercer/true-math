import {isNegative} from "../helpers/helpers.js";

export default function abs(num) {
	if (isNegative(num)) return num.slice(1);

	return num;
}
