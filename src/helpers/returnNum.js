import Helpers from "./helpers.js";

export  default function returnNum(num, DP_length = 0) {

	let dotPosition = num.length - DP_length;

	if (dotPosition !== num.length) num.splice(dotPosition, 0, '.');

	return Helpers.deleteUnnecessaryZeros(num.join(''));
}
