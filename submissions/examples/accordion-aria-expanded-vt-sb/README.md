# Accordion ARIA Expanded Audit (validation)

## What does it do?
Wraps a real accordion and validates the ARIA-expanded invariants: each header button has `aria-expanded` matching its panel's state, `aria-controls` pointing at its panel, each panel has `role=region` + `aria-labelledby` back, exactly one panel open (single-open accordion), and expanded/hidden are in sync. Exposes `report()` + `isCompliant()`.

## How is it used?
```javascript
import { AccordionAudit } from './script.js';
const a = new AccordionAudit(document.getElementById('acc'));
a.toggle(0); a.open(1); a.close(1); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Accordions that don't sync `aria-expanded` with the panel's visibility are a common a11y bug — screen readers announce a collapsed section as expanded. The audit report makes the invariants programmatically verifiable (axe-core-style).

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/accordion-aria-expanded-vt-sb/accordion.test.js
```
- **Happy path**: headers get role=button + aria-expanded=false; panels start hidden with role=region + aria-labelledby; aria-controls points at panel id.
- **Edge cases**: open(1) expands only panel 1; single-open closes others; toggle flips; click toggles; report compliant; report flags out-of-sync; close hides panel.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (accordion styling + forced-colors), JavaScript (ARIA-expanded sync + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, click headers, watch the report update.

Closes #81893
