# Expandable Search (`ease-search-expand`)

A pure-CSS animated search bar that begins as a compact icon and smoothly expands into a full text input on click. Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS Animation**: Requires zero JavaScript. Expansions and collapses are handled entirely via the `:focus-within` pseudo-class.
- **Smart Collapse Logic**: The search bar smoothly collapses back to an icon when the user clicks away (blur).
- **Text Retention**: Utilizes the `:not(:placeholder-shown)` CSS trick so that if a user types a query but clicks away, the search bar *remains expanded* so their query isn't hidden.
- **Mobile Friendly**: The perfect pattern for responsive navbars where horizontal space is at a premium.

## 🛠️ Usage

Use the `.ease-search-expand` wrapper around an icon (wrapped in a `<label>`) and an `<input>`.

```html
<div class="ease-search-expand">
  <label for="my-search" class="ease-search-icon">
    <!-- SVG Icon Here -->
  </label>
  <input type="text" id="my-search" class="ease-search-input" placeholder="Search..." />
</div>
