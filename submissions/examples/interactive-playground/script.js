const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const frame = document.getElementById("previewFrame");

const runBtn = document.getElementById("runBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const templateSelect = document.getElementById("templateSelect");
const themeToggle = document.getElementById("themeToggle");

const templates = {
  button: {
    html: `
<button class="demo-btn">
  Click Me
</button>
`,
    css: `
.demo-btn{
  background:#6c63ff;
  color:white;
  border:none;
  padding:12px 20px;
  border-radius:8px;
  cursor:pointer;
}

.demo-btn:hover{
  opacity:0.9;
}
`,
  },

  card: {
    html: `
<div class="card">
  <h2>Card Title</h2>
  <p>This is a simple card component.</p>
  <button>Read More</button>
</div>
`,
    css: `
.card{
  width:300px;
  padding:20px;
  border-radius:10px;
  box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.card button{
  margin-top:10px;
  padding:10px;
  background:#6c63ff;
  color:white;
  border:none;
}
`,
  },

  alert: {
    html: `
<div class="alert">
  Success! Your action was completed.
</div>
`,
    css: `
.alert{
  background:#d4edda;
  color:#155724;
  padding:15px;
  border-radius:8px;
  border:1px solid #c3e6cb;
}
`,
  },
};

function updatePreview() {
  const html = htmlEditor.value;
  const css = cssEditor.value;

  frame.srcdoc = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
      ${css}
      </style>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `;
}

function loadTemplate(templateName) {
  htmlEditor.value = templates[templateName].html;
  cssEditor.value = templates[templateName].css;

  updatePreview();
}

loadTemplate("button");

runBtn.addEventListener("click", updatePreview);

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);

templateSelect.addEventListener("change", (e) => {
  loadTemplate(e.target.value);
});

resetBtn.addEventListener("click", () => {
  loadTemplate("button");
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(htmlEditor.value);

  copyBtn.textContent = "Copied!";

  setTimeout(() => {
    copyBtn.textContent = "Copy HTML";
  }, 1500);
});

downloadBtn.addEventListener("click", () => {
  const fullHTML = `
<!DOCTYPE html>
<html>
<head>
<style>
${cssEditor.value}
</style>
</head>
<body>

${htmlEditor.value}

</body>
</html>
`;

  const blob = new Blob([fullHTML], { type: "text/html" });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "component.html";

  link.click();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
