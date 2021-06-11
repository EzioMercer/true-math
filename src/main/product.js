import {ifValidNums} from "../checkers/checkers.js";
import ifArray from "../checkers/ifArray.js";
import {deleteUnnecessaryZeros, makeNumsSameLength, sign, split} from "../helpers/helpers.js";
import {sum2nums, sumUnsafe} from "./sum.js";
import {subtractUnsafe} from "./subtract.js";
import {absUnsafe} from "./abs.js";

function product2nums(num1, num2) {

	if (num1.length === 1 && num2.length === 1) return '' + (+num1) * (+num2);

	const [num1Sign, num2Sign] = [sign(num1), sign(num2)];

	if (num1Sign === 0 || num2Sign === 0) return '0';

	// console.log(num1, num2);
	let [absNum1, absNum2, decimalPartLength] = makeNumsSameLength(absUnsafe(num1), absUnsafe(num2));
	// console.log(absNum1, absNum2);
	const needMinus = num1Sign * num2Sign === -1;
	const [absNum1Split, absNum2Split] = [split(absNum1), split(absNum2)];
	[absNum1, absNum2] = [absNum1Split[0] + absNum1Split[1], absNum2Split[0] + absNum2Split[1]];
	const lengthHalf = Math.floor(absNum1.length / 2);
	let [a, b] = [absNum1.slice(0, lengthHalf), absNum1.slice(lengthHalf)];
	let [c, d] = [absNum2.slice(0, lengthHalf), absNum2.slice(lengthHalf)];

	// console.log(a, b, c, d);

	let ac = product2nums(a, c);
	let bd = product2nums(b, d);
	let a_b = sum2nums(a, b);
	let c_d = sum2nums(c, d);
	// console.log(a_b, c_d, ac, bd);
	let bc_ad = subtractUnsafe([product2nums(a_b, c_d), ac, bd]);
	let z = b.length;
	let z2 = z * 2;

	// console.log(ac, bd, a_b, c_d, bc_ad, z, z2, [ac.padEnd(ac.length + z2, '0'), bc_ad.padEnd(bc_ad.length + z, '0'), bd]);

	if (needMinus) return '-' + sumUnsafe([ac.padEnd(ac.length + z2, '0'), bc_ad.padEnd(bc_ad.length + z, '0'), bd]);

	return sumUnsafe([ac.padEnd(ac.length + z2, '0'), bc_ad.padEnd(bc_ad.length + z, '0'), bd]);

}

function productUnsafe(nums) {

	if (nums.length === 0) return '1';
	if (nums.length === 1) return nums[0];

	let product = nums[0];

	for (let num = 1; num < nums.length; ++num) {
		product = product2nums(product, nums[num]);
	}

	return product;
}

export default function product(nums) {
	ifArray(nums);
	ifValidNums(nums);

	return productUnsafe(nums.map(num => deleteUnnecessaryZeros(num)));
}
