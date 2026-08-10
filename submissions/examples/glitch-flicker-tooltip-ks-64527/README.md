# CSS Glitch-Flicker Tooltip

A minimalist, pure CSS tooltip component featuring a subtle cyberpunk-inspired glitch-flicker entrance animation, designed for modern technology interfaces.

## Feature Overview

This component provides a lightweight, fully accessible tooltip system that requires absolutely zero JavaScript. It utilizes native HTML accessibility attributes and CSS pseudo-classes to ensure tooltips are perfectly usable via both mouse hover and keyboard navigation.

## Glitch-Flicker Behavior

- **Normal State**: The tooltip content remains hidden (`opacity: 0`, `visibility: hidden`) with a slight offset.
- **Hover/Focus State**: When the user hovers over or focuses the trigger button, the tooltip smoothly fades and translates into position.
- **Glitch-Flicker Animation**: Simultaneously upon reveal, `::before` and `::after` pseudo-elements duplicate the tooltip text (`attr(data-text)`). These layers are animated using `@keyframes` to briefly flash red and blue offsets (`translate` and `text-shadow`) before fading back to `0` opacity. This creates a highly performant, non-intrusive digital glitch effect.

## Tooltip Structure

```html
<div class="tooltip tooltip-top">
    <button
        class="tooltip-trigger"
        type="button"
        aria-describedby="tooltip-example"
    >
        Core
    </button>
    <span
        class="tooltip-content"
        id="tooltip-example"
        role="tooltip"
        data-text="Core interface status"
    >
        Core interface status
    </span>
</div>
```

The trigger is a semantic `<button>` ensuring keyboard navigability. `aria-describedby` links the trigger directly to the `id` of the tooltip content, allowing screen readers to accurately announce the supplemental text when the button receives focus.

## Features

- Pure HTML and CSS (Zero JavaScript)
- Three directional variants (Top, Bottom, Right)
- CSS pseudo-element visual layers for glitching
- Performant `@keyframes` and `transform` animations
- Smooth CSS reveal transitions
- Fully responsive across desktop, tablet, and mobile layouts
- Highly customizable via CSS custom properties
- 100% Keyboard accessible
- Distinctive `:focus-visible` states
- Semantic `aria-describedby` and `role="tooltip"` attributes
- Comprehensive `prefers-reduced-motion` support
- No external dependencies, fonts, or images

## CSS Custom Properties

Easily theme the component by adjusting these root variables:

- `--page-bg`: Background color of the main page.
- `--tooltip-bg`: Background color of the tooltip bubble.
- `--tooltip-surface`: Background color of the trigger button.
- `--tooltip-text`: Text color inside the tooltip.
- `--tooltip-muted`: Color for introductory or muted text.
- `--tooltip-accent`: Primary brand color used for borders, focus rings, and the glitch effect.
- `--tooltip-border`: Color for borders on both trigger and tooltip.
- `--tooltip-radius`: Border radius applied to elements.
- `--tooltip-shadow`: Elevation shadow for the tooltip bubble.

## Responsive Behavior

- **Desktop (`> 850px`)**: Tooltips are displayed in a spacious 3-column grid. Directional classes (`tooltip-top`, `tooltip-bottom`, `tooltip-right`) behave as expected.
- **Tablet (`<= 850px`)**: The grid reduces to 2 columns. To prevent horizontal viewport overflow, the `tooltip-right` variant seamlessly falls back to a bottom-positioned tooltip.
- **Mobile (`<= 600px`)**: The grid collapses into a single column stack. Tooltip content width is constrained using `max-width: min(260px, calc(100vw - 2rem))` to guarantee it never bleeds off the edge of small screens.

## Accessibility

- **Semantic HTML**: Interactive triggers use `<button type="button">` instead of meaningless `<div>`s.
- **Keyboard Navigation**: Tooltips appear on both `:hover` (mouse users) and `:focus-within` (keyboard users).
- **Visible Focus**: Custom `:focus-visible` outlines ensure keyboard users always know what element has focus, substituting default browser rings with clear, theme-aligned outlines.
- **Contrast**: The hover and focus states provide visual feedback through background and border color shifts.

## Reduced Motion

The component includes comprehensive `prefers-reduced-motion: reduce` support. When enabled at the OS level, all animations and transitions are forced to `0.01ms`. This effectively disables the `glitch-flicker` animation and the reveal slide, causing the tooltip to appear instantly and safely for users sensitive to motion.

## Usage

Simply copy the HTML structure into your document and link `style.css`. Adjust the positioning classes (`tooltip-top`, etc.) as needed. Open `demo.html` in any modern browser to see the effect.

## Browser Compatibility

This component uses modern web standards supported by all major browsers (Chrome, Firefox, Safari, Edge), including:
- CSS Custom Properties (Variables)
- CSS Grid layout
- CSS Animations and Transitions
- `attr()` function in CSS
- `:focus-visible` and `:focus-within` pseudo-classes
- `@media (prefers-reduced-motion)`
