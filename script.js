const btn = document.querySelector(".btn");
const ctr = document.querySelector(".container");
const msg = document.querySelector(".thank-you");
const rating = document.querySelector("span");

let currentBox = null;

function handleBoxClick(boxNumber) {
  const box = document.getElementById(`box${boxNumber}`);
  if (currentBox) {
    currentBox.classList.remove("box-clicked");
  }
  box.classList.add("box-clicked");
  currentBox = box;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentBox == null) {
    return false;
  } else {
    rating.innerHTML = currentBox.innerHTML;
    ctr.classList.add("hidden");
    msg.classList.remove("hidden");
    msg.classList.add("visible");
  }
});
