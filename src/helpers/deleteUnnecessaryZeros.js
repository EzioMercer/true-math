import {isNegative} from "./helpers.js";

export default function deleteUnnecessaryZeros(num) {

	let needMinus = isNegative(num);

	if (needMinus) num = num.slice(1);

	let startZerosCount = 0;
	let endZerosCount = num.length;
	const dotIndex = num.indexOf('.');
	const dotPosition = dotIndex === -1 ? num.length : dotIndex;

	for (let digit = 0; digit < dotPosition - 1; ++digit) {
		if(num[digit] === '0') ++startZerosCount;
		else break;
	}

	for (let digit = num.length - 1; digit >= dotPosition; --digit) {
		if(num[digit] === '0' || num[digit] === '.') --endZerosCount;
		else break;
	}

	if (needMinus) return '-' + num.slice(startZerosCount, endZerosCount);

	return num.slice(startZerosCount, endZerosCount);
}
