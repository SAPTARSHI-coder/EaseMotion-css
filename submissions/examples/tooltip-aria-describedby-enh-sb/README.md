# Tooltip ARIA Describedby Link

## What does it do?
A tooltip that links a trigger element to a tooltip element via `aria-describedby`. The tooltip is hidden with the HTML `hidden` attribute (not `display:none`, so SRs can read it) and toggled on hover/focus. Respects `prefers-reduced-motion`.

## How is it used?
```javascript
import { Tooltip } from './script.js';
const t = new Tooltip(document.getElementById('btn'), { text: 'More info' });
t.show(); t.hide(); t.toggle(); t.isVisible(); t.destroy();
```

## Why is it useful?
Without `aria-describedby`, screen-reader users don't hear the tooltip text. The attribute programmatically links the trigger to the tooltip so AT can announce it. Using `hidden` (not `display:none`) lets the tooltip content remain in the a11y tree.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/tooltip-aria-describedby-enh-sb/tooltip.test.js
```
- **Happy path**: role=tooltip + aria-describedby link; starts hidden; show/hide toggle + aria-expanded.
- **Edge cases**: hover shows; focus/blur show/hide; Escape hides; title attribute reused + removed; toggle; reduced motion adds static class.
- **Invalid inputs**: throws without trigger element.

## Tech Stack
HTML, CSS (positioned tooltip + reduced-motion), JavaScript (aria-describedby + hover/focus), EaseMotion CSS.

## Preview
Open `demo.html`, hover or focus the button.

Closes #81900
