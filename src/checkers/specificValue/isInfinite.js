import isPositiveInfinite from './isPositiveInfinite.js';
import isNegativeInfinite from './isNegativeInfinite.js';

export default function isInfinite(num) {
	return isPositiveInfinite(num) || isNegativeInfinite(num);
}
