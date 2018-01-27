let buttons = document.querySelectorAll('.number, .operator');
let input = '';
let displayValue = '';
let storeVals = [];
let storeOpers = [];
let isOperating = false;


//Display value of button pushed
buttons.forEach((button) => { 
  button.addEventListener('click', () => { 
	input = button.value;

	if (input >= '0' && input <= '9'){
		displayValue = Number("" + displayValue + input); //appends each digit to the end
		console.log(displayValue);
		isOperating = false;
	}

	else {
		if (isOperating == false) { //So an operator can only be hit once. ie only between numbers
			storeVals.push(displayValue);			
			storeOpers.push(input);
			console.log("Operations: " + storeOpers + ", storeVals: " + storeVals);
			operate(input, storeVals[(storeVals.length) - 2], storeVals[(storeVals.length) - 1]);
			displayValue = "";
			isOperating = true;
		}	
	}
  });
});

function add (a, b) {
	parseInt(a,10);
	parseInt(b,10);
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

function operate(operand, a, b) {
	switch(operand) {
		case "+":
			console.log("add: " + add(a,b));
			break;
		case "-":
			console.log(subtract(a,b));
			break;
		case "*":
			console.log(multiply(a,b));
			break;
		case "/":
			console.log(divide(a,b));
			break;	
	}

}

/*
TO DO:

- Add operations
- add event listener for keyboard support



*/