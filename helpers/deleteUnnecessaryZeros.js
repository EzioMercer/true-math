export default function deleteUnnecessaryZeros(num) {

	let startZerosCount = 0;
	let endZerosCount = num.length;
	const dotIndex = num.indexOf('.');
	const dotPosition = dotIndex === -1 ? num.length : dotIndex;

	for (let digit = 0; digit < dotPosition - 1; ++digit) {
		if(num[digit] === '0') ++startZerosCount;
		else break;
	}

	for (let digit = num.length - 1; digit > dotPosition; --digit) {
		if(num[digit] === '0') --endZerosCount;
		else break;
	}

	return num.slice(startZerosCount, endZerosCount);
}
