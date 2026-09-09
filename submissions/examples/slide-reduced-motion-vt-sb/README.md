# Slide Animation Reduced-Motion Audit (validation)

## What does it do?
Audits a slide-in/slide-out animation and reports whether it honors `prefers-reduced-motion`. When reduced motion is requested the panel appears instantly (no transition/transform) while still toggling `aria-hidden`. Exposes an audit `report()` and `isCompliant()`.

## How is it used?
```javascript
import { SlideAudit } from './script.js';
const a = new SlideAudit(document.getElementById('panel'), { direction: 'right' });
a.show(); a.hide(); a.toggle(); a.report(); a.isCompliant(); a.destroy();
```

## Why is it useful?
Sliding panels that animate regardless of user preferences can cause motion sickness. Honoring `prefers-reduced-motion` (no transition, no transform) keeps the panel functional without motion, and the audit report makes the compliance check verifiable.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/slide-reduced-motion-vt-sb/slide.test.js
```
- **Happy path**: ease-slide + direction class; starts hidden; show sets aria-hidden=false + is-visible; hide restores.
- **Edge cases**: toggle; Escape hides; reduced motion sets transition=none; report compliant; default left direction; destroy.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-slide` + `@media prefers-reduced-motion`), JavaScript (matchMedia + audit report), EaseMotion CSS.

## Preview
Open `demo.html`, click Toggle. Set OS reduced motion and reload.

Closes #81932
