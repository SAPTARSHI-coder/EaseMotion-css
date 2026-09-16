# Text Marquee Stroke

A dependency-free EaseMotion text component that scrolls stroked headline text
across a ticker lane with a dashed animated underline.

## Files

- `demo.html` contains the accessible marquee example.
- `style.css` defines the stroked text, marquee track, dashed underline, focus
  treatment, and reduced-motion fallback.

## Accessibility

The visual ticker is wrapped in a labeled button so keyboard users can focus the
component. Motion is disabled when `prefers-reduced-motion` is enabled.
