# Custom Audio Player Widget — Theming Configuration

## Overview

This guide documents theming for a custom audio player widget.

The component keeps media semantics in HTML and exposes visual values through CSS custom properties.

Use the pattern for documentation, product pages, or media libraries.

## Markup

```html
<section class="audio-widget" aria-labelledby="audio-title">
  <h2 id="audio-title">Episode preview</h2>
  <audio class="audio-widget__media" controls>
    <source src="episode.mp3" type="audio/mpeg">
    Your browser does not support HTML audio.
  </audio>
</section>
```

## Theme Variables

```css
.audio-widget {
  --audio-surface: #111827;
  --audio-accent: #67e8f9;
  --audio-text: #f8fafc;
  --audio-radius: 1rem;
}
```

Override these values at a theme or component scope.

## Modifiers

Use modifiers for intentional variants such as compact or high-contrast presentation.

Keep the base class responsible for structure and the modifier responsible for variation.

## Accessibility

Keep native audio controls available unless equivalent accessible controls are provided.

Provide a descriptive heading and fallback text.

Use keyboard-operable native controls.

Maintain visible focus indicators for custom interactive elements.

## Responsive Behavior

The widget should fill its available width without creating horizontal overflow.

Allow metadata and supporting text to wrap on small screens.

## Reduced Motion

Decorative transitions must respect `prefers-reduced-motion`.

Audio playback and controls must never depend on animation.

## Testing

Test keyboard access, zoom, mobile widths, desktop widths, contrast, and reduced motion.

Verify the chosen theme values remain readable in every supported variant.

## Files

`README.md` contains theming guidance.

`demo.html` is the standalone example.

`style.css` contains the component theme and responsive rules.
