# Ease Search Suggestion Dropdown

## Description
A search input with an animated suggestion dropdown, revealed on focus with a smooth scale/fade/slide entrance and staggered per-item animation. Pure CSS — no JavaScript.

## Features
- Dropdown reveals on input `:focus`, stays open via `:focus-within`/`:hover` so users can click a suggestion
- Staggered entrance animation for each suggestion item
- Fully keyboard accessible: suggestions are focusable (`tabindex="0"`) with visible `:focus-visible` styling
- `role="combobox"`/`role="listbox"`/`role="option"` ARIA pattern
- Customizable via CSS custom properties (colors, timing, easing)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-search">
  <input
    type="text"
    class="search-input"
    placeholder="Search..."
    role="combobox"
    aria-controls="search-suggestions"
  />
  <ul class="search-dropdown" id="search-suggestions" role="listbox">
    <li class="suggestion-item" role="option" tabindex="0">Result 1</li>
    <li class="suggestion-item" role="option" tabindex="0">Result 2</li>
  </ul>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--search-duration` | `0.25s` | Dropdown animation duration |
| `--search-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function |
| `--search-bg` | `#14141c` | Background color |
| `--search-fg` | `#f5f7fa` | Text color |
| `--search-accent` | `#38bdf8` | Focus ring / accent color |

## Files
- `demo.html` — live working example
- `style.css` — component styles
- `README.md` — this file