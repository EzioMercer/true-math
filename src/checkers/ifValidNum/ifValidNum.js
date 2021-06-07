import ifNumIsString from "./ifNumIsString.js";
import ifNonEmptyNum from "./ifNonEmptyNum.js";
import ifValidFormat from "./ifValidFormat.js";


export default function ifValidNum(num) {
	ifNumIsString(num);
	ifNonEmptyNum(num);
	ifValidFormat(num);
}
