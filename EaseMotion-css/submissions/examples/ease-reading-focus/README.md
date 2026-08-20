# Ease Reading Focus

## Feature overview
A lightweight reading-mode utility that keeps the paragraph closest to the viewport center in focus while softly dimming the surrounding paragraphs for better readability.

## Installation
Include the demo files in your project and add the stylesheet and script to the page:

```html
<link rel="stylesheet" href="style.css" />
<script defer src="script.js"></script>
```

Add the `.ease-reading-focus` wrapper around a collection of paragraphs and give each paragraph the `.reading-paragraph` class.

## Usage examples
```html
<article class="ease-reading-focus" aria-label="Reading focus demo">
  <p class="reading-paragraph" tabindex="0">First paragraph.</p>
  <p class="reading-paragraph" tabindex="0">Second paragraph.</p>
  <p class="reading-paragraph" tabindex="0">Third paragraph.</p>
</article>
```

## CSS variable customization
Tune the effect with these variables:

- `--reading-focus-highlight`: accent color used to highlight the active paragraph
- `--reading-focus-dim-opacity`: opacity applied to inactive paragraphs
- `--reading-focus-transition`: duration for focus transitions
- `--reading-focus-intensity`: controls the scale and emphasis of the active paragraph

## Browser compatibility
The feature uses standard DOM APIs, CSS transitions, and Intersection Observer, so it works in modern evergreen browsers and degrades gracefully where support is limited.

## Accessibility considerations
The active paragraph is keyboard reachable, supports arrow-key navigation, preserves focus visibility, and disables motion automatically when the user prefers reduced motion.

## Performance notes
The implementation is dependency-free and uses opacity, background, and transform changes only, which keeps layout stable and avoids expensive reflows.

## Future enhancements
Possible extensions include paragraph-level progress indicators, optional sticky reading guides, and richer theme presets for editorial layouts.
