function power(){
  var side1=parseFloat(document.getElementById)("side1").value;
  var side1=parseFloat(document.getElementById)("side2").value;
  var side1=parseFloat(document.getElementById)("side3").value;

  if(side1===side2 && side2===side3) {
    output.innerHTML=("This is an equilateral triangle.")
  } else if (side1===side2 || side2===side3 || side1===side3) {
      output.innerHTML=("This is an isosceles triangle.")
  }else if (side1!==side2!==side3 && side1+side2>side3 || side2+side3>side1 || side1+side3>side2) {
      output.innerHTML=("This is an scalene triangle.")
  } else {
      output.innerHTML=("This is not a triangle.")
  }
}
