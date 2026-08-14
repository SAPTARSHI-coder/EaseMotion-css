# Carousel Pause on Focus

## What does it do?
A rotating carousel that pauses when any slide or control receives focus (WCAG 2.2.2 Pause, Stop, Hide). `role=region` + `aria-label` on the root, each slide is a `role=group` with `aria-roledescription=slide` and `aria-label="N of M"`. Reduced motion disables autoplay entirely.

## How is it used?
```javascript
import { Carousel } from './script.js';
const c = new Carousel(document.getElementById('carousel'), { interval: 4000 });
c.play(); c.pause(); c.next(); c.prev(); c.goTo(2); c.destroy();
```

## Why is it useful?
Auto-rotating content that can't be paused is a WCAG 2.2.2 failure: keyboard users can't read a slide before it moves on. Pausing on focus gives them control; `aria-roledescription=slide` + `aria-hidden` keep the AT experience sane.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/carousel-pause-on-focus-enh-sb/carousel.test.js
```
- **Happy path**: role=region + aria-label + aria-roledescription; slide role=group + aria-roledescription=slide + aria-label; first slide active.
- **Edge cases**: next advances; autoplay ticks; focusin pauses; focusout resumes; prev wraps; goTo jumps; reduced motion disables autoplay.
- **Invalid inputs**: throws without root element.

## Tech Stack
HTML, CSS (slide transitions + reduced motion + forced-colors), JavaScript (autoplay + pause-on-focus), EaseMotion CSS.

## Preview
Open `demo.html`, Tab into a slide to pause.

Closes #81906
