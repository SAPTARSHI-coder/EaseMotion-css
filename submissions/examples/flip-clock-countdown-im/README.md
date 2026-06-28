# ease-timer-countdown-flip

## What does this do?
A flip-clock countdown timer where each digit flips over via `rotateX` when its value changes — the classic two-panel technique: the top half of the current digit folds down (`rotateX(-90deg)`), then the bottom half of the incoming digit folds up from `rotateX(90deg)` to rest. `backface-visibility: hidden` prevents seeing through the card during the 3D rotation. Blinking separator, pause/resume/reset controls, and a fully working 10-minute countdown.

## How to use it

### HTML structure (one digit)
```html
<div class="flip-digit-wrap">
  <div class="flip-card">
    <div class="flip-card-top"><span>5</span></div>
    <div class="flip-card-bottom"><span>5</span></div>
    <div class="flip-card-back-top"><span>4</span></div>
    <div class="flip-card-back-bottom"><span>4</span></div>
  </div>
</div>
```

### JS to trigger a flip
```js
function flipDigit(wrap, newVal) {
  const card = wrap.querySelector('.flip-card');
  const backTop = wrap.querySelector('.flip-card-back-top span');
  const backBottom = wrap.querySelector('.flip-card-back-bottom span');
  const currentVal = wrap.querySelector('.flip-card-top span').textContent;

  if (currentVal === String(newVal)) return;

  backTop.textContent = newVal;
  backBottom.textContent = newVal;

  card.classList.add('ease-flip-active');
  card.addEventListener('animationend', () => {
    card.classList.remove('ease-flip-active');
    wrap.querySelector('.flip-card-top span').textContent = newVal;
    wrap.querySelector('.flip-card-bottom span').textContent = newVal;
  }, { once: true });
}
```

## Key CSS classes
- `.flip-digit-wrap` — sets `perspective: 300px` for the 3D context
- `.flip-card` — the container for all four panels
- `.flip-card-top` / `.flip-card-bottom` — front-facing halves showing current digit
- `.flip-card-back-top` / `.flip-card-back-bottom` — incoming digit halves (hidden until flip)
- `.ease-flip-active` — triggers the two-phase flip animation (`rotateX(-90deg)` then `rotateX(90deg)`)

## Animation detail
Two sequential `rotateX` animations with `ease-in` / `ease-out`:
1. **Top half folds down** — `rotateX(0 → -90deg)`, 0.25s ease-in
2. **Back bottom half folds up** — `rotateX(90 → 0deg)`, 0.25s ease-out, 0.25s delay

`backface-visibility: hidden` on both animated panels ensures only the front face is visible at any time.

## Why it fits EaseMotion CSS
Flip-clock countdowns are used in event launch pages, sale timers, and deadline reminders — a high-visibility component that showcases advanced CSS 3D transform choreography. This directly implements all 3 acceptance criteria from the issue: `rotateX` per digit, `backface-visibility` handling, and the nostalgic flip-clock aesthetic.
