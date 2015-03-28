function CalcLogic(input) {
	var arrayOfCalc = input.split(" ");
	var result = 0;
	var sign = "+"
	for (var i = 0; i < arrayOfCalc.length; i++) {
		if (!isNaN(arrayOfCalc[i])) {
			if ("+" == sign) { 
				result = result + parseFloat(arrayOfCalc[i]);
			}
			else if ("-" == sign) { 
				result = result - parseFloat(arrayOfCalc[i]);
			}
			else if ("*" == sign) { 
				result = result * parseFloat(arrayOfCalc[i]);
			}
			else if ("/" == sign) { 
				result = result / parseFloat(arrayOfCalc[i]);
			}
		}
		else { 
			sign = arrayOfCalc[i];
		}
	}

	return result;
}

