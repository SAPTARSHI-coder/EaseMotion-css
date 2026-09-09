# Interactive Gradient Tooltip

A pure CSS, fully responsive tooltip component featuring vibrant gradient backgrounds, smooth entry animations, and completely accessible keyboard focus triggers. Built for Issue #79613.

## Features
- **Pure CSS (No JS):** Utilizes the `+` adjacent sibling combinator to trigger visibility changes without any JavaScript event listeners.
- **Vibrant Gradients:** Uses layered linear gradients and color-matched drop-shadows to create a modern aesthetic.
- **Seamless Arrow:** Employs a rotated pseudo-element matching the bottom color of the gradient for a perfectly blended directional arrow.
- **Accessible Interactions:** Triggers on both `:hover` (mouse) and `:focus` / `:focus-visible` (keyboard navigation) ensuring all users can access the tooltip text. Contains proper `aria-describedby` linkage.
- **Responsive Wraps:** Automatically handles long text on mobile devices without breaking viewport width via `max-width` and `white-space` controls.
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the upward slide transition and substituting it with a static instant appearance.

## Folder Structure
- `demo.html` - The standalone showcase featuring multiple tooltip variants.
- `style.css` - The core styling logic and theme variables.
- `README.md` - Documentation.

## HTML Usage

Wrap your trigger (e.g. `<button>`) and the tooltip `<div>` in a relative container. Ensure the trigger immediately precedes the tooltip in the DOM structure.

```html
<div class="ease-tooltip-container">
    <button class="ease-tooltip-trigger" aria-describedby="my-tooltip">
        Hover or Focus Me
    </button>
    
    <div id="my-tooltip" class="ease-tooltip" role="tooltip">
        <span class="ease-tooltip-text">Stunning sunset gradient!</span>
        <div class="ease-tooltip-arrow"></div>
    </div>
</div>
```

## CSS Customization

The component uses scoped CSS variables so you can easily switch themes or build your own gradient pairs.

```css
.ease-tooltip.my-custom-theme {
    --tt-grad-1: #9333ea; /* Top-left gradient color */
    --tt-grad-2: #ec4899; /* Bottom-right gradient color (matches arrow) */
    --tt-shadow: rgba(236, 72, 153, 0.3); /* Ambient glow */
}
```

## Accessibility Checklist
- Used semantic `<button>` elements as the trigger.
- Explicitly styled `:focus-visible` on the button so keyboard users can see where they are navigating.
- Linked the trigger and tooltip using `aria-describedby`.
- Ensured the tooltip is readable via high-contrast white text combined with a subtle `text-shadow`.
