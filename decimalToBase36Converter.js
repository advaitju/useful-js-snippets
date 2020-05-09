// Convert any number from base 10 to base 36 in Javascript.

// Verify results: http://extraconversion.com/base-number/decimals/decimals-to-base-36.html

function base_converter(nbaseten) {
	var SYMBOLS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var baseto = 36;
	var nbaseto = [];
	while (nbaseten>0) {
		var mod = nbaseten%baseto;
		if (mod<0 || mod>=SYMBOLS.length) {
			console.log("Out of bounds error");
			return null;
		}
		nbaseto.push(SYMBOLS[mod]);
		nbaseten = parseInt(nbaseten/baseto);
	}
	return nbaseto.reverse().toString().replace(/,/g, '');
}
