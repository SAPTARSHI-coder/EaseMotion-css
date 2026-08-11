# CSS Kinetic Typography Wave Animation

This directory contains a standalone, advanced CSS-only example showcasing how to build a **staggered kinetic typography wave animation** using CSS custom variables, keyframes, transitions, and hover-triggered micro-interactions.

---

## 🌟 What This Demo Demonstrates

1. **Staggered Kinetic Waves**:
   A rolling text wave effect applied across words where individual character glyphs rise, rotate, scale, and change color in sequential order.
2. **Inline CSS Custom Variable Mapping**:
   Using HTML-level variables (e.g. `--i: 1`, `--i: 2`) to dynamically compute staggered animation delays in CSS, keeping the codebase clean and modular.
3. **Interactive Hover Amplification**:
   An interactive playground section where hovering over the text block triggers and amplifies a ripple wave animation using pure CSS selectors.
4. **Composited Performance**:
   Running animations on the GPU by limiting properties to composited transforms (`translateY`, `rotate`, `scale`) and `opacity`.
5. **Reduced Motion Accessibility**:
   Handling OS-level motion reduction preferences dynamically by freezing rotations, translations, and scaling cycles to ensure readability and prevent motion sickness.

---

## 📐 How the Staggered Wave Mechanics Work

Kinetic typography animations require each character to animate independently.
Normally, this would require targeting every single character with `:nth-child` selectors in CSS, leading to heavy and hard-to-maintain code:

```css
span:nth-child(1) {
  animation-delay: 0.1s;
}
span:nth-child(2) {
  animation-delay: 0.2s;
}
/* ... and so on */
```

### The Modern Inline Custom Property Solution

By embedding an index variable `--i` directly in each character's `span` in HTML:

```html
<span style="--i: 1">K</span>
<span style="--i: 2">I</span>
<span style="--i: 3">N</span>
```

We can calculate the `animation-delay` for all spans using a single line of CSS:

```css
animation-delay: calc(var(--i) * 0.12s);
```

As the animation loop executes, characters trigger one after another, creating a rolling wave.

---

## 🎢 Keyframe Wave Transforms

The typography wave keyframe sequence operates across multiple axes:

```css
@keyframes kinetic-wave-loop {
  0%,
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 0.75;
    color: #fff;
  }
  24% {
    transform: translateY(-28px) rotate(8deg) scale(1.12);
    opacity: 1;
    color: #00f5d4;
    text-shadow: 0 0 15px rgba(0, 245, 212, 0.4);
  }
  48% {
    transform: translateY(10px) rotate(-4deg) scale(0.95);
    opacity: 0.85;
    color: #6366f1;
  }
}
```

- **Y-Translation**: Shifts characters upward by `-28px` to form the wave crest, and down by `10px` to form the trough.
- **Rotation**: Tilts the character by `8deg` at the crest to add an organic, kinetic swing, and `-4deg` in the trough.
- **Scale**: Enlarges the character by `12%` (`scale(1.12)`) at the crest to make it pop visually.
- **Opacity**: Blends characters from `0.75` (idle) to `1.0` (active) to enhance readability.

---

## ♿ Accessibility & prefers-reduced-motion

For users experiencing motion-induced discomfort, the continuous oscillation of individual characters can be straining. We address this globally:

```css
@media (prefers-reduced-motion: reduce) {
  .wave-line span,
  .mockup-interactive-text span {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
    color: #fff !important;
    text-shadow: none !important;
  }
  .mockup-interactive-text:hover span {
    animation: none !important;
    transform: none !important;
  }
}
```

In reduced-motion mode:

- Loop animations are completely disabled.
- Characters default to standard fully visible (`opacity: 1`), stable (`transform: none`) styles.
- Hover-triggered animations in the interactive playground are disabled.

---

## 🌐 Browser Compatibility & Considerations

- **GPU Optimization**: The property `will-change: transform, opacity` is applied to character spans, instructing the browser to isolate them on separate rendering layers. This ensures smooth 60fps animations.
- **`display: inline-block`**: Standard `span` tags are inline elements and do not support CSS transforms (`transform: translateY`). Changing them to `display: inline-block` is required for animations to take effect.
- **Compatibility**: Native custom properties (`var()`), calculations (`calc()`), and keyframe animations are fully supported by 100% of modern web browsers.
