// *** output screen funct ***//

const screen = document.getElementById("screen");

document.querySelectorAll (" .num, .operator").forEach((el)=>{
  el.onclick = function () {
    screen.textContent += el.textContent;
  };
});
// *** output screen funct end ***//



// *** equality operator funct ***//

document.querySelector(".equal").onclick = function () {
  screen.textContent = eval(screen.textContent);
};
// *** equality operator funct end ***//




//***for the clear button***//
document.querySelector(".all-clear").onclick = function () {
  screen.textContent = "";
};
//***clear button end***//




//*** all clear funct ***//
document.querySelector(".clear").onclick = function () {
  screen.textContent = "";
};
//*** all clear funct end ***//
