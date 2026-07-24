# CSS Draw-Border Tabs - Accessible Web Layout

A pure CSS interactive tab component meticulously styled to comply with strict Web Accessibility (A11y) standards while maintaining the sophisticated Draw-Border drawing animation.

## Features
- **WCAG High Contrast**: Designed with stark black `#111` on white `#fff` for maximum legibility. Typography uses large base fonts (`1.125rem`) and optimal line-heights (`1.6`).
- **Zero Layout Shift**: The Draw-Border animation utilizes a thick `4px` stroke. To prevent layout jarring, the default buttons utilize a `4px solid transparent` spacer border. When the active border is drawn, it paints exactly over this space, guaranteeing 0px of cumulative layout shift (CLS).
- **Reduced Motion Support**: Fully respects the `@media (prefers-reduced-motion: reduce)` media query. If a user has indicated they prefer less animation in their OS, the CSS instantly strips the sequential `transition` delays, turning the effect into a standard, instant active state.
- **Robust Focus Rings**: Features a highly visible, high-contrast blue (`#005fcc`) focus outline that strictly appears on `:focus-visible` (keyboard navigation) and offsets by `4px` so it never overlaps the content.
- **Accessible State Inputs**: The component utilizes visually hidden (`sr-only`) radio inputs. Unlike `display: none`, this ensures screen readers can still focus the inputs and accurately announce their `checked` state to visually impaired users.

## Customization

You can seamlessly adjust the drawing speed and thickness via standard CSS custom properties in the `:root`. Note that thickness should remain `>= 3px` to ensure AAA contrast compliance.

```css
:root {
  /* Draw-Border Line Physics */
  --draw-speed: 0.1s;      /* Snappy to respect user time */
  --border-thickness: 4px; /* Unusually thick for WCAG high contrast visibility */
  
  /* High Contrast Accessibility Colors */
  --focus-ring-color: #005fcc; /* WCAG AAA contrast ratio against white */
}
```

## Architecture Notes
- The "drawing" effect utilizes the `box-sizing: border-box` property on absolute pseudo-elements (`::before` and `::after`).
- The pseudo elements are positioned dynamically using `calc(var(--border-thickness) * -1)` to perfectly overlay the transparent layout-spacer border on the default button.
- Delays are calculated dynamically using `calc(var(--draw-speed) * multiplier)` to ensure one line finishes exactly as the next begins.
