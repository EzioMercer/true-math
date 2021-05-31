import Checkers from '../checkers/checkers.js';
import Helpers from '../helpers/helpers.js';
import {subtract2nums} from "./subtract.js";

export function sum2nums(num1, num2) {

	let longest_DP_length;
	[num1, num2, longest_DP_length] = Helpers.makeNumsSameLength(num1, num2);

	let memory = 0;

	for (let digit = 0; digit < num1.length; ++digit) {
		let digitsSum = memory + num1[digit] + num2[digit];
		memory = 0;

		if (digitsSum >= 10) {
			num1[digit] = digitsSum - 10;
			memory = 1;
		} else {
			num1[digit] = digitsSum;
		}
	}

	if (memory === 1) num1.push(1);

	return Helpers.returnNum(num1, longest_DP_length);
}

export default function sum (nums) {

	Checkers.checkIfArray(nums);
	Checkers.checkIfArrayOfNums(nums);

	nums = nums.map(num => Helpers.deleteUnnecessaryZeros(num));

	let sum = nums[0];

	for(let num = 1; num < nums.length; ++num) {

		let nextNum = nums[num];

		if (Helpers.isNegative(sum) && !Helpers.isNegative(nextNum)) {
			sum = subtract2nums(nextNum, sum.slice(1));
		} else if (!Helpers.isNegative(sum) && Helpers.isNegative(nextNum)) {
			sum = subtract2nums(sum, nextNum.slice(1));
		} else if (Helpers.isNegative(sum) && Helpers.isNegative(nextNum)) {
			sum = sum2nums(sum.slice(1), nextNum.slice(1));
			sum = sum === '0' ? sum : '-' + sum;
		} else {
			sum = sum2nums(sum, nextNum);
		}

	}

	return sum;
}
