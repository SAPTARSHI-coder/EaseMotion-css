# ease-wave-text

## 1. What does this do?
A pure CSS utility that animates each letter in a text element sequentially up and down, creating a smooth flowing wave effect across the word — no JavaScript, no SVG, zero dependencies.

## 2. How is it used?

Wrap each letter in a <span> inside any element with the wave-text class:
Markup


<!-- Base wave -->
<p class="wave-text">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</p>

<!-- Slow gentle wave -->
<p class="wave-text wave-text-slow">
  <span>G</span><span>e</span><span>n</span><span>t</span><span>l</span><span>e</span>
</p>

<!-- Fast energetic wave -->
<p class="wave-text wave-text-fast">
  <span>E</span><span>n</span><span>e</span><span>r</span><span>g</span><span>y</span>
</p>

<!-- Color shift on wave peak -->
<p class="wave-text wave-text-color" style="--wave-accent: #4fffb0;">
  <span>S</span><span>u</span><span>c</span><span>c</span><span>e</span><span>s</span><span>s</span>
</p>

Hover over any .wave-text element to pause the animation.

## 3. Why is it useful?

EaseMotion CSS currently has no per-letter animation utility. Wave text is one of the most recognisable effects in modern UI — used in loading screens, hero headings, nav links, and playful interfaces. This submission:

- Fits the animation-first philosophy: one class, immediate visual impact
- Is composable: works on any block element — <p>, <h1>, <span>, <a>
- Uses CSS custom properties (`--wave-duration`, --wave-height, `--wave-delay-step`) so the maintainer can wire it into the existing speed token system
- Supports prefers-reduced-motion out of the box
- Produces a result that would otherwise require a JS library

## Class Reference

| Class | Duration | Notes |
|-------|----------|-------|
| wave-text | 1.2s | Base class |
| wave-text-slow | 2.4s | Gentle wave |
| wave-text-fast | 0.6s | Energetic wave |
| wave-text-color | — | Letter color shifts at peak |

## Sizing Tips
- Works best on font-size 1rem and above
- For very large display text, increase --wave-height (e.g. `-20px`)
- Spaces between words: use <span class="space"></span> or a non-breaking space