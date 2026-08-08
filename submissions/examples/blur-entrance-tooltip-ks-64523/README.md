# CSS Blur-Entrance Tooltip

A highly polished, pure CSS tooltip component featuring a sophisticated blur-to-focus entrance animation, designed specifically for minimalist technology interfaces.

## Feature Overview

This component provides a lightweight, fully accessible tooltip system requiring zero JavaScript. By combining CSS filters (`blur()`), transforms, and `@keyframes` animations, the tooltip smoothly comes into focus when triggered, creating a premium depth-of-field effect.

## Blur-Entrance Behavior

- **Hidden State**: The tooltip content is hidden (`opacity: 0`, `visibility: hidden`), intentionally blurred (`filter: blur(8px)`), and slightly offset downwards.
- **Hover/Focus Reveal**: When the user hovers over or focuses the trigger button, the tooltip smoothly fades in.
- **Entrance Animation**: A targeted `@keyframes` animation rapidly interpolates the blur value from `8px` to `0` while sliding the tooltip into its final resting position. This mimics an optical lens bringing the element into sharp focus.
- **Exit Transition**: When the cursor leaves, a standard CSS `transition` smoothly returns the tooltip to its blurred, hidden state.

## Tooltip Structure

```html
<div class="tooltip tooltip-top">
    <!-- Interactive Trigger -->
    <button class="tooltip-trigger" type="button" aria-describedby="tooltip-example">
        Core
        <div class="tooltip-icon" aria-hidden="true"><div class="icon-node"></div></div>
    </button>
    
    <!-- Tooltip content -->
    <span class="tooltip-content" id="tooltip-example" role="tooltip">
        Core system is operational
    </span>
</div>
```

- **`aria-describedby`**: The semantic `<button>` trigger uses `aria-describedby` to reference the `id` of the tooltip content. Screen readers will read the tooltip text when the button receives focus.
- **`role="tooltip"`**: The content container is explicitly marked with `role="tooltip"`.
- **Decorative Icons**: Pure CSS decorative icons within the trigger are hidden from assistive technology using `aria-hidden="true"`.

## Features

- Pure HTML and CSS (Zero JavaScript)
- Three directional variants (Top, Bottom, Right)
- Sophisticated `@keyframes` Blur-Entrance effect (`filter: blur()`)
- Glassmorphism backing (`backdrop-filter: blur()`)
- Smooth CSS exit transitions
- Fully responsive layout across desktop, tablet, and mobile
- Custom CSS-only decorative signal icons
- Highly customizable via CSS custom properties
- 100% Keyboard accessible (`:focus-within`)
- Distinctive `:focus-visible` offset outlines
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

- **Desktop (`> 850px`)**: Tooltips are displayed in a spacious 3-column grid layout. Directional classes (`tooltip-top`, `tooltip-bottom`, `tooltip-right`) perform their respective offsets.
- **Tablet (`<= 850px`)**: The grid smartly reduces to 2 columns. To prevent the right-aligned tooltip from overflowing the viewport edge, the `tooltip-right` variant intelligently overrides its animation to behave identically to a `tooltip-bottom` element.
- **Mobile (`<= 600px`)**: The grid collapses into a single column stack. Tooltip content width is safely constrained using `max-width: min(260px, calc(100vw - 2rem))` to guarantee it never extends beyond narrow screens.

## Accessibility

- **Semantic HTML**: Interactive triggers use `<button type="button">` exclusively.
- **Keyboard Interaction**: Tooltips reliably appear on both `:hover` (mouse users) and `:focus-within` (keyboard users).
- **Focus-Visible**: Custom `:focus-visible` outlines ensure keyboard users always know what element has focus, providing clear, theme-aligned outlines that bypass default browser rings.
- **Contrast**: Both light and dark themes offer sufficient visual contrast.
- **ARIA Tooltip Relationship**: The `aria-describedby` attribute properly associates the descriptive tooltip content with its trigger.

## Reduced Motion

The component includes comprehensive `prefers-reduced-motion: reduce` support. When enabled at the OS level, all animations and transitions are forced to `0.01ms`. Furthermore, the `filter` property is forcibly set to `none !important`. This completely disables the blur animation and sliding reveal effect, causing the tooltip to snap instantly and clearly into place for users sensitive to motion.

## Usage

Simply copy the HTML structure into your document and link `style.css`. Adjust the positioning classes (`tooltip-top`, `tooltip-bottom`, `tooltip-right`) on the outer wrapper as needed. Open `demo.html` in any modern browser to see the effect in action.

## Browser Compatibility

This component uses modern web standards supported by all major browsers (Chrome, Firefox, Safari, Edge), including:
- CSS Custom Properties (Variables)
- CSS Grid layout
- CSS Animations and Transitions
- `filter: blur()` and `backdrop-filter: blur()`
- `:focus-visible` and `:focus-within` pseudo-classes
- `@media (prefers-reduced-motion)`
