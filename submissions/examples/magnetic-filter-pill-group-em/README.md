# Magnetic Badge Filter Pill Group

> A 100% pure CSS interactive filter pill group featuring hover scale feedback, vibrant active selection states, and integrated item count badges.

## Features

- **Pure CSS State Management** — Utilizes native HTML `<input type="radio">` tags and the `:checked` pseudo-class to handle active selection states without any JavaScript.
- **Horizontal Overflow Scrolling** — The container gracefully scrolls horizontally on mobile viewports while hiding the scrollbar (`scrollbar-width: none`) for a clean UI.
- **Micro-Interactions** — Features smooth `transform: scale()` transitions on hover and active click states for a tactile, "magnetic" feel.
- **Accessible Focus** — Supports keyboard navigation (Tab and Arrow keys) with a clear `:focus-visible` outline for accessibility.
- **Integrated Count Badges** — Each pill contains a nested badge element that dynamically inherits active styling when the parent pill is selected.

## Files

```
submissions/examples/magnetic-filter-pill-group-em/
├── demo.html    — Semantic fieldset wrapper, radio inputs, and label elements
├── style.css    — Pure CSS logic (`:checked + label`), scrolling layout, and transition keyframes
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--pill-bg-default`| `#1e293b` | Default resting background color for pills |
| `--pill-bg-hover`  | `#334155` | Hover background color |
| `--pill-bg-active` | `linear-gradient(135deg, #3b82f6, #8b5cf6)` | Vibrant gradient for the active/checked pill |
| `--pill-radius`    | `999px`   | Full rounded pill shape |

## Usage

```html
<div class="filter-pill">
  <input type="radio" name="category" id="cat-1" class="filter-pill__input" value="1" />
  <label for="cat-1" class="filter-pill__label">
    <span class="filter-pill__text">Category</span>
    <span class="filter-pill__badge">42</span>
  </label>
</div>
```
*Note: Make sure the `name` attribute is identical across the group to ensure they behave as mutually exclusive radio buttons.*

## Acceptance Criteria ✅

- [x] Pure CSS implementation with zero JavaScript.
- [x] Selecting a pill updates background color and active scale indicator seamlessly using `:checked`.
- [x] Container supports smooth horizontal scrolling on smaller screens (`overflow-x: auto`).
- [x] Full keyboard navigation support using standard arrow/tab key interactions with clear focus rings.
- [x] Conforms to the repository structure (`demo.html`, `style.css`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
