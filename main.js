function add() {
var result =
Number(document.getElementById("n1").value) +
Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result;
}

function subtract() {
var result =
Number(document.getElementById("n1").value) -
Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result
}
function multiply() {
var result =
Number(document.getElementById("n1").value) *
Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result;
}
function division() {
var result =
Number(document.getElementById("n1").value) /
Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result;
}
function modulus() {
var result =
Number(document.getElementById("n1").value) %
Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result;
}
function perim() {
var result =
Number(document.getElementById("n1").value) *
Number(4);
document.getElementById("answer").innerHTML =result;
}
function area() {
var result =
Number(document.getElementById("n1").value) *
Number(document.getElementById("n1").value);
document.getElementById("answer").innerHTML =result;
}


