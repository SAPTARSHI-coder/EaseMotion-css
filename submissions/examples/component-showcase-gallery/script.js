const components = [
  {
    name: "Primary Button",
    category: "buttons",
    description: "Main call-to-action button.",
    html: '<button class="flow-btn-primary">Click Me</button>',
    css: ".flow-btn-primary",
    preview: `
      <button class="button-preview">
        Click Me
      </button>
    `
  },

  {
    name: "Card Component",
    category: "cards",
    description: "Simple content card layout.",
    html: `
<div class="flow-card">
  <h4>Card Title</h4>
  <p>Card content here</p>
</div>`,
    css: ".flow-card",
    preview: `
      <div class="card-preview">
        <strong>Card Title</strong>
        <p>Card content here</p>
      </div>
    `
  },

  {
    name: "Alert Message",
    category: "alerts",
    description: "Displays important notifications.",
    html: `
<div class="flow-alert">
  Warning message
</div>`,
    css: ".flow-alert",
    preview: `
      <div class="alert-preview">
        Warning message
      </div>
    `
  }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function copyText(text) {
  navigator.clipboard.writeText(text);
}

function renderComponents(items) {
  gallery.innerHTML = "";

  if (!items.length) {
    gallery.innerHTML = `
      <div class="empty-state">
        No matching components found.
      </div>
    `;
    return;
  }

  items.forEach(component => {
    const card = document.createElement("div");

    card.className = "component-card";

    card.innerHTML = `
      <h3>${component.name}</h3>

      <p>${component.description}</p>

      <div class="preview">
        ${component.preview}
      </div>

      <div class="card-actions">
        <button class="copy-btn copy-html">
          Copy HTML
        </button>

        <button class="copy-btn copy-css">
          Copy CSS Class
        </button>
      </div>
    `;

    card
      .querySelector(".copy-html")
      .addEventListener("click", () => {
        copyText(component.html);
      });

    card
      .querySelector(".copy-css")
      .addEventListener("click", () => {
        copyText(component.css);
      });

    gallery.appendChild(card);
  });
}

function filterComponents() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = components.filter(component => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm) ||
      component.description.toLowerCase().includes(searchTerm);

    const matchesCategory =
      category === "all" ||
      component.category === category;

    return matchesSearch && matchesCategory;
  });

  renderComponents(filtered);
}

searchInput.addEventListener("input", filterComponents);
categoryFilter.addEventListener("change", filterComponents);

renderComponents(components);