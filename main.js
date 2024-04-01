let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;

//CREATE FUNCTION CONVERT INPUT VALUE TO BOX

btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `
     <p class="item" draggable="true" >${inp.value}</p>`;
    inp.value = "";
  }
  dragitem();
};

// create function drag and drop

function dragitem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        //Cancel (annuler) default of this event 
        e.preventDefault();
        //change style
        this.style.background = "green";
        this.style.color = "white";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "white";
        this.style.color = "black";
      });

      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "white";
        this.style.color = "black";
      });
    });
  });
}
