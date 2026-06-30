# Search Dropdown (`ease-dropdown-search`)

A fully interactive custom select dropdown featuring an integrated search filter, snappy layout animations, and full keyboard accessibility. Built for the EaseMotion-css framework.

## 🚀 Features

- **Animated Filtering**: Rather than instantly hiding filtered elements with `display: none` (which causes harsh layout jumps), this component appends a `.hidden` class that smoothly transitions the element's `max-height`, `padding`, and `opacity` to `0`. This results in the dropdown menu organically and physically shrinking around the remaining items!
- **Keyboard Navigation**: Fully supports Up Arrow, Down Arrow, Enter, and Escape keys for rapid, mouse-free form filling.
- **Bouncy Pop-out**: The menu utilizes a `cubic-bezier` timing curve to slightly scale up and bounce into place when the trigger is clicked.

## 🛠️ Usage

This component requires both HTML and JavaScript to function properly. The JavaScript is responsible for parsing the search input and applying the `.hidden` class to non-matching `<li>` nodes.

```html
<div class="ease-dropdown" id="dropdown-container">
  <button class="ease-dropdown-trigger" id="dropdown-btn">
    <span id="trigger-text">Select item...</span>
  </button>

  <div class="ease-dropdown-menu">
    <div class="ease-search-wrapper">
      <input type="text" id="dropdown-search" />
    </div>

    <ul class="ease-dropdown-list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
</div>
```
