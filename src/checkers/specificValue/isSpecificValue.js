import isNaNum from './isNaNum.js';
import isInfinite from './isInfinite.js';

export default function isSpecificValue(num) {
	return isNaNum(num) || isInfinite(num);
}
