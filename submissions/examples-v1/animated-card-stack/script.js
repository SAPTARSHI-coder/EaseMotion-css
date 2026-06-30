const stack = document.getElementById("cardstack");
const btn = document.getElementById("stackSpread");
let isSpread = false;

btn.addEventListener("click", () => {
  isSpread = !isSpread;
  stack.className = "cardstack" + (isSpread ? " spread" : " stack");
});
