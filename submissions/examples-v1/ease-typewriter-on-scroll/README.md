# Typewriter on Scroll

## What does this add?

A typewriter text animation that starts the moment its element scrolls into view, builds on EaseMotion's existing typewriter pattern (width-reveal + blinking cursor), but types out **once** instead of looping — and never replays again in the same browser session, even if you scroll past it and back.

## How is it used?

```html
<h2 class="ease-typewriter-on-scroll" data-text="Your heading text here" style="--ease-typewriter-length: 30ch;"></h2>
```

```js
const el = document.querySelector(".ease-typewriter-on-scroll");
el.textContent = el.dataset.text;

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      el.classList.add("is-typed");
      obs.unobserve(entry.target); // one-shot: never re-trigger
    }
  });
}, { threshold: 0.4 });

observer.observe(el);
```

- `--ease-typewriter-length` sets the revealed width (use roughly the character count in `ch` units, same convention as EaseMotion's `--ease-typewriter-length` variable on the looping version).
- `IntersectionObserver` triggers `.is-typed`, which runs the width-reveal animation once with `forwards` fill mode (no `infinite` loop).
- `obs.unobserve(...)` immediately after triggering guarantees it can never fire a second time for that element.
- The demo additionally uses `sessionStorage` so that even if the page reloads within the same tab session, an already-played heading skips straight to its finished state instead of re-typing.

## Why does it fit EaseMotion CSS?

EaseMotion already has a looping typewriter effect (`.ease-typewriter-loop`) for hero banners and taglines. This adds the natural complementary variant for content sections further down a page — typing out once as the reader reaches it, rather than looping indefinitely off-screen, which both looks more intentional and avoids wasting CPU on an animation nobody's watching.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and scroll down — each heading types itself out the moment it enters the viewport. Scroll back up and down again; they stay finished and don't retype.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

(`IntersectionObserver` is supported in all modern browsers.)

## Accessibility

Respects `prefers-reduced-motion: reduce` — text appears at full width immediately, with no width-reveal animation or blinking cursor.
