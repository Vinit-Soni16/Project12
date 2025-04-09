let btn =document.querySelector('button');

function calculate() {
  let num1 = document.getElementById("num1").innerText.trim();
  let num2 = document.getElementById("num2").innerText.trim();
  let op = document.getElementById("operator").innerText.trim();
  let resultBox = document.getElementById("result");
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  let result;

  if (isNaN(n1) || isNaN(n2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (op) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n2 !== 0 ? n1 / n2 : "Can't divide by 0";
        break;
      default:
        result = "Invalid operator (use + - * /)";
    }
  }

  resultBox.innerText = result;
}
btn.addEventListener('dblclick',function(){
  location.reload()
})