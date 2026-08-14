# Switch Toggle ARIA Checked State

## What does it do?
A switch built on a `<button>` with `role=switch` + `aria-checked`. Click and Space/Enter toggle the state; the visible knob follows. Exposes `getState()`/`setState()` and dispatches a `change` event.

## How is it used?
```javascript
import { Switch } from './script.js';
const s = new Switch(document.getElementById('sw'), { checked: false, label: 'Dark mode' });
s.toggle(); s.getState(); s.setState(true); s.destroy();
```

## Why is it useful?
A toggle switch needs `role=switch` + `aria-checked` (not `role=checkbox`/`aria-pressed`) so screen readers announce it as a switch. The keyboard support (Space/Enter) and the `change` event make it usable from the keyboard and easy to wire up.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/switch-toggle-aria-checked-enh-sb/switch.test.js
```
- **Happy path**: role=switch + tabindex + aria-checked; initial checked reflects; toggle flips; Space toggles; Enter toggles; click toggles.
- **Edge cases**: setState(true); change event fires with detail; aria-label set; non-boolean coercion.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (switch + knob + reduced motion + forced-colors), JavaScript (aria-checked + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, click or focus + Space.

Closes #81914
