export default function ifNonEmptyNum(num) {
	if (num.length === 0) throw new Error('Number must contain at least one symbol');
}
