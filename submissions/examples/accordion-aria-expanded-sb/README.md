# Accordion ARIA Expanded Attributes

## What does it do?
Wires accordion header buttons to their panels via `aria-controls` and keeps `aria-expanded` in sync with the open state. Supports single-open (accordion) and multi-open (`allowMultiple`) modes.

## How is it used?
```html
<div id="accordion">
  <button data-accordion-header aria-controls="acc-panel-0">Section 1</button>
  <div id="acc-panel-0">Content 1</div>
  <button data-accordion-header aria-controls="acc-panel-1">Section 2</button>
  <div id="acc-panel-1">Content 2</div>
</div>
```
```javascript
import { Accordion } from './script.js';
const a = new Accordion(document.getElementById('accordion'), { allowMultiple: true });
a.toggle(0); a.expand(1); a.collapse(1); a.isExpanded(0); a.destroy();
```

## Why is it useful?
Screen-reader users rely on `aria-expanded` to know whether an accordion section is open, and `role="region"` + `aria-controls` to associate the header with its panel. Without these the accordion is opaque to assistive tech.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/accordion-aria-expanded-sb/accordion.test.js
```
- **Happy path**: header role/aria-expanded/tabindex; panel role/aria-hidden; defaultOpen; expand/collapse.
- **Edge cases**: single-open closes others; allowMultiple keeps others open; click toggles.
- **Invalid inputs**: throws without root; throws with no headers.

## Tech Stack
HTML, CSS (expand/collapse + reduced-motion), JavaScript (aria-expanded sync), EaseMotion CSS.

## Preview
Open `demo.html`, click sections.

Closes #81892
