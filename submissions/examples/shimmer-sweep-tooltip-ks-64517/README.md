# CSS Shimmer-Sweep Tooltip

A polished, pure CSS tooltip component featuring a subtle shimmer-sweep entrance animation, designed for minimalist technology and SaaS interfaces.

## Feature Overview

This component provides a lightweight, fully accessible tooltip system that requires absolutely zero JavaScript. It utilizes native HTML accessibility attributes and CSS pseudo-classes to ensure tooltips are perfectly usable via both mouse hover and keyboard navigation.

## Shimmer-Sweep Behavior

- **Hidden State**: The tooltip content remains hidden (`opacity: 0`, `visibility: hidden`) with a slight initial `translateY` offset.
- **Hover/Focus Reveal**: When the user hovers over or focuses the trigger button, the tooltip smoothly fades and translates into its final resting position.
- **Shimmer Movement**: Simultaneously upon reveal, a `::before` pseudo-element on the tooltip surface executes a 900ms `@keyframes` sweep animation. The pseudo-element contains a skewed linear-gradient that passes smoothly across the tooltip background, creating a high-end digital shimmer.
- **Glow & Transition**: The trigger button itself features a subtle transition, brightening its border color and background to the accent color for additional visual feedback.

## Tooltip Structure

```html
<div class="tooltip tooltip-top">
    <!-- Trigger -->
    <button class="tooltip-trigger" type="button" aria-describedby="tooltip-example">
        Core
    </button>
    
    <!-- Tooltip content -->
    <span class="tooltip-content" id="tooltip-example" role="tooltip">
        Core interface status
    </span>
</div>
```

- **`aria-describedby`**: The trigger button uses `aria-describedby` referencing the exact `id` of the tooltip content. This ensures screen readers will read the tooltip text when the button receives focus.
- **`role="tooltip"`**: The content container is explicitly marked with `role="tooltip"` for semantic clarity.
- **Unique IDs**: Each tooltip pair is linked by a unique ID string.

## Features

- Pure HTML and CSS (Zero JavaScript)
- Three directional variants (Top, Bottom, Right)
- Performant `@keyframes` Shimmer-Sweep effect
- CSS pseudo-element shimmer layers (`::before`)
- Smooth CSS reveal transitions (`opacity`, `transform`)
- Fully responsive layout across desktop, tablet, and mobile
- Custom decorative CSS visual signal icons
- Highly customizable via CSS custom properties
- 100% Keyboard accessible (`:focus-within`)
- Distinctive `:focus-visible` states
- Comprehensive `prefers-reduced-motion` support
- No external dependencies, fonts, or images

## CSS Custom Properties

Easily theme the component by adjusting these root variables:

- `--page-bg`: Background color of the main page container.
- `--tooltip-bg`: Background color of the tooltip bubble.
- `--tooltip-surface`: Background color of the trigger button.
- `--tooltip-text`: Text color inside the tooltip.
- `--tooltip-muted`: Color for introductory or muted text.
- `--tooltip-accent`: Primary brand color used for borders, signal nodes, and focus rings.
- `--tooltip-border`: Default border color for the trigger and tooltip.
- `--tooltip-radius`: Border radius applied to elements.
- `--tooltip-shadow`: Elevation shadow for the tooltip bubble.

## Responsive Behavior

- **Desktop (`> 850px`)**: Tooltips are displayed in a spacious 3-column grid layout. Directional classes (`tooltip-top`, `tooltip-bottom`, `tooltip-right`) behave normally.
- **Tablet (`<= 850px`)**: The grid smartly reduces to 2 columns. To prevent the right-aligned tooltip from overflowing the right edge of the viewport, the `tooltip-right` variant elegantly falls back to behave exactly like a `tooltip-bottom` element at this breakpoint.
- **Mobile (`<= 600px`)**: The grid collapses into a single column stack. Tooltip content width is safely constrained using `max-width: min(260px, calc(100vw - 2rem))` to guarantee it never extends beyond small screens.

## Accessibility

- **Semantic HTML**: Interactive triggers use `<button type="button">` instead of un-focusable `<div>` elements.
- **Keyboard Interaction**: Tooltips reliably appear on both `:hover` (mouse users) and `:focus-within` (keyboard users).
- **Focus-Visible**: Custom `:focus-visible` outlines ensure keyboard users always know what element has focus, providing clear, theme-aligned outlines.
- **Contrast**: Both light and dark themes offer sufficient visual contrast, not relying solely on color to denote interaction states.
- **ARIA Tooltip Relationship**: The `aria-describedby` attribute properly associates the descriptive tooltip content with its trigger.

## Reduced Motion

The component includes comprehensive `prefers-reduced-motion: reduce` support. When enabled at the OS level, all animations and transitions are forced to `0.01ms`. This effectively disables the shimmer sweep animation and the sliding reveal effect, causing the tooltip to snap instantly into place for users sensitive to motion.

## Usage

Simply copy the HTML structure into your document and link `style.css`. Adjust the positioning classes (`tooltip-top`, `tooltip-bottom`, `tooltip-right`) on the outer wrapper as needed. Open `demo.html` in any modern browser to see the effect in action.

## Browser Compatibility

This component uses modern web standards supported by all major browsers (Chrome, Firefox, Safari, Edge), including:
- CSS Custom Properties (Variables)
- CSS Grid layout
- CSS Animations and Transitions
- Pseudo-elements (`::before`)
- Linear Gradients and Transforms (`skewX`, `translate`)
- `:focus-visible` and `:focus-within` pseudo-classes
- `@media (prefers-reduced-motion)`
