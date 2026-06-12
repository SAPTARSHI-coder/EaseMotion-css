# EaseMotion — `ease-tabs`

A CSS-only tab switcher with animated active indicator. Uses hidden radio inputs for state management — no JavaScript required.

---

## Features

- **Pure CSS** — radio inputs + `:checked` sibling selectors drive tab switching
- **3 variants** — underline (default), pills, bordered
- **Animated panel** — fade + slide transition on panel content
- **Uses design tokens** — references `--ease-color-*`, `--ease-space-*`, `--ease-speed-*` from `core/variables.css`
- **Dark mode** — automatic via `prefers-color-scheme: dark`
- **Reduced motion** — disables transitions when `prefers-reduced-motion: reduce`

---

## Usage

### HTML structure

```html
<div class="ease-tabs">
  <div class="ease-tabs-nav">
    <input
      type="radio"
      id="tab-1"
      name="my-tabs"
      class="ease-tabs-input"
      checked
    />
    <label for="tab-1" class="ease-tabs-label">Tab 1</label>

    <input type="radio" id="tab-2" name="my-tabs" class="ease-tabs-input" />
    <label for="tab-2" class="ease-tabs-label">Tab 2</label>

    <input type="radio" id="tab-3" name="my-tabs" class="ease-tabs-input" />
    <label for="tab-3" class="ease-tabs-label">Tab 3</label>
  </div>

  <div class="ease-tabs-panel" data-tab="1">
    <!-- Tab 1 content -->
  </div>
  <div class="ease-tabs-panel" data-tab="2">
    <!-- Tab 2 content -->
  </div>
  <div class="ease-tabs-panel" data-tab="3">
    <!-- Tab 3 content -->
  </div>
</div>
```

### Variants

```html
<!-- Underline (default) -->
<div class="ease-tabs">...</div>

<!-- Pills -->
<div class="ease-tabs ease-tabs-pills">...</div>

<!-- Bordered -->
<div class="ease-tabs ease-tabs-bordered">...</div>
```

---

## How it works

1. Radio inputs are visually hidden via `clip: rect(0,0,0,0)` — keyboard accessible
2. `<label>` elements target each radio via `for` — clicking the label checks the radio
3. `:checked + .ease-tabs-label` styles the active tab (border-bottom / background / border)
4. `:checked ~ .ease-tabs-panel[data-tab="N"]` reveals the matching panel with a fade-in animation
5. All radio inputs in the same `name` group share state — only one can be `:checked` at a time

---

## Why does it fit EaseMotion CSS?

Tabs are an essential UI pattern for organising content — documentation pages, settings panels, profile sections, and dashboards all benefit from tabbed navigation. The roadmap in VISION.md explicitly lists tabs as a planned feature. This component aligns with the framework's animation-first philosophy and uses existing design tokens for seamless integration.

---

## Files

1. **`style.css`** — component CSS with all 3 variants
2. **`demo.html`** — interactive demo showing all variants
3. **`README.md`** — documentation and usage examples

---

## Notes

- The `data-tab` attribute on panels must match the tab index (1-based). This maps to the Nth radio input's `:checked` state via the `#tab-N` selector.
- For more than 4 tabs, add additional `#tab-N:checked ~ .ease-tabs-panel[data-tab="N"]` rules.
- All behaviour is CSS-only — no JavaScript required for tab switching or panel visibility.
