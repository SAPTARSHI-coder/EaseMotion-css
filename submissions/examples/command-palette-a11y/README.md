# Accessible Command Palette (Live Filter & Combobox)

This submission demonstrates how to implement a fully accessible Command Palette (e.g., `Cmd+K` menu). Command palettes are complex widgets that combine a text input with a dynamic dropdown list. Making them accessible requires careful orchestration of ARIA attributes and live region announcements.

## Core Accessibility Features

### 1. The ARIA Combobox Pattern

A command palette functions as a "combobox". The user types in an `<input>`, which acts as the control mechanism for an associated `<ul role="listbox">`.

```html
<input 
    type="text" 
    role="combobox" 
    aria-expanded="true" 
    aria-autocomplete="list" 
    aria-controls="palette-results" 
    aria-activedescendant="option-1"
>
<ul id="palette-results" role="listbox">
    <li id="option-1" role="option" aria-selected="true">...</li>
</ul>
```

As the user presses the `ArrowUp` or `ArrowDown` keys, our JavaScript dynamically updates the `aria-activedescendant` attribute on the input, and sets `aria-selected="true"` on the highlighted list item. This allows screen readers to announce the currently highlighted option without the user ever having to actually move keyboard focus out of the input field.

### 2. Live Region Announcements (`aria-live`)

When a user types "Dark Mode" into the input, visual users instantly see the list filter down to 1 result. Blind users, however, cannot see this update.

We must use an `aria-live="polite"` region to announce the number of results found as the user types.

```html
<!-- Visually hidden, but announced to screen readers -->
<div id="palette-announcer" class="sr-only" aria-live="polite" aria-atomic="true">
    3 results found.
</div>
```

```javascript
// On input change:
function filterResults() {
    // ... filtering logic ...
    announcer.textContent = `${visibleCount} results found.`;
}
```

### 3. Keyboard Navigation

- **Cmd+K / Ctrl+K**: Opens the palette globally.
- **Escape**: Closes the palette and returns focus to the previously active element.
- **Arrow Keys**: Navigates the filtered options.
- **Enter**: Executes the currently `aria-selected` option.

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard background colors (which we use to show the "active" option) are stripped away. We must utilize the `forced-colors` media query and system colors (`Highlight` and `HighlightText`) to ensure the active option remains visible.

```css
@media (forced-colors: active) {
    .palette-option[aria-selected="true"] {
        background-color: Highlight;
        color: HighlightText;
    }
}
```
