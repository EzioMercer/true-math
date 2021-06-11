import {ifArray, ifValidNums} from '../checkers/checkers.js';
import {
	makeNumsSameLength,
	deleteUnnecessaryZeros,
	sign
} from '../helpers/helpers.js';
import {abs} from "../true-math.js";
import {compareUnsafe} from "./compare.js";
import {absUnsafe} from "./abs.js";
import {signUnsafe} from "../helpers/sign.js";

function sumDigits(digit1, digit2, sum, memory, multiplier) {

	let result = memory + digit1 + multiplier * digit2;
	memory = 0;

	if (result >= 10 || result < 0) {
		result += multiplier * -10;
		memory = multiplier;
	}

	sum = result + sum;

	return [sum, memory];
}

export function sum2nums(num1, num2) {

	let [absNum1, absNum2, decimalPartLength] = makeNumsSameLength(absUnsafe(num1), absUnsafe(num2));
	let needMinus = false;
	let sum = '';
	const [num1Sign, num2Sign] = [signUnsafe(num1), signUnsafe(num2)];
	const [num1IsNegative, num2IsNegative] = [num1Sign === -1, num2Sign === -1];
	const isSecondBigger = compareUnsafe(absNum1, absNum2) === -1;
	let multiplier = num1Sign * num2Sign || num1Sign || num2Sign;

	if (multiplier === -1 && isSecondBigger) {
		[absNum1, absNum2] = [absNum2, absNum1];
	}

	if (num1IsNegative && (num2IsNegative || !isSecondBigger) || num2IsNegative && isSecondBigger) {
		needMinus = true;
	}

	let memory = 0;

	for (let digit = absNum1.length - 1; digit >= absNum1.length - decimalPartLength; --digit) {
		[sum, memory] = sumDigits((+absNum1[digit]), (+absNum2[digit]), sum, memory, multiplier);
	}

	let integerBeginning = absNum1.length - decimalPartLength - 1;

	if (decimalPartLength !== 0) {
		sum = '.' + sum;
		--integerBeginning;
	}

	for (let digit = integerBeginning; digit >= 0; --digit) {
		[sum, memory] = sumDigits((+absNum1[digit]), (+absNum2[digit]), sum, memory, multiplier);
	}

	if (memory === 1) sum = '1' + sum;

	sum = deleteUnnecessaryZeros(sum);

	if (needMinus && sum !== '0') sum = '-' + sum;

	return sum;
}

export function sumUnsafe(nums) {

	if (nums.length === 0) return '0';
	if (nums.length === 1) return nums[0];

	let sum = nums[0];

	for (let num = 1; num < nums.length; ++num) {
		sum = sum2nums(sum, nums[num]);
	}

	return sum;
}

export default function sum(nums) {

	ifArray(nums);
	ifValidNums(nums);

	return sumUnsafe(nums.map(num => deleteUnnecessaryZeros(num)))
}
