$(document).ready(function() {

	let baseSentence = prompt("Enter a sentence");
	console.log("Saved sentence: `" + baseSentence + "`!");

	const capitalizeChars = function(sentence) {
		const charFirst = sentence.charAt(0).toUpperCase();
		const charLast = sentence.charAt(sentence.length - 1).toUpperCase();
		return charFirst + sentence.slice(1, sentence.length - 1) + charLast;
	}

	const reverseChars = function(sentence) {
		const charFirst = sentence.charAt(sentence.length - 1);
		const charLast = sentence.charAt(0);
		return charFirst + sentence.slice(1, sentence.length - 1) + charLast;
	}

	const addCharsToEnd = function(sentence) {
		const charFirst = sentence.charAt(0);
		const charLast = sentence.charAt(sentence.length - 1);
		return sentence.slice(1, sentence.length - 1) + charFirst + charLast;
	}

	const addCharToFront = function(sentence) {
		const midChar = sentence.charAt(sentence.length / 2);
		return midChar + sentence;
	}

	const reverseSentence = function(sentence) {
		const chars = sentence.split("");
		const reversedChars = chars.reverse();
		return reversedChars.join("");
	}

	baseSentence = capitalizeChars(baseSentence);
	alert("First & last letters were capitalized!\n" + baseSentence);

	baseSentence = reverseChars(baseSentence);
	alert("First & last letters were reversed!\n" + baseSentence);

	baseSentence = addCharsToEnd(baseSentence);
	alert("First & last letters were put at end!\n" + baseSentence);

	baseSentence = addCharToFront(baseSentence);
	alert("Mid character was put to front!\n" + baseSentence);

	baseSentence = reverseSentence(baseSentence);
	alert("Reversed the full sentence!\n" + baseSentence);

});