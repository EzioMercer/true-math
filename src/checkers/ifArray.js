export default function ifArray(arr) {
	if (!Array.isArray(arr)) throw new Error('Argument must be an array');
}
