export default function split(num) {
	const split = num.split('.');

	return [split[0], split[1] || ''];
}
