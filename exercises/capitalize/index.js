// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * @param {string} str
 * @returns {string} Capitalized string
 */
function capitalize(str) {
	return str
		.split(' ')
		.reduce(
			(words, word) => [
				...words,
				word[0].toUpperCase() + word.slice(1).toLowerCase(),
			],
			[]
		)
		.join(' ');
}

// function capitalize(str) {
// 	return str.toLowerCase().replace(/^\w|\s\w/g, match => match.toUpperCase());
// }

module.exports = capitalize;
