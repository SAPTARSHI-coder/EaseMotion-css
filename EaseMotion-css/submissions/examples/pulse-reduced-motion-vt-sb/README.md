# Pulse Animation Reduced-Motion Audit (validation)

## What does it do?
Audits a pulse animation and reports whether it honors `prefers-reduced-motion`. When reduced motion is requested the pulse is replaced by a static ring; otherwise the keyframe animation runs. Exposes an axe-core-style `report()` and `isCompliant()`.

## How is it used?
```javascript
import { PulseAudit } from './script.js';
const a = new PulseAudit(document.getElementById('target'));
a.start(); a.stop(); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Continuous pulsing can cause vestibular distress for motion-sensitive users. Honoring `prefers-reduced-motion` by substituting a static ring keeps the element noticeable without animation, and the audit report makes the compliance check programmatically verifiable.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/pulse-reduced-motion-vt-sb/pulse.test.js
```
- **Happy path**: exports keyframe selector; ease-pulse class; start animates when reduced motion off; stop clears classes.
- **Edge cases**: start uses static ring under reduced motion; report flags violation; isCompliant true otherwise; no-op start/stop; destroy clears classes.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-pulse` + `@media prefers-reduced-motion`), JavaScript (matchMedia + audit report), EaseMotion CSS.

## Preview
Open `demo.html`. Set OS reduced motion and reload to see the static ring + report.

Closes #81935
