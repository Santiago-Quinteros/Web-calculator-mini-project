var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var AddBtn = document.getElementById("Add");
var SubBtn = document.getElementById("Sub");
var MultBtn = document.getElementById("Mult");
var DivBtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
function SubNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
function MultNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
function DivNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
AddBtn.addEventListener("click", AddNumbers);
SubBtn.addEventListener("click", SubNumbers);
MultBtn.addEventListener("click", MultNumbers);
DivBtn.addEventListener("click", DivNumbers);
