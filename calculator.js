let buttons = document.querySelectorAll('.number, .operator');

let displayValue = '';
let valArray = [];
let operArray = [];
let isOperating = true;


//Display value of button pushed
buttons.forEach((button) => { 8
  button.addEventListener('click', () => { 
	let input = button.value;

	/*
		1) First Input
		2) Operation
		3) Second Input
		4) Evaluate or Operation
			a) If (Eval):
				-> Evaluate
				-> Display number
				-> Ready for next Operation
			b) If (Oper):
				-> Evaluate
				-> Display number
				-> Ready for next Operation

		** If input== '=', Don't push


	*/
	if (input >= '0' && input <= '9'){
		displayValue = Number("" + displayValue + input); //appends each digit to the end
		//Update <p id=displayValue> here:
		
		console.log("dV: " + displayValue);
		isOperating = false;
	}

	else {
		if (isOperating == false) { //So an operator can only be hit once. ie only between numbers
			if(isInt(displayValue)){
				valArray.push(displayValue);
				displayValue = "";
				console.log(valArray);
			}
			switch (input){
				case '=' :
					displayValue = orderOperations(valArray,operArray);
					valArray.push(displayValue);
					break;

				default :
					operArray.push(input);
					console.log(operArray);
					break;
			}
			isOperating = true;
		}
	}	
   })
  })

function add (a, b) {
	//parseInt(a,10);
	//parseInt(b,10);
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

// Return divser of 8 sig figs
function divide (a, b) {
	return;
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
	/* 	1) get indexes of each: *,/,+,-
		2) store array of every index of each symbol
		3) geom[i,j,k,...]
		4) operate(operArray[i,k,k...],numArray[i,j,k...],numArray[i+1,j+1,k+1])
		5) consense array after every operation
		4) arth[n,m,o...]
	*/

	let multIndices = [];
	let arthIndices = [];

	for (var i = 0; i < operArray.length; i++) {
	 	if (operArray[i] == '*' ||  operArray[i] == '/'){
	 		multIndices.push(i);
	 	}
	 	if (operArray[i] == '+' ||  operArray[i] == '-'){
	 		arthIndices.push(i);
	 	}
	}
	console.log("* & /: " + multIndices);
	console.log("+ & -: " + arthIndices);
}

function operate(operand, a , b) {


}





function isInt(value) {
	// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript#14794066
  	return !isNaN(value) && 
         	parseInt(Number(value)) == value && 
         	!isNaN(parseInt(value, 10));
}

/*
TO DO:

- Add operations
- add event listener for keyboard support



*/