export default function ifNumIsString(num) {
	if (typeof (num) !== 'string') throw new Error('Number must be a string');
}
