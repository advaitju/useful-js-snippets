// Convert an array of strings to Js code that lists those values. Returns a formatted string with each value in quotes and followed by a comma.

copy(a.split('\n').reduce((accumulator, currentValue) => {
	return accumulator + `"${currentValue.trim()}",`;
}, ''));
