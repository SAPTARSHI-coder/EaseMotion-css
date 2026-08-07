# CSS Fade-In Accordion

A pure CSS accordion built for a creative portfolio layout (e.g. a "working with me" FAQ section), with a fade-in expand animation. No JavaScript, no dependencies.
This demo uses a dark theme to match common creative-portfolio aesthetics. All colors are exposed as custom properties (see below) so it can be re-themed to light or match the framework's own palette.

## How it works

The toggle uses a hidden checkbox paired with a label, so clicking a question just checks a box instead of running any script. Everything else is driven off that `:checked` state through CSS.

Since `height: auto` can't be transitioned in CSS, the content wrapper animates `grid-template-rows` from `0fr` to `1fr` instead. The inner content also plays a small fade + slide keyframe animation when it opens, so it doesn't feel like it just snaps into place.

## Files

- `demo.html` – accordion markup, styled as a portfolio "working with me" FAQ section
- `style.css` – all styling and animation
- `README.md` – this file

## Custom properties

These live on `:root` in `style.css` and control the whole component:

- `--ease-accordion-duration` – 0.4s
- `--ease-accordion-easing` – ease
- `--ease-accordion-radius` – 10px
- `--ease-accordion-gap` – spacing between items
- `--ease-accordion-bg` – item background color
- `--ease-accordion-border` – border color
- `--ease-accordion-hover-bg` – trigger hover background
- `--ease-accordion-text` – trigger text color
- `--ease-accordion-muted-text` – body text color
- `--ease-accordion-accent` – icon, eyebrow, and focus color

Override any of them to reskin it, for example:

```css
:root {
  --ease-accordion-accent: #f97316;
  --ease-accordion-duration: 0.25s;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Trigger is a real label/checkbox pair, so it's keyboard accessible and has a visible focus outline
- Respects `prefers-reduced-motion` — all transitions and animations are disabled if the user has that set