import {ifValidNums} from "./checkers.js";

export default function ifValidArray(arr) {
	if (!Array.isArray(arr)) throw new Error('Argument must be an array');

	ifValidNums(arr);
}
