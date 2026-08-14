# CSS Flower Bloom

A pure CSS flower that blooms petal by petal using staggered keyframe animations — no JavaScript required.

## What it does

On load, a flower blooms from the center outward: the stem and leaves are static, and eight petals fade and scale in one after another (staggered via a per-petal `--i` custom property), followed by the flower's center. A "Replay Bloom" button lets you reset and re-trigger the animation using the checkbox-hack pattern (no JS).

## How to use it

```html
<div class="flower-bloom">
  <input type="checkbox" id="bloom-toggle" class="bloom-toggle-input" checked>

  <div class="flower" role="img" aria-label="A flower blooming petal by petal">
    <div class="stem"></div>
    <div class="leaf leaf-left"></div>
    <div class="leaf leaf-right"></div>

    <div class="petals">
      <span class="petal" style="--i:0"></span>
      <span class="petal" style="--i:1"></span>
      <!-- ...repeat for however many petals, incrementing --i -->
      <div class="flower-center"></div>
    </div>
  </div>

  <label for="bloom-toggle" class="bloom-replay-btn" tabindex="0" role="button"
         aria-label="Replay bloom animation">
    Replay Bloom
  </label>
</div>
```

Each `.petal` needs an inline `--i` custom property (0, 1, 2, ...) to control its rotation angle and animation delay, so petals bloom in sequence around the flower rather than all at once.

## Why it fits EaseMotion CSS

- **Pure CSS, zero dependencies** — the replay interaction uses the checkbox-hack pattern instead of JavaScript, consistent with the library's zero-JS philosophy.
- **Accessible** — the flower is exposed to assistive tech via `role="img"` and an `aria-label`, and the replay control is a real, keyboard-focusable, `focus-visible`-styled button (`tabindex="0"`, `role="button"`).
- **Respects motion preferences** — a `prefers-reduced-motion` media query disables the bloom animation and shows the fully-bloomed static state instead.
- **Responsive** — sized in relative units within a flexible container, so it scales cleanly across viewport sizes.
- **Readable, semantic class names** — `petal`, `flower-center`, `bloom-replay-btn`, etc., in keeping with the library's human-readable naming conventions.

## Notes

Petal count is currently 8 (`--i:0` through `--i:7`), spaced 45° apart (`360 / 8`). To change the petal count, update both the number of `.petal` elements and the angle math in `style.css` (`--angle: calc(var(--i) * 45deg)`).
