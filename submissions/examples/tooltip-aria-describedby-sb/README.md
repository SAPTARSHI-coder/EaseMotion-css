# Tooltip ARIA Describedby Link

## What does it do?
Wires a trigger element's `aria-describedby` to a tooltip element with `role="tooltip"`, and shows/hides it on focus/blur and mouseenter/mouseleave.

## How is it used?
```javascript
import { TooltipAria } from './script.js';
const t = new TooltipAria(triggerEl, tooltipEl);
t.show(); t.hide(); t.destroy();
```

## Why is it useful?
For a tooltip to be announced by screen readers, the trigger must reference it via `aria-describedby` and the tooltip must carry `role="tooltip"`. This also gates visibility on focus (keyboard) and hover (mouse), so both input methods expose the tooltip.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/tooltip-aria-describedby-sb/tooltip.test.js
```
- **Happy path**: role=tooltip + aria-describedby set; reuses existing id; hidden initially; focus shows / blur hides.
- **Edge cases**: mouseenter/mouseleave; show()/hide(); destroy() removes aria-describedby.
- **Invalid inputs**: throws without valid elements.

## Tech Stack
HTML, CSS (`ease-tooltip`), JavaScript (focus/hover + ARIA), EaseMotion CSS.

## Preview
Open `demo.html`, focus or hover the button.

Closes #81901
