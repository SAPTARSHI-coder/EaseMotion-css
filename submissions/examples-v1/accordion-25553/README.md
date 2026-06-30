# Accordion / Collapse

Expandable/collapsible content sections with smooth height animation using `grid-template-rows`.

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />
<script src="path/to/script.js"></script>

<div class="ease-accordion">
  <div class="ease-accordion-item">
    <button class="ease-accordion-header">
      <span>Title</span>
      <svg class="ease-accordion-icon"><!-- chevron --></svg>
    </button>
    <div class="ease-accordion-panel">
      <div class="ease-accordion-content">Content here</div>
    </div>
  </div>
</div>
```

## Modes

| Mode                 | Description                               |
| -------------------- | ----------------------------------------- |
| `'single'` (default) | Only one item open at a time              |
| `'multiple'`         | Multiple items can be open simultaneously |

```js
initAccordion(rootElement, { mode: "single" });
initAccordion(rootElement, { mode: "multiple" });
```

## CSS Custom Properties

| Property                   | Default   | Description              |
| -------------------------- | --------- | ------------------------ |
| `--ease-color-surface`     | `#fff`    | Header background        |
| `--ease-color-neutral-200` | `#e2e8f0` | Border color             |
| `--ease-speed-medium`      | `0.35s`   | Panel animation duration |
| `--ease-space-4`           | `1rem`    | Padding                  |

## Accessibility

- Uses semantic `<button>` elements for headers
- `:focus-visible` outline for keyboard navigation
- Respects `prefers-reduced-motion: reduce`
- Works without JavaScript (static content)
