# CSS Accessible Web Neon Glow Accordion

A pure CSS animated accordion component that applies a striking "Neon Glow" interaction transition while adhering to strict **Accessible Web** guidelines. This component proves that high-contrast, WCAG-compliant interfaces can still be highly aesthetic and engaging without sacrificing usability.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Accessible Neon Glow:** When an item is selected, the panel's borders and icons ignite with a high-contrast neon glow (`box-shadow` and `drop-shadow`). The neon colors (Yellow, Cyan, Green) were specifically chosen to maintain high contrast ratios against the dark `#121212` background.
- **Accessibility First (WCAG):** 
  - Uses highly visible, thick `outline` properties for `:focus-visible` keyboard navigation.
  - Implements an explicit `+` / `-` icon transition that doesn't rely solely on color to convey state.
  - Hides the radio input using `clip` instead of `display: none` to keep it in the accessibility tree for screen readers.
  - Implements the `@media (prefers-reduced-motion: reduce)` query to disable glow fade-ins and grid expansion animations for users with vestibular disorders.
- **Semantic Structure:** Highly legible typography and standard HTML5 structural tags.

## CSS Custom Properties
```css
:root {
    --glow-timing: 0.4s;
    --expand-timing: 0.5s;
    
    /* High contrast Neon Colors (WCAG compliant against dark bg) */
    --neon-yellow: #ffff00;
    --neon-cyan: #00ffff;
    --neon-green: #39ff14;
}
```
