import {sign} from './helpers.js';

export default function changeSign(num) {
	if (sign(num) === -1) return num.slice(1);

	return '-' + num;
}
