export default function makeNumsSameLength(num1, num2) {

	let [num1_IP, num1_DP = ''] = num1.split('.');
	let [num2_IP, num2_DP = ''] = num2.split('.');

	let longest_IP_length = num1_IP.length > num2_IP.length ? num1_IP.length : num2_IP.length;
	let longest_DP_length = num1_DP.length > num2_DP.length ? num1_DP.length : num2_DP.length;

	num1_IP = num1_IP.padStart(longest_IP_length, '0');
	num2_IP = num2_IP.padStart(longest_IP_length, '0');

	num1_DP = num1_DP.padEnd(longest_DP_length, '0');
	num2_DP = num2_DP.padEnd(longest_DP_length, '0');

	num1 = (num1_IP + num1_DP).split('').map(digit => +digit).reverse();
	num2 = (num2_IP + num2_DP).split('').map(digit => +digit).reverse();

	return [num1, num2, longest_DP_length];
}
