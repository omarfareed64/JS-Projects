let btn = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("buttons");

function enternumber(button) {
  let number = button.getAttribute("data-value");
  display.value += `${number}`;
  console.log(number);
}
document.body.addEventListener("click", ({ target }) => {
  if (
    !target.matches("button") ||
    target.getAttribute("data-value") === "C" ||
    target.getAttribute("data-value") === "="
  ) {
    return;
  }
  target.onclick = enternumber(target);
});

function equal() {
  display.value = eval(display.value);
}
function cleardisplay() {
  display.value = "";
  display.innerText = "";
}
