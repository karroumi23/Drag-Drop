let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
//CREATE FUNCTION CONVERT INPUT VALUE TO BOX

btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `
     <p class="item" draggable="true" >${inp.value}</p>`;
    inp.value = "";
  }
};
