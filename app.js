$(document).ready(function() {

	for( var i=1; i<=100; i++) {

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
		
		if (i !== 100) {
			stringToAppend += ", ";
		}

		if( i % 10 === 0 ) {
			stringToAppend += "<br>";
		}

		$('body').append(stringToAppend);

	}
});