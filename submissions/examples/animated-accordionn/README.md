# Animated Accordion

A collapsible accordion component for FAQs or structured content, with
a smooth chevron rotation and an expandable panel reveal animation.

## Usage

1. Include `style.css`.
2. Build the markup using `.ease-accordion` > `.ease-accordion-item` >
   `.ease-accordion-header` + `.ease-accordion-panel`:

```html
<div class="ease-accordion">
  <div class="ease-accordion-item">
    <button class="ease-accordion-header" aria-expanded="false">
      <span>Question text</span>
      <svg class="ease-accordion-chevron" ...>...</svg>
    </button>
    <div class="ease-accordion-panel">
      <div class="ease-accordion-panel-inner">Answer text</div>
    </div>
  </div>
</div>
```

3. Add the toggle script from `demo.html` to handle open/close state.

Add `data-accordion-single` on the `.ease-accordion` container if you
want opening one item to automatically close the others.

## How it works

- Panels are collapsed by default (`max-height: 0`, `overflow: hidden`).
- Clicking a header toggles the `.is-open` class on its item, sets
  `max-height` on the panel to its scroll height (so it animates open
  to its natural content height), and rotates the chevron 180°.
- `aria-expanded` is kept in sync for accessibility.

## Demo

Open `demo.html` and click any question to expand/collapse its answer.

## Customization

- Rotation speed: change `0.3s` on `.ease-accordion-chevron`
- Panel reveal speed: change `0.35s` on `.ease-accordion-panel`
- Single-open mode: add `data-accordion-single` to `.ease-accordion`