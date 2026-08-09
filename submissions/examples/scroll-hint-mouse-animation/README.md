# Scroll Hint Mouse Animation

A reusable, CSS-only scroll indicator: a minimal mouse outline with a wheel
that slides down and fades, looping infinitely. No JavaScript required.

## Why

- Encourages scrolling without distracting from content
- Pure CSS — zero dependencies, zero JS
- Fully customizable via CSS custom properties
- Beginner-friendly, human-readable markup
- Fits EaseMotion CSS's animation-first philosophy

## Usage

```html
<div class="scroll-hint-tay">
  <div class="mouse-tay">
    <span class="wheel-tay"></span>
  </div>
  <p class="scroll-label-tay">Scroll Down</p>
</div>
```

Include `style.css`, drop the markup anywhere (typically near the bottom of a
hero section), and it works immediately.

## Customization

The component exposes CSS custom properties on `.scroll-hint-tay`:

| Variable        | Default | Purpose                     |
|------------------|---------|------------------------------|
| `--sh-color`     | `#444`  | Outline, wheel & label color |
| `--sh-width`     | `32px`  | Mouse outline width          |
| `--sh-height`    | `54px`  | Mouse outline height         |
| `--sh-duration`  | `1.6s`  | Animation loop duration      |

```css
.scroll-hint-tay {
  --sh-color: #6c5ce7;
  --sh-duration: 1s;
}
```

## Modifier classes

- `.scroll-hint-tay--accent` — purple accent color
- `.scroll-hint-tay--dark` — for dark-background hero sections
- `.scroll-hint-tay--fast` — quicker animation loop
- `.scroll-hint-tay--large` — bigger mouse outline

All modifiers just override the custom properties above — combine or extend
freely.

## Accessibility

Respects `prefers-reduced-motion`: the wheel animation is disabled and shown
in a static, semi-transparent state for users who have reduced motion
enabled at the OS/browser level.

## Files

- `demo.html` — live demo with hero usage + variant showcase
- `style.css` — component styles (`-tay` suffixed classes) + demo scaffolding
- `README.md` — this file

## Checklist

- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming may be standardized by the maintainer
- [x] Submitted inside `submissions/` only