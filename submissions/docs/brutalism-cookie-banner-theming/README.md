# Brutalism Cookie Consent Banner (Theming Configuration Guide)

This guide documents how to create custom themes for the Brutalism Cookie Consent Banner. The brutalist aesthetic relies on bold, high-contrast colors, harsh shadows, and thick borders. By mapping these properties to CSS variables, we ensure the aesthetic can be adapted to different brand palettes without losing its aggressive edge.

## Theming Architecture

The brutalist look is controlled by several key root variables defining the background, text, borders, and the signature hard shadow.

### Core Variables
- `--brutal-bg`: The main background color of the banner.
- `--brutal-text`: The primary text color.
- `--brutal-border`: The color of the thick, unapologetic borders.
- `--brutal-shadow`: The exact `box-shadow` declaration (x-offset, y-offset, blur, color). Brutalism typically uses a 0px blur to create a solid block shadow.

## Creating Theme Modifiers

To create a new theme, define a modifier class (e.g., `.brutal-theme-cyber`) that overrides the core variables. 

### CSS Example (Cyberpunk Theme)

```css
/* Base Variables (Default Yellow) */
:root {
    --brutal-bg: #facc15; 
    --brutal-text: #000000;
    --brutal-border: #000000;
    --brutal-shadow: 8px 8px 0px #000000; 
}

/* Custom Cyberpunk Theme Modifier */
.brutal-theme-cyber {
    --brutal-bg: #ec4899;          /* Neon Pink */
    --brutal-text: #ffffff;
    --brutal-border: #000000;
    --brutal-shadow: -8px 8px 0px #00f3ff; /* Cyan shadow, thrown to the left */
}
```

### HTML Implementation

Apply the modifier class directly to the root banner container.

```html
<!-- Default Theme -->
<div class="brutal-cookie-banner" role="dialog" aria-labelledby="title" aria-describedby="desc">
    ...
</div>

<!-- Custom Cyberpunk Theme -->
<div class="brutal-cookie-banner brutal-theme-cyber" role="dialog" aria-labelledby="title" aria-describedby="desc">
    ...
</div>
```

## Theming & Accessibility

Brutalism naturally lends itself to high accessibility because of its emphasis on high contrast and distinct shapes. However, when theming:

1. **Verify Contrast**: Ensure the `--brutal-text` color has at least a 4.5:1 contrast ratio against the `--brutal-bg`.
2. **Focus Visibility**: You must theme the `--focus-ring` variable to ensure keyboard users can see which button is focused. The focus ring color must contrast sharply against both the button background and the banner background.
   ```css
   .brutal-btn:focus-visible {
       outline: 4px solid var(--focus-ring);
       outline-offset: 4px;
   }
   ```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
