let screen = document.getElementById("display");
let screenValue = screen.value;

function inputNum(d) {
  screenValue = screenValue === "0" ? d : screenValue + d;
  updateScreen();
}

// function inputdot() {
//   if (!screenValue.includes(".")) {
//     screenValue = screenValue + ".";
//   }
//   updateScreen();
// }

function clearEnter() {
  screenValue = screenValue.slice(0, -1);
  updateScreen();
}
function allClear() {
  screenValue = "";
  updateScreen();
}

function percentage() {
  screenValue = (screenValue / 100).toFixed(8);
  updateScreen();
}

function equalval() {
  screenValue = eval(screenValue);
  updateScreen();
}

function updateScreen() {
  screen.value = screenValue;
  // console.log(screen.textContent);
}
