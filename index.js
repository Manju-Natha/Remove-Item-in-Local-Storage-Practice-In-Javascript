let inputEl = document.getElementById("input");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storangeEl = "userInput";

let storageVal = localStorage.getItem(storangeEl);

if (storageVal === null) {
  localStorage.setItem(storangeEl, "Heloo");
}

saveBtnEl.onclick = function () {
  let saveVal = inputEl.value;
  localStorage.setItem(storangeEl, saveVal);
};

clearBtnEl.onclick = function () {
  inputEl.value = "";
  localStorage.removeItem(storangeEl);
};
