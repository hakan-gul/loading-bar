const counter = document.getElementById("counter");
const span = document.getElementById("span");

let number = 0;

updateNumber();

function updateNumber() {
  span.textContent = number + "%";
  counter.style.width = number + "%";
  number++;

  if (number <= 100) {
    setTimeout(updateNumber, 15);
  }
}
