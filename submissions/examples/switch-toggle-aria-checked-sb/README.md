# Switch Toggle ARIA Checked State

## What does it do?
A switch widget with `role="switch"` and `aria-checked`, toggled by click and Space/Enter. Emits `onChange(fn)` callbacks and supports an initial checked state.

## How is it used?
```javascript
import { SwitchToggle } from './script.js';
const s = new SwitchToggle(document.getElementById('sw'), { checked: false });
s.setChecked(true); s.isChecked(); s.toggle();
s.onChange((on) => { /* update UI */ });
s.destroy();
```

## Why is it useful?
A toggle rendered as a custom control must expose `role="switch"` + `aria-checked` for screen readers, and support Space/Enter for keyboard users. This keeps the semantic state (`aria-checked`) always consistent with the visual state (`is-on` class).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/switch-toggle-aria-checked-sb/switch.test.js
```
- **Happy path**: role=switch + tabindex; aria-checked false initially; setChecked(true) sets aria-checked; click toggles.
- **Edge cases**: Space/Enter toggle; onChange fires only on actual change; initial checked option; is-on class tracks state.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-switch`), JavaScript (ARIA switch + keyboard), EaseMotion CSS.

## Preview
Open `demo.html`, click or focus + Space/Enter the switch.

Closes #81911
