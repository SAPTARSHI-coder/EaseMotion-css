# Slide Animation Reduced Motion

## What does it do?
Adds a `prefers-reduced-motion` guard to slide-in/slide-out animations. When the user has reduced motion enabled, the slide panel appears instantly (no transform/opacity transition) instead of animating.

## How is it used?
```javascript
import { SlideMotion } from './script.js';
const s = new SlideMotion(document.getElementById('panel'), { direction: 'right' });
s.show(); s.hide(); s.toggle(); s.isReducedMotion(); s.destroy();
```

## Why is it useful?
Slide transitions can trigger vestibular discomfort for users with motion sensitivity. Honoring `prefers-reduced-motion` by disabling the transition (while still toggling visibility and `aria-hidden`) keeps the component usable.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/slide-reduced-motion-sb/slide.test.js
```
- **Happy path**: ease-slide + direction class; starts hidden; show/hide toggle aria-hidden + is-visible.
- **Edge cases**: toggle flips; Escape hides; reduced motion sets transition:none; defaults left.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (`ease-slide` + `@media prefers-reduced-motion`), JavaScript (matchMedia), EaseMotion CSS.

## Preview
Open `demo.html`, click Toggle. Set OS reduced motion and reload to see the instant show.

Closes #81919
