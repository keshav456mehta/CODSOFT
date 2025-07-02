const display = document.getElementById("display");
const keys = document.querySelectorAll(".btn");

let expression = "";

keys.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const val = e.target.innerText;

    if (val === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
      display.value = expression;
    } else if (val === "AC") {
      expression = "";
      display.value = "";
    } else if (val === "DEL") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else {
      expression += val;
      display.value = expression;
    }
  });
});
