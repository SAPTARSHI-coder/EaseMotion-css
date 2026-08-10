# Footer Hover Motion Bug Demo

## What does this do?

Demonstrates that the footer's reduced-motion guard in `components/footer.css` removes the transition on social links but doesn't reset the `:hover` `transform: translateY(-2px)`. The icon still jumps 2px instantly on hover under reduced motion.

## How is it used?

Open `demo.html` in a browser. Enable `prefers-reduced-motion: reduce` in your OS/browser settings. Hover over the social icons — they still jump up despite the reduced-motion preference.

## Why is it useful?

WCAG 2.1 SC 2.3.3 requires all animations AND movements to be eliminated under reduced motion. An instant jump is still a movement.

The fix should be applied to `components/footer.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .ease-footer-links a,
  .ease-footer-social a {
    transition: none !important;
    transform: none !important;
  }
  .ease-footer-social a:hover {
    transform: none !important;
  }
}
```
