import {ifArray, ifArrayOfNums} from '../checkers/checkers.js';
import {
	makeNumsSameLength,
	returnNum,
	deleteUnnecessaryZeros,
	isNegative,
	numToDigitsArray
} from '../helpers/helpers.js';
import {abs, compare} from "../true-math.js";

export function sum2nums(num1, num2) {

	const [num1IsNegative, num2IsNegative] = [isNegative(num1), isNegative(num2)];
	let [absNum1, absNum2, longest_DP_length] = makeNumsSameLength(abs(num1), abs(num2));
	const compareResult = compare(absNum1, absNum2, true);
	const isSecondBigger = compareResult === -1;
	[absNum1, absNum2] = [numToDigitsArray(absNum1), numToDigitsArray(absNum2)];
	let needMinus = false;
	let multiplier = 1;

	if (num1IsNegative) multiplier *= -1;
	if (num2IsNegative) multiplier *= -1;


	if (multiplier === -1 && isSecondBigger) {
		[absNum1, absNum2] = [absNum2, absNum1];
	}

	if (num1IsNegative && (num2IsNegative || !isSecondBigger) || num2IsNegative && isSecondBigger) {
		needMinus = true;
	}

	let memory = 0;

	for (let digit = absNum1.length - 1; digit >= 0; --digit) {

		absNum1[digit] = memory + absNum1[digit] + multiplier * absNum2[digit];
		memory = 0;

		if (absNum1[digit] >= 10 || absNum1[digit] < 0) {
			absNum1[digit] += multiplier * -10;
			memory = multiplier;
		}
	}

	let num = returnNum(absNum1, longest_DP_length);

	if (memory === 1) num = '1' + num;
	if (needMinus && num !== '0') num = '-' + num;

	return num;
}

export default function sum (nums, skipChecking = false) {

	if (!skipChecking) {
		ifArray(nums);
		ifArrayOfNums(nums);
	}

	nums = nums.map(num => deleteUnnecessaryZeros(num));

	let sum = nums[0];

	for(let num = 1; num < nums.length; ++num) {
		sum = sum2nums(sum, nums[num]);
	}

	return sum;
}
