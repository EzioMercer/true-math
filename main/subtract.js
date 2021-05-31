import Check from '../checkers/checkers.js';
import Helpers from '../helpers/helpers.js';
import {sum2nums} from "./sum.js";

export function subtract2nums(num1, num2) {

	let longest_DP_length;
	[num1, num2, longest_DP_length] = Helpers.makeNumsSameLength(num1, num2);
	const needMinus = !Helpers.isFirstBiggerByAbsoluteValue(num1, num2);

	if (needMinus) {
		[num1, num2] = [num2, num1];
	}

	let memory = 0;

	for (let digit = 0; digit < num1.length; ++digit) {

		if (memory === -1) {
			if (num1[digit] === 0) num1[digit] = 9;
			else {
				--num1[digit];
				memory = 0;
			}
		}

		num1[digit] -= num2[digit];

		if (num1[digit] < 0) {
			num1[digit] += 10;
			memory = -1;
		}
	}

	if (needMinus) return '-' + Helpers.returnNum(num1, longest_DP_length);

	return Helpers.returnNum(num1, longest_DP_length);
}

export default function subtract (nums) {

	Check.checkIfArray(nums);
	Check.checkIfArrayOfNums(nums);

	nums = nums.map(num => Helpers.deleteUnnecessaryZeros(num));

	let difference = nums[0];

	for(let num = 1; num < nums.length; ++num) {

		let nextNum = nums[num];

		if (Helpers.isNegative(difference) && !Helpers.isNegative(nextNum)) {
			difference = sum2nums(nextNum, difference.slice(1));
			difference = difference === '0' ? difference : '-' + difference;
		} else if (!Helpers.isNegative(difference) && Helpers.isNegative(nextNum)) {
			difference = sum2nums(difference, nextNum.slice(1));
		} else if (Helpers.isNegative(difference) && Helpers.isNegative(nextNum)) {
			difference = subtract2nums(nextNum.slice(1), difference.slice(1));
		} else {
			difference = subtract2nums(difference, nextNum);
		}
	}

	return difference;
}
