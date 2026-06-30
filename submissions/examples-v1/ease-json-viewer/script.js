const jsonData = {
  user: {
    name: "Alice",
    age: 24,
    verified: true,
    address: {
      city: "London",
      zip: 400001,
    },
  },
  posts: [
    {
      title: "Hello",
    },
    {
      title: "EaseMotion",
    },
  ],
};

const treeRoot = document.getElementById("json-tree");
const expandAllButton = document.getElementById("expand-all");
const collapseAllButton = document.getElementById("collapse-all");
const copyJSONButton = document.getElementById("copy-json");
const prettyPrintButton = document.getElementById("pretty-print");
const jsonOutput = document.getElementById("json-output");
const toast = document.getElementById("toast");

let toastTimeout = null;
let prettyPrintVisible = false;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1400);
}

function getPath(parentPath, key, isArrayIndex = false) {
  if (!parentPath) {
    return isArrayIndex ? `[${key}]` : String(key);
  }

  return isArrayIndex ? `${parentPath}[${key}]` : `${parentPath}.${key}`;
}

function copyText(value) {
  navigator.clipboard.writeText(value).then(() => {
    showToast("✓ Copied!");
  });
}

function createKeyButton(path, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "json-key";
  button.textContent = label;
  button.setAttribute("aria-label", `Copy path ${path}`);
  button.addEventListener("click", () => copyPath(path));
  return button;
}

function createValueSpan(value, className) {
  const span = document.createElement("span");
  span.className = className;
  span.textContent = value;
  return span;
}

function renderTree(data, container, parentPath = "") {
  const isArray = Array.isArray(data);
  const entries = isArray ? Array.from(data.entries()) : Object.entries(data);

  entries.forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "tree-row";
    row.setAttribute("role", "treeitem");

    const currentPath = getPath(parentPath, key, isArray);

    if (value !== null && typeof value === "object") {
      const disclosure = document.createElement("button");
      disclosure.type = "button";
      disclosure.className = "disclosure";
      disclosure.setAttribute("aria-label", "Toggle node");
      disclosure.setAttribute("aria-expanded", "false");
      disclosure.textContent = "▶";

      const keyLabel = isArray ? `[${key}]` : `"${key}"`;
      const keyButton = createKeyButton(currentPath, keyLabel);
      const openBracket = createValueSpan(isArray ? "[" : "{", "json-bracket");

      row.appendChild(disclosure);
      row.appendChild(keyButton);
      row.appendChild(openBracket);
      container.appendChild(row);

      const body = document.createElement("div");
      body.className = "node-body nested";
      body.setAttribute("role", "group");
      renderTree(value, body, currentPath);
      container.appendChild(body);

      const closingRow = document.createElement("div");
      closingRow.className = "tree-row";
      closingRow.appendChild(
        createValueSpan(isArray ? "]" : "}", "json-bracket")
      );
      container.appendChild(closingRow);

      disclosure.addEventListener("click", () => toggleNode(disclosure, body));
    } else {
      const keyLabel = isArray ? `[${key}]` : `"${key}"`;
      const keyButton = createKeyButton(currentPath, keyLabel);
      const separator = createValueSpan(":", "json-bracket");
      let valueSpan;

      if (value === null) {
        valueSpan = createValueSpan("null", "json-null");
      } else if (typeof value === "string") {
        valueSpan = createValueSpan(`"${value}"`, "json-string");
      } else if (typeof value === "number") {
        valueSpan = createValueSpan(String(value), "json-number");
      } else if (typeof value === "boolean") {
        valueSpan = createValueSpan(String(value), "json-boolean");
      } else {
        valueSpan = createValueSpan(String(value), "json-bracket");
      }

      row.appendChild(keyButton);
      row.appendChild(separator);
      row.appendChild(valueSpan);
      container.appendChild(row);
    }
  });
}

function toggleNode(disclosure, body) {
  const isOpen = disclosure.classList.toggle("is-open");
  disclosure.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("is-open", isOpen);
}

function expandAll() {
  document.querySelectorAll(".disclosure").forEach((button) => {
    const nextBody = button.parentElement?.nextElementSibling;
    button.classList.add("is-open");
    button.setAttribute("aria-expanded", "true");
    if (nextBody?.classList.contains("node-body")) {
      nextBody.classList.add("is-open");
    }
  });
}

function collapseAll() {
  document.querySelectorAll(".disclosure").forEach((button) => {
    const nextBody = button.parentElement?.nextElementSibling;
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    if (nextBody?.classList.contains("node-body")) {
      nextBody.classList.remove("is-open");
    }
  });
}

function copyPath(path) {
  copyText(path);
}

function copyJSON() {
  copyText(JSON.stringify(jsonData));
}

function prettyPrint() {
  prettyPrintVisible = !prettyPrintVisible;
  jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
  jsonOutput.classList.toggle("visually-hidden", !prettyPrintVisible);
  prettyPrintButton.textContent = prettyPrintVisible
    ? "Hide Pretty Print"
    : "Pretty Print";
}

expandAllButton.addEventListener("click", expandAll);
collapseAllButton.addEventListener("click", collapseAll);
copyJSONButton.addEventListener("click", copyJSON);
prettyPrintButton.addEventListener("click", prettyPrint);

renderTree(jsonData, treeRoot);
