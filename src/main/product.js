import ifValidArray from "../checkers/ifValidArray.js";
import {makeNumsSameLength, normalizeNumber, sign, split} from "../helpers/helpers.js";
import {sum2nums, sumUnsafe} from "./sum.js";
import {differenceUnsafe} from "./difference.js";
import {absUnsafe} from "./abs.js";
import {signUnsafe} from "../helpers/sign.js";
import {checkNumsValue} from "../checkers/checkers.js";

const cachedProducts = new Map();

function karatsubaMethod(absNum1, absNum2) {

	if (absNum1.length === 1 && absNum2.length === 1) {
		return '' + (absNum1 * absNum2);
	}

	[absNum1, absNum2] = makeNumsSameLength(absNum1, absNum2);

	if (cachedProducts.has(absNum1)) {
		if (cachedProducts.get(absNum1).has(absNum2)) {
			return cachedProducts.get(absNum1).get(absNum2);
		}
	} else {
		cachedProducts.set(absNum1, new Map([[absNum2, null]]));
	}

	cachedProducts.set(absNum2, new Map([[absNum1, null]]));

	const lengthHalf = Math.floor(absNum1.length / 2);
	const [a, b] = [absNum1.slice(0, lengthHalf), absNum1.slice(lengthHalf)];
	const [c, d] = [absNum2.slice(0, lengthHalf), absNum2.slice(lengthHalf)];
	const ac = karatsubaMethod(a, c);
	const bd = karatsubaMethod(b, d);
	const a_b = sum2nums(a, b);
	const c_d = sum2nums(c, d);
	const bc_ad = differenceUnsafe([karatsubaMethod(a_b, c_d), ac, bd]);
	const z = b.length;
	const z2 = z * 2;
	const product = sumUnsafe([ac.padEnd(ac.length + z2, '0'), bc_ad.padEnd(bc_ad.length + z, '0'), bd]);

	cachedProducts.get(absNum1).set(absNum2, product);
	cachedProducts.get(absNum2).set(absNum1, product);

	return product;
}

export function product2nums(num1, num2) {

	const [num1Sign, num2Sign] = [signUnsafe(num1), signUnsafe(num2)];

	let [absNum1, absNum2, decimalPartLength] = makeNumsSameLength(absUnsafe(num1), absUnsafe(num2));
	const needMinus = num1Sign * num2Sign === -1;
	const [absNum1Split, absNum2Split] = [split(absNum1), split(absNum2)];
	[absNum1, absNum2] = [absNum1Split[0] + absNum1Split[1], absNum2Split[0] + absNum2Split[1]];

	let product = karatsubaMethod(absNum1, absNum2);

	if (decimalPartLength !== 0) {

		const dotPosition = product.length - decimalPartLength * 2;

		product = product.slice(0, dotPosition) + '.' + product.slice(dotPosition);

		if (dotPosition === 0) product = '0' + product;

		product = normalizeNumber(product);
	}

	if (needMinus) return '-' + product;

	return product;
}

function productUnsafe(nums) {

	if (nums.length === 0) return '1';
	if (nums.length === 1) return nums[0];

	let product = nums[0];

	for (let i = 1; i < nums.length; ++i) {
		const num = nums[i];

		if (product === '0' || num === '0') return '0';

		product = product2nums(product, num);
	}

	return product;
}

export default function product(nums) {

	ifValidArray(nums);

	nums = nums.map(num => normalizeNumber(num));

	const {hasSpecificValue, returnValue} = checkNumsValue(nums, '*');

	if (hasSpecificValue) return returnValue;

	return productUnsafe(nums);
}
