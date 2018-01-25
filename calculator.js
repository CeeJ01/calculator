let buttons = document.querySelectorAll('.number, .operator');
let input = '';
let displayValue = '';
let storeVals =[];

//Display value of button pushed
buttons.forEach((button) => { 
  button.addEventListener('click', () => { 
	input = button.value;

	/*
	TODO:
	if operate => operate()

	if digit => store digit()

	else => error
	*/

	//store each number and display

	if (input >= '0' && input <= '9'){
		displayValue = "" + displayValue + input;
		console.log(displayValue);
	}

	else {
		storeVals.push(displayValue);
		console.log("input: " + input + ", storeVals: " + storeVals);	
		displayValue = "";

	}


  });
});




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
		case "add":
			console.log(add(a,b));
			break;
		case "subtract":
			console.log(subtract(a,b));
			break;
		case "multiply":
			console.log(multiply(a,b));
			break;
		case "divide":
			console.log(divide(a,b));
			break;	
	}

}

/*
TO DO:

- 
- Add input from keyboard



*/