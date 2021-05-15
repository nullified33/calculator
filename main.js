var secretSplash = [
  "Made by 3prm3!",
   "On Github https://github.com/3prm3/calculator!",
   "Code peeker!",
   "I'm pretty sure this will never be printed!",
  "You might want to fork this https://github.com/3prm3/calculator!",
];
var rand = secretSplash[Math.floor(Math.random()*secretSplash.length)];
console.log(rand);

function add() {
  var result =
   Number(document.getElementById("n1").value) +
   Number(document.getElementById("n2").value)+
   Number(document.getElementById("n3").value);
document.getElementById("answer").innerHTML =result;
}

 function subtract() {
  var result =
   Number(document.getElementById("n1").value) -
   Number(document.getElementById("n2").value) -
   Number(document.getElementById("n3").value);
document.getElementById("answer").innerHTML =result
}

 function multiply() {
  var result =
   Number(document.getElementById("n1").value) *
   Number(document.getElementById("n2").value) 
document.getElementById("answer").innerHTML =result;
}

 function division() {
  var result =
   Number(document.getElementById("n1").value) /
   Number(document.getElementById("n2").value) 
document.getElementById("answer").innerHTML =result;
}

 function modulus() {
  var result =
   Number(document.getElementById("n1").value) %
   Number(document.getElementById("n2").value) 
document.getElementById("answer").innerHTML =result;
}

// Partially redundant but here for idiots
 function perimSq() {
  var result =
   Number(document.getElementById("n1").value) *
   Number(4);
document.getElementById("answer").innerHTML =result;
}
//#######################################

// Partially redundant but here for idiots
 function areaSq() {
  var result =
   Number(document.getElementById("n1").value) *
   Number(document.getElementById("n1").value);
document.getElementById("answer").innerHTML =result;
}
//#######################################

 function perimRect() {
  var result =
   (Number(document.getElementById("n1").value) +
   Number(document.getElementById("n2").value))*
   Number(2);
document.getElementById("answer").innerHTML =result;
}

// Redundant but here for idiots
 function areaRect() {
  var result =
   Number(document.getElementById("n1").value) *
   Number(document.getElementById("n2").value);
document.getElementById("answer").innerHTML =result;
}
//##############################

 function areaTri() {
 var result =
  (Number(document.getElementById("n1").value) *
  Number(document.getElementById("n2").value))/
  Number(2);
document.getElementById("answer").innerHTML =result;
}

 function perimTri() {
 var result =
  Number(document.getElementById("n1").value) +
  Number(document.getElementById("n2").value)+
  Number(document.getElementById("n3").value)
  Number(2);
document.getElementById("answer").innerHTML =result;
}

