# Pulse Animation Reduced Motion

## What does it do?
Adds a `prefers-reduced-motion` guard to pulse (attention) animations. When reduced motion is enabled, the pulse is replaced by a static, high-visibility outline ring so the affordance stays discoverable without movement.

## How is it used?
```javascript
import { PulseMotion } from './script.js';
const p = new PulseMotion(document.getElementById('target'));
p.start(); p.stop(); p.isPulsing(); p.isReducedMotion(); p.destroy();
```

## Why is it useful?
Continuous pulsing can cause vestibular distress for motion-sensitive users. Honoring `prefers-reduced-motion` by substituting a static ring keeps the element noticeable without animation.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/pulse-reduced-motion-sb/pulse.test.js
```
- **Happy path**: ease-pulse class added; start adds animating class; stop removes both.
- **Edge cases**: start/stop are no-ops when already in that state; reduced motion uses static ring; destroy removes all classes.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-pulse` + `@media prefers-reduced-motion`), JavaScript (matchMedia), EaseMotion CSS.

## Preview
Open `demo.html`. Set OS reduced motion and reload to see the static ring.

Closes #81921
