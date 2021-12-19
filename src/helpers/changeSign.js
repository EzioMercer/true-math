import {sign} from './helpers.js';

export default function changeSign(num) {
	switch (sign(num)) {
		case -1:
			return num.slice(1);
		case 0:
			return num;
		case 1:
			return '-' + num;
	}
}
