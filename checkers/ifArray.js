export default function checkIfArray(arr) {
	if (!Array.isArray(arr)) throw new Error('Argument must be an array');
}