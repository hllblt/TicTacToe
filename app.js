let gameSituation = "moving";
let turn = "✖";
let cell = "";
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const check = () => {
  if ((one.innerHTML == two.innerHTML) && (two.innerHTML == three.innerHTML) && one.innerHTML != "") {
    console.log("bingo");
  }
  else if ((one.innerHTML == four.innerHTML) && (four.innerHTML == seven.innerHTML) && one.innerHTML != "") {
    console.log("bingo");
  }
  else if ((one.innerHTML == five.innerHTML) && (five.innerHTML == nine.innerHTML) && one.innerHTML != "") {
    console.log("bingo");
  }
  else if ((two.innerHTML == five.innerHTML) && (five.innerHTML == eight.innerHTML) && two.innerHTML != "") {
    console.log("bingo");
  }
  else if ((three.innerHTML == five.innerHTML) && (five.innerHTML == seven.innerHTML) && three.innerHTML != "") {
    console.log("bingo");
  }
  else if ((three.innerHTML == six.innerHTML) && (six.innerHTML == nine.innerHTML) && three.innerHTML != "") {
    console.log("bingo");
  }
  else if ((four.innerHTML == five.innerHTML) && (five.innerHTML == six.innerHTML) && four.innerHTML != "") {
    console.log("bingo");
  }
  else if ((seven.innerHTML == eight.innerHTML) && (eight.innerHTML == nine.innerHTML) && seven.innerHTML != "") {
    console.log("bingo");
  }

};

const assign = (id) => {
  cell = document.getElementById(id);
  if (gameSituation == "moving") {
    if (turn == "✖" && cell.innerHTML == "") {
      cell.innerHTML = "✖";
      turn = "◯";
      document.getElementById("turnO").innerHTML = "Your Turn"
      document.getElementById("turnX").innerHTML = ""
    } else if (turn == "◯" && cell.innerHTML == "") {
      cell.innerHTML = "◯";
      turn = "✖";
      document.getElementById("turnX").innerHTML = "Your Turn"
      document.getElementById("turnO").innerHTML = ""
    }
  }
  check();
};
