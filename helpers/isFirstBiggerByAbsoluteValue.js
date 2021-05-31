export default function isFirstBiggerByAbsoluteValue(num1, num2) {

	for (let digit = num1.length - 1; digit >= 0; --digit) {
		if (num1[digit] > num2[digit]) return true;
		if (num1[digit] < num2[digit]) return false;
	}

	return true;
}
