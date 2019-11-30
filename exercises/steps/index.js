// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * @param {string} letter
 * @param {number} times
 */
function generateString(letter, times) {
	return Array(times)
		.fill(letter)
		.join('');
}

/**
 * Recursive solution
 * @param {number} limit
 * @param {number} stepCount
 */
function steps(limit, stepCount = 1) {
	if (stepCount > limit) {
		return;
	}

	console.log(
		Array(stepCount)
			.fill('#')
			.concat(Array(limit - stepCount).fill(' '))
			.join('')
	);
	return steps(limit, stepCount + 1);
}

// Solution 1
// function steps(n) {
// 	let i = 1;
// 	let array = Array(n).fill(' ');
// 	while (i <= n) {
// 		array.splice(i - 1, 1, '#');
// 		console.log(array.join(''));
// 		i++;
// 	}
// }

// Solution 2
// function steps(n) {
// 	let i = 1;
// 	while (i <= n) {
// 		console.log(generateString('#', i) + generateString(' ', n - i));
// 		i++;
// 	}
// }

module.exports = steps;
