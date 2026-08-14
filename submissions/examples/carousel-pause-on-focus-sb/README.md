# Carousel Autoplay Pause on Focus

## What does it do?
Pauses carousel autoplay while any slide or control inside the carousel is focused (via `focusin`/`focusout` on the root), and resumes autoplay when focus leaves the carousel entirely.

## How is it used?
```javascript
import { CarouselPause } from './script.js';
const c = new CarouselPause(document.getElementById('carousel'), { interval: 3000 });
c.play(); c.pause(); c.next(); c.isPaused();
c.onPauseChange((paused) => { /* update UI */ });
c.destroy();
```

## Why is it useful?
Auto-advancing carousels are a WCAG 2.2.2 concern: moving content must pause when a user interacts with it. Pausing on focus (not just hover) covers keyboard users, who never trigger mouseenter, so the carousel stays still while they read a slide.

## Testing
```bash
npx vitest run --config <inline include> submissions/examples/carousel-pause-on-focus-sb/carousel.test.js
```
- **Happy path**: starts playing; pauses on focusin; resumes on focusout; aria-hidden only false on active; next() cycles.
- **Edge cases**: no re-pause when already paused; focusout to inner element keeps paused; onPauseChange fires on pause/resume; pause() clears timer.
- **Invalid inputs**: works with no slides; throws without root element.

## Tech Stack
HTML, CSS (`ease-carousel*`), JavaScript (focusin/focusout + timers), EaseMotion CSS.

## Preview
Open `demo.html`, Tab into a slide, and watch the status flip to paused.

Closes #81907
