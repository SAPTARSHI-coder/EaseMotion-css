const valEl = document.getElementById("qtyVal");
let qty = 1;

document.getElementById("qtyInc").addEventListener("click", () => {
  qty = Math.min(99, qty + 1);
  valEl.textContent = qty;
});

document.getElementById("qtyDec").addEventListener("click", () => {
  qty = Math.max(1, qty - 1);
  valEl.textContent = qty;
});
