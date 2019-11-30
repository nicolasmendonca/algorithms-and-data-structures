// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, count = 1) {
	if (count > n) return;
	const hashFill = '#'.repeat(count - 1);
	const spaceFill = ' '.repeat(n - count);
	const newSeed = spaceFill + hashFill + '#' + hashFill + spaceFill;
	console.log(newSeed);
	pyramid(n, count + 1);
}

module.exports = pyramid;
