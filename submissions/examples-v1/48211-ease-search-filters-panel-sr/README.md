# Ease Search Filters Panel

An animated **Search & Filters Panel** component built entirely with **HTML** and **CSS** — no JavaScript required. It provides a search field, collapsible filter groups, custom-styled checkboxes and radios, a toggle switch, and clear/apply actions, all wrapped in a smooth staggered entrance animation.

Created for issue **#48211 — Create the ease-search-filters-panel component**.

---

## Features

- Pure HTML & CSS, zero JavaScript
- Panel slides in with a staggered rise animation for each section
- Collapsible filter groups using native `<details>` / `<summary>` (keyboard accessible by default)
- Animated chevron rotation on group open/close
- Custom animated checkboxes and radio buttons (no images, `clip-path` checkmark)
- Result-count badges that highlight when an option is selected
- Toggle switch for boolean filters ("In stock only")
- **Clear all** works without JS via a native `<button type="reset">` inside the `<form>`
- Search input with focus glow and animated icon
- Responsive: sidebar stacks above results on small screens
- Respects `prefers-reduced-motion`
- Fully themeable via CSS custom properties

---

## Folder Structure

```text
48211-ease-search-filters-panel-sr/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

```html
<link rel="stylesheet" href="style.css">

<form class="ease-filters-panel" aria-label="Search filters">

  <div class="esfp-search">
    <input type="search" placeholder="Search…" aria-label="Search">
    <span class="esfp-search-icon" aria-hidden="true">🔍</span>
  </div>

  <details class="esfp-group" open>
    <summary>Category <span class="esfp-chevron">▼</span></summary>
    <div class="esfp-group-body">
      <label class="esfp-option">
        <input type="checkbox" name="category" value="books">
        Books
        <span class="esfp-count">203</span>
      </label>
    </div>
  </details>

  <div class="esfp-actions">
    <button type="reset" class="esfp-clear">Clear all</button>
    <button type="button" class="esfp-apply">Apply filters</button>
  </div>

</form>
```

Open **demo.html** directly in any modern browser to preview the component.

---

## Customization

All key values are exposed as CSS custom properties on `:root`:

| Variable | Purpose |
| --- | --- |
| `--esfp-accent` | Primary accent color (checkboxes, toggle, buttons) |
| `--esfp-accent-soft` | Soft accent background for hover/selected states |
| `--esfp-bg` / `--esfp-panel-bg` | Page and panel backgrounds |
| `--esfp-border` | Border color |
| `--esfp-radius` | Panel corner radius |
| `--esfp-duration` | Entrance animation duration |
| `--esfp-ease` | Easing curve used across animations |

---

## How It Works

- **Entrance animation** — the panel uses `esfp-slide-in`, and each direct child gets `esfp-rise-in` with incremental `animation-delay` for a staggered reveal.
- **Collapsible groups** — native `<details>` elements handle open/close state; `[open]` styles rotate the chevron and replay the reveal animation on the group body.
- **Custom inputs** — checkboxes/radios use `appearance: none` with a `::before` pseudo-element (a `clip-path` checkmark or dot) scaled in on `:checked`.
- **Selected-state styling** — `:has(input:checked)` bolds the row and tints its count badge.
- **Clear all** — the panel is a `<form>`, so a `type="reset"` button restores every input's default state with no scripting.

---

## Accessibility

- Semantic form elements (`<form>`, `<label>`, `<details>`, `<summary>`)
- Fully keyboard operable; visible `:focus-visible` rings on all interactive elements
- Decorative icons marked `aria-hidden="true"`
- `aria-label`s on the panel, search input, and results region
- Honors `prefers-reduced-motion` by collapsing all animations and transitions

---

## Browser Support

Chrome, Edge, Firefox, and Safari (modern versions). The `:has()` selector is used only for progressive enhancement of selected rows — the component remains fully functional without it.

---

## License

Created as a submission for the **EaseMotion CSS** examples library.
