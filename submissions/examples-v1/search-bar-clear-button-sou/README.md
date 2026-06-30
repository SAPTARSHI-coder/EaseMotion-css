# Search Bar Clear Button

A clean, accessible search input component featuring a clear (×) button that appears smoothly only when the user types text, and disappears when the input is empty.

---

## 1. What does this do?

It provides a polished search input with an integrated clear button that lets users instantly wipe their query and refocus the field — improving usability and navigation in documentation, dashboards, and any searchable UI.

---

## 2. How is it used?

Wrap an input and a button inside a container. The clear button's visibility is handled automatically by CSS using `:placeholder-shown`, so no JavaScript is needed to show or hide it. A tiny inline `onclick` handler clears the value.

```html
<div class="search-container-sou">
  <span class="search-icon-sou" aria-hidden="true">
    <!-- inline SVG search icon -->
  </span>

  <input
    type="text"
    class="search-input-sou"
    placeholder="Search docs..."
    aria-label="Search documentation"
  />

  <button
    type="button"
    class="clear-btn-sou"
    aria-label="Clear search input"
    onclick="clearSearchSou(this)"
  >
    &times;
  </button>
</div>