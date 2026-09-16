# CSS Unit Converter Widget

A tabbed unit-converter display built with pure CSS/HTML — no JavaScript.
It switches between **Length**, **Weight**, and **Temperature** panels
using the "checked radio" CSS trick, with an animated fade/slide-in
transition whenever the active tab changes.

## Files

- `demo.html` — the widget with three conversion tabs
- `style.css` — all styles and animations
- `README.md` — this file

## How it works

Three visually-hidden radio inputs sit before their corresponding
`<label>` tab buttons and `.unit-panel` panels in the DOM. CSS sibling
selectors (`:checked ~ ...`) show the active tab's styling and reveal
the matching panel. Each panel plays a short `panel-fade-in`
`@keyframes` animation whenever it becomes visible.

## Usage

```html
<div class="unit-converter" role="group" aria-label="Unit converter">
  <input type="radio" name="unit-tab" id="tab-length" checked />
  <input type="radio" name="unit-tab" id="tab-weight" />

  <div class="unit-tabs">
    <label for="tab-length">Length</label>
    <label for="tab-weight">Weight</label>
  </div>

  <div class="unit-panels">
    <div class="unit-panel length">
      <div class="value-row">
        <span class="value-label">10 cm</span>
        <span class="value-number">3.94 in</span>
      </div>
    </div>
  </div>
</div>
```

### Why fixed reference values, not a live input?

This is a pure CSS component, and CSS cannot read a typed number and
compute a converted result — that requires JavaScript. To stay within
the "no JavaScript" spec, this widget shows a small set of pre-computed
reference conversions per category instead, animated in on tab switch.

### Accessibility

- Tab labels are focusable and keyboard-operable via native
  `<label for>` behavior tied to the radio group.
- `role="group"` and `aria-label` identify the widget for screen readers.
- Each panel has an `aria-label` describing its category.
- Visible focus outline on keyboard navigation.
- `prefers-reduced-motion: reduce` disables the panel animation.

### Responsive behavior

Fluid `max-width` and vertically-stacked rows adapt naturally to narrow
viewports.

## Why it fits EaseMotion CSS

Pure CSS/HTML, no JavaScript, readable `@keyframes` transition, and
accessible, responsive markup.

## Notes

- No existing files were modified — strictly additive, living entirely
  in `submissions/examples/css-unit-converter-widget/`.
