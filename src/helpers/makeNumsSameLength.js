import {makeNumTargetLength, splitNum} from "./helpers.js";

export default function makeNumsSameLength(num1, num2) {

	let [num1_IP, num1_DP] = splitNum(num1);
	let [num2_IP, num2_DP] = splitNum(num2);

	let targetIntegerLength = num1_IP.length > num2_IP.length ? num1_IP.length : num2_IP.length;
	let targetDecimalLength = num1_DP.length > num2_DP.length ? num1_DP.length : num2_DP.length;

	[num1_IP, num1_DP] = makeNumTargetLength(num1_IP, num1_DP, targetIntegerLength, targetDecimalLength);
	[num2_IP, num2_DP] = makeNumTargetLength(num2_IP, num2_DP, targetIntegerLength, targetDecimalLength);

	return [num1_IP + num1_DP, num2_IP + num2_DP, targetDecimalLength];
}
