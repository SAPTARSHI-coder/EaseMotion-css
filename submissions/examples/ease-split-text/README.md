# ease-split-text

## What does this do?

A CSS utility that animates each letter of a heading independently — letters fade, slide, or blur into view in left-to-right sequence using `nth-child` staggered `animation-delay` on individual `<span>` wrappers. Pure CSS, zero JavaScript.

## How is it used?

Wrap each letter in a `<span>`. Use `.split-space` for word spaces. Add a variant modifier class:

```html
<!-- Fade only (default) -->
<h1 class="ease-split-text">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1>

<!-- Slide up -->
<h1 class="ease-split-text ease-split-text-slide">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1>

<!-- Fade + blur -->
<h1 class="ease-split-text ease-split-text-blur">
  <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>
</h1>

<!-- Multi-word: .split-space preserves word gaps -->
<h1 class="ease-split-text ease-split-text-slide">
  <span>B</span><span>u</span><span>i</span><span>l</span><span>d</span>
  <span class="ease-split-space"> </span>
  <span>f</span><span>a</span><span>s</span><span>t</span><span>e</span
  ><span>r</span>
</h1>
```

### Speed presets

```html
<!-- Fast: 25ms per letter -->
<h1 class="ease-split-text ease-split-text-fast">...</h1>

<!-- Slow: 70ms per letter -->
<h1 class="ease-split-text ease-split-text-slow">...</h1>
```

### Custom step size

```html
<h1 class="ease-split-text" style="--split-delay-step: 60ms;">...</h1>
```

### Custom rise distance (slide variant)

```html
<h1 class="ease-split-text ease-split-text-slide" style="--split-rise: 28px;">
  ...
</h1>
```

## Why does it fit EaseMotion CSS?

EaseMotion CSS animates elements at block level (`staggered-reveal`, `staggered-fade-entrance`) and text at string level (`ease-typewriter`). **Per-character animation is the missing layer** — and this submission fills it:

| Effect             | Unit animated  | Technique                         | Per-letter? |
| ------------------ | -------------- | --------------------------------- | ----------- |
| `ease-typewriter`  | Entire string  | `width: 0ch → Nch` clipping       | ✕ No        |
| `staggered-reveal` | Block elements | `nth-child` delay on divs/lis     | ✕ No        |
| `ease-split-text`  | Each letter    | `nth-child` delay on inline spans | ✓ Yes       |

The implementation follows EaseMotion's core philosophy:

- **Reuses core keyframes** — fade variant uses `ease-kf-fade-in`; slide variant uses `ease-kf-slide-up` — both already in `core/animations.css`. Zero new keyframes added
- **Token-first** — `--split-delay-step`, `--split-rise`, `--split-duration`, `--split-ease` are all overridable CSS variables
- **Human-readable** — `.ease-split-text-slide` is immediately self-explanatory
- **`prefers-reduced-motion` safe** — all letters shown instantly with no animation; text is never hidden

## CSS Custom Properties

| Property             | Default                | Description                         |
| -------------------- | ---------------------- | ----------------------------------- |
| `--split-delay-step` | `40ms`                 | Stagger gap between each letter     |
| `--split-duration`   | `400ms`                | Animation duration per letter       |
| `--split-rise`       | `16px`                 | translateY travel for slide variant |
| `--split-ease`       | `var(--ease-ease-out)` | Easing function                     |

## Classes Reference

| Class                   | Description                     |
| ----------------------- | ------------------------------- |
| `ease-split-text`       | Base class — fade-only entrance |
| `ease-split-text-slide` | Slide-up variant                |
| `ease-split-text-blur`  | Fade + blur variant             |
| `ease-split-text-fast`  | 25ms stagger step               |
| `ease-split-text-slow`  | 70ms stagger step               |
| `ease-split-space`      | Word space preserver            |

## Tech Stack

- HTML
- CSS only (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser. Six sections: fade, slide, blur on dark hero, speed presets, usage code, and a comparison table against existing effects.

## Contribution Notes

- Class names used: `.split-text`, `.split-text-slide`, `.split-text-blur`, `.split-text-fast`, `.split-text-slow`, `.split-space`
- Maintainer will rename to `ease-split-text-*` before merging
- Spinner references `ease-kf-fade-in` and `ease-kf-slide-up` — no changes to core needed
- No changes made to `core/`, `components/`, or any existing files
- `nth-child` stagger covers 30 letters — sufficient for virtually all heading text
