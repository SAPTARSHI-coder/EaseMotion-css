# Modal Component Focus Trap

## What does it do?
A modal dialog that traps focus within itself (Tab/Shift+Tab cycle between focusables), moves focus into the dialog on open, restores focus to the trigger on close, and closes on Escape + backdrop click.

## How is it used?
```html
<div id="modal" class="ease-modal">
  <div class="ease-modal__dialog" tabindex="-1">
    <button id="close">Close</button>
    <input />
  </div>
</div>
<button id="open">Open</button>
```
```javascript
import { Modal } from './script.js';
const m = new Modal(document.getElementById('modal'), { trigger: document.getElementById('open') });
m.open(); m.close(); m.isOpen(); m.destroy();
```

## Why is it useful?
A focus trap prevents keyboard users from tabbing out of the dialog into the hidden page behind it (an ARIA Authoring Practices requirement for `aria-modal="true"`). Restoring focus on close returns the user to their place.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/modal-focus-trap-sb/modal.test.js
```
- **Happy path**: role=dialog + aria-modal; open toggles hidden + aria-hidden; open moves focus to first focusable; Escape closes.
- **Edge cases**: close restores saved focus; Tab wraps last→first; Shift+Tab wraps first→last; trigger opens; backdrop closes.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (overlay), JavaScript (focus trap + Escape), EaseMotion CSS.

## Preview
Open `demo.html`, click Open, Tab around, press Escape.

Closes #81886
