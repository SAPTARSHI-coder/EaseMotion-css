const textarea = document.getElementById("message");
const fieldWrapper = document.getElementById("activeField");
const counter = document.getElementById("messageCounter");
const clearButton = document.getElementById("clearTextarea");

const MAX_CHARS = 500;
const WARNING_THRESHOLD = 450;
const MAX_HEIGHT = 300;

const formatCharacterCount = (length) => `${length} / ${MAX_CHARS}`;

function updateCharacterCount() {
  const length = textarea.value.length;
  counter.textContent = formatCharacterCount(length);
  counter.classList.toggle(
    "warning",
    length >= WARNING_THRESHOLD && length < MAX_CHARS
  );
  counter.classList.toggle("error", length >= MAX_CHARS);
  textarea.classList.toggle("error", length >= MAX_CHARS);
}

function autoResize(element) {
  element.style.height = "auto";
  const nextHeight = Math.min(element.scrollHeight, MAX_HEIGHT);
  element.style.height = `${nextHeight}px`;
  element.style.overflowY =
    element.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
}

function toggleFloatingLabel() {
  const hasText = textarea.value.trim().length > 0;
  fieldWrapper.classList.toggle("filled", hasText);
}

function clearTextarea() {
  textarea.value = "";
  updateCharacterCount();
  autoResize(textarea);
  toggleFloatingLabel();
  textarea.focus();
}

function handleFocus() {
  fieldWrapper.classList.add("focused");
}

function handleBlur() {
  fieldWrapper.classList.remove("focused");
  toggleFloatingLabel();
}

textarea.addEventListener("input", () => {
  updateCharacterCount();
  autoResize(textarea);
  toggleFloatingLabel();
});

textarea.addEventListener("focus", handleFocus);
textarea.addEventListener("blur", handleBlur);
clearButton.addEventListener("click", clearTextarea);

updateCharacterCount();
autoResize(textarea);
toggleFloatingLabel();
