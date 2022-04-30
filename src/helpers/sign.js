import {normalizeNumber} from './helpers.js';

export function signUnsafe(num) {
	if (num[0] === '-') return -1;
	if (num === '0') return 0;

	return 1;
}

export default function sign(num) {
	return signUnsafe(normalizeNumber(num));
}
