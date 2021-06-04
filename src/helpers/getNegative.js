import {isNegative} from './helpers.js';

export default function getNegative(num) {
	if (isNegative(num)) return num.slice(1);

	return '-' + num;
}
