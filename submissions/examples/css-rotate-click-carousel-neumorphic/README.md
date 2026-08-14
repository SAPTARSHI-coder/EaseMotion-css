# CSS Rotate-Click Carousel

A pure CSS carousel with a soft neumorphic aesthetic, where each slide rotates into place when its dot is clicked. No JavaScript, no dependencies.

## How it works

Same radio-hack navigation as other carousels in this framework, but the visual style is neumorphic rather than the dark flat-card look used elsewhere: instead of a border, the surface has a light shadow on the top-left and a dark shadow on the bottom-right (both the same base color as the background), which makes it look like it's gently raised out of the page.

Each slide starts rotated with `rotate(25deg)` and slightly scaled down, then animates to `rotate(0deg)` at full scale when its radio is checked — a spin-in rather than a slide or fade. The dots reuse the same neumorphic language: unselected dots are raised (outer shadow), the active dot is pressed in (inset shadow) and tinted with the accent color.

## Files

- `demo.html` – a 3-slide "daily reminders" wellness carousel
- `style.css` – all styling, custom properties, and the rotate-in transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-rotate-duration` – 0.5s
- `--ease-rotate-easing` – cubic-bezier(0.34, 1.56, 0.64, 1)
- `--ease-rotate-radius` – 20px
- `--ease-rotate-angle` – 25deg, how far a slide is rotated before becoming active
- `--ease-rotate-bg` / `--ease-rotate-surface` – base background/card color
- `--ease-rotate-text` – title text color
- `--ease-rotate-muted-text` – description text color
- `--ease-rotate-accent` – active dot color
- `--ease-rotate-shadow-light` / `--ease-rotate-shadow-dark` – the two neumorphic shadow tones

Example override:

```css
:root {
  --ease-rotate-bg: #f0ede5;
  --ease-rotate-surface: #f0ede5;
  --ease-rotate-shadow-light: #ffffff;
  --ease-rotate-shadow-dark: #d4d0c4;
}
```

## Notes

- Neumorphic shadows work best when `--ease-rotate-shadow-light` and `--ease-rotate-shadow-dark` are close in tone to the background — too much contrast breaks the "soft" look
- Fully responsive; the viewport grows slightly taller on mobile to fit wrapped text
- Respects `prefers-reduced-motion` — slides and dots lose their transition, appearing/disappearing instantly