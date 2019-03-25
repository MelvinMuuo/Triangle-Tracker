function power(){
  var side1=parseFloat(document.getElementById)("side1").value;
  var side1=parseFloat(document.getElementById)("side2").value;
  var side1=parseFloat(document.getElementById)("side3").value;

if(side1===side2 && side2===side3) {
  alert("This is an equilateral triangle.");
} else if (side1===side2 || side2===side3 || side1===side3) {
  alert("This is an isosceles triangle.");
}else if (side1!==side2!==side3 && side1+side2>side3 || side2+side3>side1 || side1+side3>side2) {
  alert("This is an scalene triangle.");
} else {
  alert("This is not a triangle.");
}
}

function resetform() {
document.getElementById("myform").reset();
}
