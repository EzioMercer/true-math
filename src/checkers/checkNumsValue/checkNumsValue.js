import checkForPlus from "./checkForPlus.js";
import checkForMinus from "./checkForMinus.js";
import checkForMultiplication from "./checkForMultiplication.js";
import checkForDivision from "./checkForDivision.js";
import checkForComparison from "./checkForComparison.js";

export default function checkNumsValue(nums, operation) {

	const result = {
		hasSpecificValue: false,
		returnValue: ''
	}

	switch (operation) {
		case '+':
			checkForPlus(nums, result);
			break;
		case '-':
			checkForMinus(nums, result);
			break;
		case '*':
			checkForMultiplication(nums, result);
			break;
		case '/':
			checkForDivision(nums, result);
			break;
		case 'compare':
			checkForComparison(nums, result);
			break;
	}

	return result;
}
