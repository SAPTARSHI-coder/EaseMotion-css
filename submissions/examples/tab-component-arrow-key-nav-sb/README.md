# Tab Component Arrow Key Navigation

## What does it do?
A tablist where Left/Right (or Up/Down when `aria-orientation="vertical"`) arrows move focus between tabs, Home/End jump to first/last, and the active tab uses roving tabindex (`tabindex=0`, others `-1`). Activating a tab shows its panel (`aria-controls`/`aria-labelledby` + `aria-hidden`).

## How is it used?
```html
<div role="tablist" id="tabs">
  <button role="tab" aria-controls="panel-1">First</button>
  <button role="tab" aria-controls="panel-2">Second</button>
</div>
<div role="tabpanel" id="panel-1">Panel one</div>
<div role="tabpanel" id="panel-2">Panel two</div>
```
```javascript
import { TabNav } from './script.js';
const t = new TabNav(document.getElementById('tabs'));
t.select(2); t.getActive(); t.destroy();
```

## Why is it useful?
The WAI-ARIA tabs pattern requires arrow-key navigation (not Tab) to move between tabs, with Home/End shortcuts. Roving tabindex keeps the tablist a single tab stop.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/tab-component-arrow-key-nav-sb/tab.test.js
```
- **Happy path**: first tab aria-selected + tabindex=0; active panel shown; ArrowRight/Left move focus.
- **Edge cases**: wraps last↔first; Home/End; click selects; vertical orientation uses Up/Down.
- **Invalid inputs**: throws without root; throws with no tabs.

## Tech Stack
HTML, CSS, JavaScript (roving tabindex + arrow keys), EaseMotion CSS.

## Preview
Open `demo.html`, focus a tab, use arrow keys.

Closes #81890
