# Viewport Progress Highlight Animation

> ⚠️ This animation relies on CSS Scroll-Driven Animations (View Timeline), which currently have limited browser support.

A reusable CSS utility that progressively reveals an element as it enters the viewport, using native **CSS View Timeline** (`animation-timeline: view()`). Instead of a one-time entrance animation, opacity, saturation, and scale all change in sync with how much of the element is visible on screen.

## Key Features
- Scroll-driven progressive reveal (no JavaScript)
- Animates `opacity`, `filter: saturate()`, and `transform: scale()` together
- Customizable via CSS variables (`--ease-opacity`, `--ease-scale`, `--ease-saturation`)
- Uses `animation-range: entry 0% cover 60%` to control when the effect starts/ends
- Includes a `@supports` fallback so content stays fully visible on browsers without View Timeline support

## Usage
Add the class to any element you want to progressively highlight as it scrolls into view:

\`\`\`html
<section class="viewport-progress-highlight">
  <h2>Our Features</h2>
  <p>This content progressively becomes more vibrant as it enters the viewport.</p>
</section>
\`\`\`

Include the CSS:

\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

Customize with variables:

\`\`\`css
.viewport-progress-highlight {
  --ease-opacity: 0.2;
  --ease-scale: 0.9;
  --ease-saturation: 0.4;
}
\`\`\`

## How it works
- `animation-timeline: view()` ties the animation's progress to the element's position within the scrollport instead of time.
- `animation-range: entry 0% cover 60%` means the animation starts the moment the element begins entering the viewport, and finishes once it's 60% scrolled into full visibility.
- The `@keyframes viewport-highlight` block interpolates opacity, saturation, and scale using the CSS custom properties as starting values.

## Browser Support
Relies on CSS Scroll-Driven Animations (`animation-timeline: view()`), currently supported in Chromium-based browsers. The `@supports` fallback ensures the element is fully visible (opacity 1, no filter/scale distortion) in unsupported browsers.

## Accessibility
The animation only affects visual presentation and does not alter document structure or keyboard navigation.

## Files
- `demo.html` — live demo with three example sections
- `style.css` — the utility class + demo page styling
- `README.md` — this file

## Credits
Created for EaseMotion CSS as part of GSSoC 2026.