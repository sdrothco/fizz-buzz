$(document).ready(function() {

	var doFizzBuzzCounting = function (maxNumber) {
		for( var i=1; i<=maxNumber; i++) {

			var stringToAppend = i;
			if( i % 3 === 0 ) {
				stringToAppend = "fizz";
			}
			if( i % 5 === 0 ) {
				stringToAppend = "buzz";
			}
			if( i % 3 === 0 && i % 5 === 0 ) {
				stringToAppend = "fizz buzz";
			}
			
			if (i !== maxNumber) {
				stringToAppend += ", ";
			}
			if( i % 10 === 0 ) {
				stringToAppend += "<br>";
			}

			$('body').append(stringToAppend);
		}
	};


	var maxNum;
	var isValidNum = false;
	var errorStr = "";
	do {

		maxNum = prompt ("Enter a whole number (1-300) to count up to:");
		console.log("Entered number was: " + maxNum);

		if (maxNum === null ) {
			break;
		}
		if (typeof maxNum === "undefined" || maxNum.trim() === "") {
			errorStr = "You entered an empty or undefined string.\n";
			console.log(errorStr);
		}
		else {
			maxNum = +maxNum;
			if (isNaN(maxNum) || maxNum % 1 !== 0) {
				errorStr = "You entered an invalid number (NaN) or decimal value.\n";
				console.log(errorStr);
			}
			else if (maxNum < 1 || maxNum > 300) {
				errorStr = "You entered a number that was not within range of 1 -300.\n";
				console.log(errorStr);
			}
			else {
				// It was a good number!
				isValidNum = true;
			}
		}

		if (!isValidNum) {
			alert (errorStr + "Please enter a valid integer number between 1 and 300.");
		}

	} while ( !isValidNum );

	if (isValidNum) {
		doFizzBuzzCounting(maxNum);

	}
	else {
			$('body').append("Stopping FizzBuzz.");
	}

});

