let gameSituation = "moving";
let turn = "✖";
let cell = "";
let scoreX = 0;
let scoreO = 0;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
let winner = "";

const reset = (win) => {
  alert("Winner of this tour is: "+ win);
  // document.getElementById("scoreX").innerHTML = 0;
  // document.getElementById("scoreO").innerHTML = 0;
  let cells = document.getElementsByClassName("cells");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
};

const score = (side) => {
  if (side == "✖") {
    scoreX += 1;
    document.getElementById("scoreX").innerHTML = scoreX;
  } else if (side == "◯") {
    scoreO += 1;
    document.getElementById("scoreO").innerHTML = scoreO;
  }
};

const check = () => {
  if (
    one.innerHTML == two.innerHTML &&
    two.innerHTML == three.innerHTML &&
    one.innerHTML != ""
  ) {
    winner = one.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    one.innerHTML == four.innerHTML &&
    four.innerHTML == seven.innerHTML &&
    one.innerHTML != ""
  ) {
    winner = one.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    one.innerHTML == five.innerHTML &&
    five.innerHTML == nine.innerHTML &&
    one.innerHTML != ""
  ) {
    winner = one.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    two.innerHTML == five.innerHTML &&
    five.innerHTML == eight.innerHTML &&
    two.innerHTML != ""
  ) {
    winner = two.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    three.innerHTML == five.innerHTML &&
    five.innerHTML == seven.innerHTML &&
    three.innerHTML != ""
  ) {
    winner = three.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    three.innerHTML == six.innerHTML &&
    six.innerHTML == nine.innerHTML &&
    three.innerHTML != ""
  ) {
    winner = three.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    four.innerHTML == five.innerHTML &&
    five.innerHTML == six.innerHTML &&
    four.innerHTML != ""
  ) {
    winner = four.innerHTML;
    score(winner);
    reset(winner);
  } else if (
    seven.innerHTML == eight.innerHTML &&
    eight.innerHTML == nine.innerHTML &&
    seven.innerHTML != ""
  ) {
    winner = seven.innerHTML;
    score(winner);
    reset(winner);
  }
};

const assign = (id) => {
  cell = document.getElementById(id);
  if (gameSituation == "moving") {
    if (turn == "✖" && cell.innerHTML == "") {
      cell.innerHTML = "✖";
      turn = "◯";
      document.getElementById("turnO").innerHTML = "Your Turn";
      document.getElementById("turnX").innerHTML = "";
    } else if (turn == "◯" && cell.innerHTML == "") {
      cell.innerHTML = "◯";
      turn = "✖";
      document.getElementById("turnX").innerHTML = "Your Turn";
      document.getElementById("turnO").innerHTML = "";
    }
  }
  check();
};
