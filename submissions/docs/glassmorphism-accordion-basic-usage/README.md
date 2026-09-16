# Documentation: Glassmorphism Accordion Basic Usage (#81627)

Comprehensive documentation guide covering copy-paste HTML markup, CSS class naming conventions, modifier classes, custom CSS variable overrides, and keyboard interaction guidelines for Glassmorphism Accordions (`#81627`).

## 🚀 Overview & Features

- **Frosted Glass Aesthetics:** Combines semi-transparent backgrounds with `backdrop-filter: blur()` for modern glassmorphism panels.
- **Native Semantic Markup:** Built on top of HTML5 `<details>` and `<summary>` elements for zero-dependency accordion toggling.
- **Accessibility First:** Fully supports keyboard focus navigation and screen reader compatibility.

## 📋 Copy-Paste HTML Markup

```html
<details class="em-glass-accordion">
  <summary class="em-glass-summary">Accordion Header Title</summary>
  <div class="em-glass-content">
    <p>Expandable accordion body text goes here.</p>
  </div>
</details>
