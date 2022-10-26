let pierwsza = 0;
let druga = 0;
let koncowywynik = 0;

function zapiszpierwsza() {
  pierwsza = document.getElementById("pole1").value;
  pierwsza = parseFloat(pierwsza);
}

function zapiszdruga() {
  druga = document.getElementById("pole2").value;
  druga = parseFloat(druga);
}

function dodawanie(x, y) {
  return x + y;
}

function odejmowanie(x, y) {
  if (y < 0) {
    return -y + x;
  } else return x - y;
}

function mnozenie(x, y) {
  return x * y;
}

function dzielenie(x, y) {
  return x / y;
}

function add() {
  document.getElementById("polewynik").innerHTML = dodawanie(pierwsza, druga);
  document.getElementById("polewynik").style.border = "1px solid salmon";
}

function sub() {
  document.getElementById("polewynik").innerHTML = odejmowanie(pierwsza, druga);
  document.getElementById("polewynik").style.border =
    "1px solid cornflowerblue";
}

function mult() {
  document.getElementById("polewynik").innerHTML = mnozenie(pierwsza, druga);
  document.getElementById("polewynik").style.border = "1px solid darkorchid";
}

function div() {
  document.getElementById("polewynik").innerHTML = dzielenie(pierwsza, druga);
  document.getElementById("polewynik").style.border =
    "1px solid darkolivegreen";
}
