

let displayValue = '';
let valArray = [];	//store history of numbers
let operArray = [];	//Stores history of operations
let dispString = ""; 	//combination of valArray and operArray
let isOperating = true;


//Display
let buttons = document.querySelectorAll('.key, .operator');
let displayValueString = document.getElementById('display-value');

buttons.forEach((button) => { 
  button.addEventListener('click', () => { 
	updateDisplay(button.value);
  });
});

window.addEventListener('keydown', function (e) {
	const keyPad = document.querySelector(`input[data-key="${e.keyCode}"]`);
	updateDisplay(keyPad.value);

});

function updateDisplay(input) {
	if (input >= '0' && input <= '9'){
		displayValue = Number("" + displayValue + input); //appends each digit to the end
		dispString = ("" + dispString + input);
		displayValueString.innerHTML = dispString;
		isOperating = false;
	}

	else {
		if (isOperating == false) { //So an operator can only be hit once. ie only between numbers
			if(isInt(displayValue)){
				valArray.push(displayValue);
				displayValue = "";
			}
			switch (input){
				case '=' :
					orderOperations(valArray,operArray);
					dispString = valArray[0];
					displayValueString.innerHTML = dispString;
					displayValue = dispString;
					valArray.splice(0,1)
					//*** Reset the display after equals


					break;

				default :
					operArray.push(input);
					dispString = ("" + dispString + input);
					displayValueString.innerHTML = dispString;
					isOperating = true;
					break;
			}

			console.log("valArray: " + valArray);
			console.log("operAray: " + operArray);
		}
	}	

}


//Clear button
let clear = document.getElementById("clear").addEventListener("click", clearAll);

function clearAll() {
	displayValue = '';
	valArray = [];
	operArray = [];
	dispString = "";
	displayValueString.innerHTML = "Cleared.";
	isOperating = true;
}


function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

//do we need this?
function sum (sumArr) {
	return sumArr.reduce((current, total) => total + current, 0);
}

//array or only passble by two numbers?
function multiply (multArr) {
	return multArr.reduce((current, total) => total * current, 1);
}

// Return divser of 2 sig figs
function divide (a, b) {
	return Number((a/b).toFixed(0));
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(n) {
	if (n == 0) return 1;
	
	var total = 1;
	for (var i = n; i > 0; i--) {
		total *= i;
	}
	return total;
}

function orderOperations(numArray, operArray) {

	let multIndices = [];
	let arthIndices = [];

	for (var i = 0; i < operArray.length; i++) {
	 	if (operArray[i] == '*' ||  operArray[i] == '/'){
	 		multIndices.push(i);
	 	}
	}

	while(0 < multIndices.length){
		var n = multIndices[0];
		numArray[n] = operate(operArray[n],numArray[n],numArray[n+1]);
		multIndices.splice(0,1);
		numArray.splice(n+1,1);
		operArray.splice(n,1);

		for (var i = 0; i < multIndices.length; i++) {
			multIndices[i]--;
		}
	}

	while(0 < operArray.length){
		numArray[0] = operate(operArray[0],numArray[0],numArray[1]);
		numArray.splice(1,1);
		operArray.splice(0,1);
	}

	console.log("Final Answer: " + numArray);

	return numArray;
}

function operate(operand, a , b) {
	switch (operand){
		case '+':
			return add(a,b);
			break;
		case '-':
			return subtract(a,b);
			break;
		case '*':
			let multArr = [a,b];
			return multiply(multArr);
			break;
		case '/':
			return divide (a,b);
			break;

	}
}

function isInt(value) {
	// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript#14794066
  	return !isNaN(value) && 
         	parseInt(Number(value)) == value && 
         	!isNaN(parseInt(value, 10));
}

/*
TO DO:

[X] Add operations
[X] add event listener for keyboard support
	- [] Add Clear to Keyboard
[] add dicimal support



*/