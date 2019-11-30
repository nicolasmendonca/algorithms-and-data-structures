// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * @param {string} str
 * @return {string}
 */
function sanitizeString(str) {
	return str.replace(/[^\w]/g, () => '').toLowerCase();
}

/**
 * @param {string} str
 * @returns {Map<string, number>} str Number of occurrences for every character
 */
function createLettersMap(str) {
	return str
		.split('')
		.reduce(
			(prev, curr) => prev.set(curr, prev.has(curr) ? prev.get(curr) + 1 : 1),
			new Map()
		);
}

function anagrams(stringA, stringB) {
	const sanitizedStringA = sanitizeString(stringA);
	const sanitizedStringB = sanitizeString(stringB);

	return (
		sanitizedStringA
			.split('')
			.sort()
			.join('') ===
		sanitizedStringB
			.split('')
			.sort()
			.join('')
	);
}
// function anagrams(stringA, stringB) {
// 	const sanitizedStringA = sanitizeString(stringA);
// 	const sanitizedStringB = sanitizeString(stringB);

// 	const mapStringA = createLettersMap(sanitizedStringA);
// 	const mapStringB = createLettersMap(sanitizedStringB);

// 	if (mapStringA.size !== mapStringB.size) {
// 		return false;
// 	}

// 	return Array.from(mapStringA).every(
// 		([key, value]) => mapStringB.get(key) === value
// 	); // check if map A matches map B
// }

module.exports = anagrams;
