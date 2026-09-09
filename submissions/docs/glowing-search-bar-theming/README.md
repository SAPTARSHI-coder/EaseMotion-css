# Glowing Search Bar (Theming Configuration Guide)

This guide explains how to customize the visual aesthetics of the Glowing Search Bar using CSS Custom Properties (variables). By surfacing the glow properties as variables, you can create limitless color variations without touching the core structural CSS.

## Theming Architecture

The glowing effect relies on mapping the border color and the `box-shadow` values to CSS variables. 

### Core Variables
- `--glow-color`: The solid color of the border when focused.
- `--glow-shadow`: The rgba() value of the box-shadow (usually a semi-transparent version of the glow color).
- `--glow-spread`: How far the glow extends (in pixels).
- `--focus-ring`: The high-contrast color used for the `:focus-visible` outline required for accessibility.

## Creating a Theme Modifier

To create a new theme, simply define a new modifier class (e.g., `.search-theme-cyber`) and redefine the core variables.

### CSS Example

```css
/* Base Variables (Default Neon Blue) */
:root {
    --glow-color: #38bdf8;
    --glow-shadow: rgba(56, 189, 248, 0.5);
    --glow-spread: 15px;
    --focus-ring: #ffffff;
}

/* Custom Theme Modifier (Cyber Green/Pink) */
.search-theme-cyber {
    --glow-color: #10b981;          /* Green Border */
    --glow-shadow: rgba(16, 185, 129, 0.6); /* Green Glow */
    --glow-spread: 20px;            /* Wider Glow */
    --focus-ring: #ec4899;          /* Pink Focus Ring */
}
```

### HTML Implementation

Apply the modifier class to the parent wrapper or the `<form>` element containing the search input.

```html
<form action="#" role="search" class="search-form search-theme-cyber">
    <label for="search-cyber" class="sr-only">Cyber Search</label>
    <div class="search-wrapper">
        <input type="search" id="search-cyber" class="glowing-search" placeholder="Enter query...">
        <!-- Button icon will inherit hover states based on the variables -->
        <button type="submit" class="search-btn">
            <svg>...</svg>
        </button>
    </div>
</form>
```

## Theming & Accessibility

When creating new themes, you must ensure that your `--focus-ring` variable retains high contrast against the page background. Do not assume the `--glow-color` will be sufficient for keyboard navigation visibility. If your theme uses a dark background, a bright white or neon pink focus ring is recommended over a subtle shadow.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
