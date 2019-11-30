// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const occurrencesMap = str
		.split('')
		.reduce(
			(prev, curr) => prev.set(curr, (prev.get(curr) || 0) + 1),
			new Map()
		);

	let max = 0;
	let maxLetter = null;
	for (let [letter, occurrences] of occurrencesMap) {
		if (occurrences > max) {
			max = occurrences;
			maxLetter = letter;
		}
	}
	return maxLetter;
}

module.exports = maxChar;
