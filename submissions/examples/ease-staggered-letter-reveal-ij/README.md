# Staggered Letter Reveal

A hero headline whose letters spring in one by one with a blur-to-sharp stagger, plus a hover wiggle on each character.

## How is it used?

Split your text into `.ch` spans and give each a `--i` index for the stagger delay:

```html
<h1 class="headline run" id="headline">
  <span class="word"><span class="ch" style="--i:0">A</span><span class="ch" style="--i:1">n</span>…</span>
</h1>
```

```css
.headline.run .ch {
  animation: letterIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--i) * 0.045s);
}
```

The `.ch` spans start `opacity: 0`; adding `.run` to the headline fires `letterIn`. Replaying is a re-trigger by toggling `.run` (the demo reflows with `offsetWidth` to restart the animation).

## Why is it useful?

Letter-by-letter reveals turn a static headline into the first moment of delight on a landing page. This component demonstrates per-character stagger via CSS custom properties and a springy overshoot curve — pure CSS, replayable on demand, exactly the kind of drop-in motion EaseMotion showcases.
