import {ifArray, ifArrayOfNums} from '../checkers/checkers.js';
import {
	makeNumsSameLength,
	arrayNumToString,
	deleteUnnecessaryZeros,
	sign,
	numToDigitsArray
} from '../helpers/helpers.js';
import {abs, compare} from "../true-math.js";
import {compareAbsolutedNums} from "./compare.js";

export function sum2nums(num1, num2) {

	const [num1Sign, num2Sign] = [sign(num1), sign(num2)];
	const [num1IsNegative, num2IsNegative] = [num1Sign === -1, num2Sign === -1];
	let [absNum1, absNum2, targetDecimalLength] = makeNumsSameLength(abs(num1), abs(num2));
	const isSecondBigger = compareAbsolutedNums(absNum1, absNum2) === -1;
	let [absNum1Arrayed, absNum2Arrayed] = [numToDigitsArray(absNum1), numToDigitsArray(absNum2)];
	let needMinus = false;

	let multiplier = 1;

	multiplier *= num1Sign * num2Sign;

	if (multiplier === -1 && isSecondBigger) {
		[absNum1Arrayed, absNum2Arrayed] = [absNum2Arrayed, absNum1Arrayed];
	}

	if (num1IsNegative && (num2IsNegative || !isSecondBigger) || num2IsNegative && isSecondBigger) {

		needMinus = true;
	}

	let memory = 0;

	for (let digit = absNum1Arrayed.length - 1; digit >= 0; --digit) {

		absNum1Arrayed[digit] = memory + absNum1Arrayed[digit] + multiplier * absNum2Arrayed[digit];
		memory = 0;

		if (absNum1Arrayed[digit] >= 10 || absNum1Arrayed[digit] < 0) {
			absNum1Arrayed[digit] += multiplier * -10;
			memory = multiplier;
		}
	}

	let num = arrayNumToString(absNum1Arrayed, targetDecimalLength);

	if (memory === 1) num = '1' + num;
	if (needMinus && num !== '0') num = '-' + num;

	return num;
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
