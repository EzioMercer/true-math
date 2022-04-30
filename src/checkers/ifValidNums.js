import {ifValidNum} from './checkers.js';

export default function ifValidNums(nums) {
	for (const num of nums) {
		ifValidNum(num);
	}
}
