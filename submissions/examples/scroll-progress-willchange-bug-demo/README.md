# Scroll Progress Will-Change Bug Demo

## What does this do?

Demonstrates that `components/scroll-progress.css` sets `will-change: transform` but the reduced-motion block never resets it to `will-change: auto`, wasting GPU memory.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Inspect the progress bar's computed styles — `will-change` remains `transform` even though no animation is running.

## Why is it useful?

`will-change` tells the browser to keep the element on a separate compositor layer. Keeping it active on low-powered devices wastes GPU memory and battery — exactly the audience that benefits from reduced motion.

The fix should be applied to `components/scroll-progress.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-scroll-progress {
    animation: none;
    transform: scaleX(1);
    will-change: auto;
  }
}
```
