const users = document.getElementById("pcUsers");
const storage = document.getElementById("pcStorage");
const support = document.getElementById("pcSupport");
const usersVal = document.getElementById("pcUsersVal");
const storageVal = document.getElementById("pcStorageVal");
const total = document.getElementById("pcTotal");

function calc() {
  const u = parseInt(users.value);
  const s = parseInt(storage.value);
  const sup = parseInt(support.value);
  const price = u * 5 + s * 0.1 + sup;
  usersVal.textContent = u;
  storageVal.textContent = s;
  total.textContent = `$${Math.round(price)}`;
}

users.addEventListener("input", calc);
storage.addEventListener("input", calc);
support.addEventListener("change", calc);
calc();
