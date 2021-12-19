import {signUnsafe} from "./sign.js";

export default function normalizeNumber(num) {

	const needMinus = signUnsafe(num) === -1;

	if (needMinus) num = num.slice(1);

	let startZerosCount = 0;
	let endZerosCount = num.length;

	const dotIndex = num.indexOf('.');
	const dotPosition = dotIndex === -1 ? num.length : dotIndex;

	for (let digit = 0; digit < dotPosition - 1; ++digit) {
		if (num[digit] === '0' && num[digit + 1] !== '.') ++startZerosCount;
		else break;
	}

	for (let digit = num.length - 1; digit >= dotPosition; --digit) {
		if (num[digit] === '0' || num[digit] === '.') --endZerosCount;
		else break;
	}

	const croppedNumber = num.slice(startZerosCount, endZerosCount);

	if (needMinus && croppedNumber !== '0') return '-' + croppedNumber;

	return croppedNumber;
}
