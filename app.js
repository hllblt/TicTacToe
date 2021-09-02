let gameSituation = "moving";
let turn = "✖";
let cell = "";

const check = (id) => {
  //   console.log("hi ", id);
  cell = document.getElementById(id);
  if (gameSituation == "moving") {
    if (turn == "✖" && cell.innerHTML == "") {
      cell.innerHTML = "✖";
      turn = "◯";
      console.log(id);
      console.log(cell);
      console.log(cell.innerHTML);
      console.log(turn);
    }
    else if (turn == "◯" && cell.innerHTML == "") {
      cell.innerHTML = "◯";
      turn = "✖";
      console.log(id);
      console.log(cell);
      console.log(cell.innerHTML);
      console.log(turn);
    }
  }
};
