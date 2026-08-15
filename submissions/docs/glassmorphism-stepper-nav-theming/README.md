# Glassmorphism Stepper Nav (Theming Configuration Guide)

This guide details how to customize and theme the Glassmorphism Stepper Nav. By utilizing CSS Custom Properties, you can easily shift between different glass aesthetics (like switching from a light frosted glass to a dark obsidian glass) without rewriting the core component logic.

## Theming Configuration via CSS Variables

The aesthetic of the glass relies heavily on the `background`, `border`, and `backdrop-filter: blur()` properties. To create a new theme, redefine these specific variables under a new CSS modifier class.

### Required Variables
- `--glass-bg`: The semi-transparent background color of the main container and the steps.
- `--glass-border`: The subtle highlight color simulating the edge of the glass.
- `--glass-blur`: The intensity of the blur effect.
- `--step-active`: The color representing the current step.
- `--focus-ring`: The color of the high-contrast accessibility focus ring.

### CSS Implementation (Dark Obsidian Theme Example)

```css
/* Base variables apply the default Light Frosted Glass theme */
:root {
    --glass-bg: rgba(255, 255, 255, 0.15);
    --glass-border: rgba(255, 255, 255, 0.3);
    --glass-blur: 12px;
    --step-active: #3b82f6;
    --focus-ring: #fbbf24;
}

/* Dark Obsidian Theme Modifier */
.glass-stepper--dark {
    --glass-bg: rgba(0, 0, 0, 0.4);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-blur: 20px; /* Stronger blur often looks better on dark glass */
    --step-active: #8b5cf6; /* Shift the active color to match the darker aesthetic */
    --focus-ring: #ffffff; /* White focus ring for high contrast */
}
```

## HTML Markup Example

To apply your custom theme, add the modifier class to the root `<nav>` element:

```html
<nav aria-label="Checkout Progress" class="glass-stepper glass-stepper--dark">
    <ol class="stepper-list">
        <!-- Steps configuration remains unchanged -->
        <li class="stepper-item is-active">
            <a href="#payment" class="stepper-link" aria-current="step">
                <span class="stepper-circle" aria-hidden="true">2</span>
                <span class="stepper-label">Payment</span>
            </a>
        </li>
    </ol>
</nav>
```

## Accessibility Requirements for Theming

Glassmorphism inherently introduces contrast challenges due to its transparency. When building new themes, adhere strictly to these guidelines:

1. **Test Against Real Backgrounds**: Ensure your `--glass-bg` opacity provides enough contrast for text to be readable over whatever gradient or image sits *behind* the component.
2. **Focus Visibility**: The `--focus-ring` must contrast sharply against the glass background and the underlying page background. Do not rely on subtle drop shadows; use a solid, distinct outline:
   ```css
   .stepper-link:focus-visible .stepper-circle {
       outline: 3px solid var(--focus-ring);
       outline-offset: 4px;
   }
   ```
3. **Keep `aria-current`**: Theming should never alter the semantic structure. Ensure the active step always retains `aria-current="step"`.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
