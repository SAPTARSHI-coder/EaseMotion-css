# Liquid Spinner

A zero-JavaScript loading component for EaseMotion CSS. It combines a neon
outer rim, two liquid orbit drops, and a morphing center blob to create a
polished "liquid" spinner that can be dropped into product dashboards, SaaS
loading states, or onboarding screens.

Resolves Issue: #41686

## Features

- Pure CSS implementation; no JavaScript or build step is required.
- Uses `ease-*` class names and `ease-liquid-*` keyframes/custom properties.
- Themeable through CSS variables such as `--ease-liquid-primary`,
  `--ease-liquid-secondary`, `--ease-liquid-size`, and motion durations.
- Accessible loading semantics with `role="status"`, `aria-live="polite"`, and
  screen-reader-only loading text.
- Responsive demo layout with a fluid spinner size using `clamp()`.
- Motion-safe fallback through `prefers-reduced-motion: reduce`.

## Usage

```html
<div
  class="ease-liquid-spinner"
  role="status"
  aria-live="polite"
  aria-label="Loading content"
>
  <span class="ease-liquid-orb ease-liquid-orb-one" aria-hidden="true"></span>
  <span class="ease-liquid-orb ease-liquid-orb-two" aria-hidden="true"></span>
  <span class="ease-liquid-rim" aria-hidden="true"></span>
  <span class="ease-liquid-sr-only">Loading content</span>
</div>
```

Include `style.css`, then adjust the custom properties on `:root` or a wrapper
to match your theme:

```css
:root {
  --ease-liquid-primary: #27f3ff;
  --ease-liquid-secondary: #8b5cf6;
  --ease-liquid-accent: #7cffc4;
  --ease-liquid-size: 6rem;
}
```

## Files

- `demo.html` - self-contained browser demo.
- `style.css` - component styling, keyframes, responsive states, and
  reduced-motion handling.
- `README.md` - usage notes and accessibility details.

## Accessibility

The visual pieces are marked `aria-hidden="true"` so assistive technology only
announces the loading status once. The spinner keeps a visible static state
when reduced motion is requested, avoiding continuous rotation for motion
sensitive users.
