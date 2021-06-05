import {deleteUnnecessaryZeros} from "./helpers.js";

export default function arrayNumToString(num, DP_length = 0) {

	let dotPosition = num.length - DP_length;

	if (dotPosition !== num.length) num.splice(dotPosition, 0, '.');

	return deleteUnnecessaryZeros(num.join(''));
}
