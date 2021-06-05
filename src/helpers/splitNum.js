export default function splitNum(num) {
	const splittedNum = num.split('.');

	return [splittedNum[0], splittedNum[1] || ''];
}
