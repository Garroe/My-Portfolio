function add(){
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);

var total = number1 + number2;

document.getElementById("num3").value=total;
document.getElementById("num1").value=" ";
document.getElementById("num2").value=" ";
}

// -------------------Sub------
function substract(){
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);

  var total = number1 - number2;

  document.getElementById("num3").value=total;
}

// -----------------Multiply--------------
function multiply(){
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);

  var total = number1 * number2;

  document.getElementById("num3").value=total;
}

// -----------------------Divide--------------
function divide(){
  var number1 = parseInt(document.getElementById("num1").value);
  var number2 = parseInt(document.getElementById("num2").value);

  var total = number1 / number2;

  document.getElementById("num3").value=total;
}
