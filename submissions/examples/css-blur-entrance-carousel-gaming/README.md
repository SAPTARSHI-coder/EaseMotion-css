# CSS Blur-Entrance Carousel

A pure CSS carousel styled as a "top picks this week" gaming hub section, where each incoming slide sharpens from a blurred, slightly scaled-up state into full focus. No JavaScript, no dependencies.

## How it works

Same radio-hack foundation as other carousels in this framework: three hidden radios sharing one `name`, each paired with a dot `<label>`. What's different here is the transition applied to the inactive/active states — instead of animating position or opacity alone, each slide also transitions `filter: blur()` from a blurred value down to `blur(0)`, combined with a slight `scale(1.03)` to `scale(1)` shrink, so the slide both sharpens and settles as it becomes active.

`filter` is animatable like any other CSS property, so this needed no extra hack beyond including it in the same `transition` list as `opacity` and `transform`.

## Files

- `demo.html` – a 3-slide carousel showcasing games with genre tags
- `style.css` – all styling, custom properties, slide switching, and the blur-entrance transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-carousel-duration` – 0.6s
- `--ease-carousel-easing` – ease-out
- `--ease-carousel-radius` – 12px
- `--ease-carousel-bg` – viewport background
- `--ease-carousel-border` – border color
- `--ease-carousel-text` – slide title color
- `--ease-carousel-muted-text` – slide description color
- `--ease-carousel-accent` – tag text and active-dot color
- `--ease-carousel-blur-amount` – how blurred an inactive slide starts (14px)
- `--ease-carousel-dot-size` – diameter of each nav dot

Example override:

```css
:root {
  --ease-carousel-blur-amount: 24px;
  --ease-carousel-accent: #22c55e;
}
```

## Notes

- `filter: blur()` can be more GPU-intensive than opacity/transform alone on some devices; the blur amount is kept moderate (14px) to stay performant
- Fully responsive, with breakpoints at 768px and 480px
- Dots are real `<label>` elements paired with radio inputs, so navigation is keyboard-accessible
- Respects `prefers-reduced-motion` — the blur and scale transition is disabled, slides simply cross-fade via opacity only