import {ifArray, ifArrayOfNums} from '../checkers/checkers.js';
import {
	makeNumsSameLength,
	deleteUnnecessaryZeros,
	sign,
} from '../helpers/helpers.js';
import {abs} from "../true-math.js";
import {compareAbsolutedNums} from "./compare.js";

export function sum2nums(num1, num2) {

	const [num1Sign, num2Sign] = [sign(num1), sign(num2)];
	const [num1IsNegative, num2IsNegative] = [num1Sign === -1, num2Sign === -1];
	let [absNum1, absNum2] = makeNumsSameLength(abs(num1), abs(num2));
	const isSecondBigger = compareAbsolutedNums(absNum1, absNum2) === -1;
	let needMinus = false;
	let sum = '';

	let multiplier = 1;

	multiplier *= num1Sign * num2Sign;

	if (multiplier === -1 && isSecondBigger) {
		[absNum1, absNum2] = [absNum2, absNum1];
	}

	if (num1IsNegative && (num2IsNegative || !isSecondBigger) || num2IsNegative && isSecondBigger) {
		needMinus = true;
	}

	let memory = 0;

	for (let digit = absNum1.length - 1; digit >= 0; --digit) {

		if (absNum1[digit] === '.') {
			sum = '.' + sum;
			continue;
		}

		let result = memory + (+absNum1[digit]) + multiplier * (+absNum2[digit]);
		memory = 0;

		if (result >= 10 || result < 0) {
			result += multiplier * -10;
			memory = multiplier;
		}

		sum = result + sum;

	}

	sum = deleteUnnecessaryZeros(sum);

	if (memory === 1) sum = '1' + sum;
	if (needMinus && sum !== '0') sum = '-' + sum;

	return sum;
}

export function sumWithoutChecking(nums) {

	nums = nums.map(num => deleteUnnecessaryZeros(num));

	if (nums.length === 0) return '0';
	if (nums.length === 1) return nums[0];

	let sum = nums[0];

	for(let num = 1; num < nums.length; ++num) {
		sum = sum2nums(sum, nums[num]);
	}

	return sum;
}

export default function sum (nums) {

	ifArray(nums);
	ifArrayOfNums(nums);

	return sumWithoutChecking(nums)
}
