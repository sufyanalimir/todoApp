let submitBtn = document.getElementById("submitBtn");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deleteBtn = document.getElementsByClassName("delete");

function inputLength() {
  if (input.value.length > 0) {
    return input.value.length;
  } else {
    alert("Oooops You left the field empty..");
  }
}

function createElement() {
  let li = document.createElement("li");
  let button = document.createElement("button");

  li.appendChild(document.createTextNode(input.value));
  button.appendChild(document.createTextNode("Delete"));
  button.setAttribute("class", "delete");
  button.onclick = deleteItem;
  li.appendChild(button);
  ul.appendChild(li);

  input.value = "";
}

function addLineThrough(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}

function addItemAfterMouseClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

function addItemAfterKeyPress(e) {
  if (e.keyCode === 13 && inputLength() > 0) {
    createElement();
  }
}

function deleteItem(e) {
  e.target.removeEventListener("click", deleteItem, false);
  e.target.parentNode.remove();
}
for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", deleteItem, false);
}

ul.addEventListener("click", addLineThrough);
submitBtn.addEventListener("click", addItemAfterMouseClick);
input.addEventListener("keypress", addItemAfterKeyPress);
