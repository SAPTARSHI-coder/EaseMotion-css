# Claymorphism Hero Banner (Theming Configuration Guide)

This guide explains how to build a robust theming system for Claymorphism components. Claymorphism is uniquely challenging to theme because a single element's visual state relies on multiple, precisely tuned `box-shadow` layers (an outer drop shadow for elevation, and two inner shadows for 3D highlights and depth). 

If you hardcode these hex colors into your CSS classes, changing the theme requires recalculating and overriding dozens of shadow properties. The solution is CSS Custom Properties (variables).

## Theming Architecture

Instead of writing specific shadow colors in your component CSS, map the required colors to root variables. 

A complete Claymorphic theme requires 4 distinct color variables for the component itself:
1. `--clay-bg`: The base background color of the element.
2. `--clay-shadow-outer`: The color of the drop shadow.
3. `--clay-shadow-inner-dark`: The color of the depth shadow (bottom/right inset).
4. `--clay-shadow-inner-light`: The color of the highlight shadow (top/left inset).

### Step 1: Define Theme Modifier Classes

Create CSS classes that act as color palettes. When one of these classes is applied to a parent container (like the `.hero-section`), all child elements will inherit these variable values.

```css
/* Light / Pastel Theme */
.theme-blue {
    --clay-bg: #bae6fd;
    --clay-shadow-outer: rgba(2, 132, 199, 0.2);
    --clay-shadow-inner-dark: rgba(2, 132, 199, 0.3);
    --clay-shadow-inner-light: rgba(255, 255, 255, 0.8);
    
    --focus-ring: #0284c7;
}

/* Dark Theme */
.theme-dark {
    --clay-bg: #334155;
    /* Dark mode requires pure black for shadows, and subtle whites for highlights */
    --clay-shadow-outer: rgba(0, 0, 0, 0.5);
    --clay-shadow-inner-dark: rgba(0, 0, 0, 0.6);
    --clay-shadow-inner-light: rgba(255, 255, 255, 0.1);
    
    --focus-ring: #a5b4fc;
}
```

### Step 2: Apply Variables to the Component

Construct the complex `box-shadow` using the variables. 

```css
.clay-card, .clay-btn {
    background-color: var(--clay-bg);
    
    box-shadow: 
        8px 8px 16px var(--clay-shadow-outer),
        inset -4px -4px 8px var(--clay-shadow-inner-dark),
        inset 4px 4px 8px var(--clay-shadow-inner-light);
}

/* Accessibility */
.clay-btn:focus-visible {
    outline: 3px solid var(--focus-ring);
    outline-offset: 4px;
}
```

## How to Switch Themes

To change the theme of the entire Hero Banner (and all the clay objects within it), simply swap the modifier class on the parent element via JavaScript or your backend templating engine.

```html
<!-- The entire section, including cards and buttons, is now blue -->
<header class="hero-section theme-blue">
    <div class="clay-card">...</div>
    <button class="clay-btn">...</button>
</header>
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
