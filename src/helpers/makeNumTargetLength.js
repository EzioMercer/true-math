export default function makeNumTargetLength(integerPart, decimalPart, targetIntegerLength, targetDecimalLength) {
	return [integerPart.padStart(targetIntegerLength, '0'), decimalPart.padEnd(targetDecimalLength, '0')];
}
