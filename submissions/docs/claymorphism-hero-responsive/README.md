# Claymorphism Hero Banner (Responsive Breakpoints Guide)

This guide details how to build a fully responsive Hero Banner Section utilizing the Claymorphism design trend. Claymorphism relies heavily on soft, inflated aesthetics created through multiple CSS inset shadows. Because these shadows have deep offsets, scaling the component down for mobile devices without breaking the visual hierarchy requires a systemic approach using CSS variables.

## Responsive Flexbox Architecture

Hero sections typically display content side-by-side on desktop, and stacked on mobile. We handle this layout shift smoothly by binding the flex properties to CSS variables at different media queries.

```css
:root {
    /* Mobile-first: Elements stack vertically and text aligns center */
    --hero-direction: column;
    --hero-align: center;
    --hero-text-align: center;
    --title-size: 2.25rem;
}

@media (min-width: 768px) {
    :root {
        /* Desktop: Elements sit side-by-side, text aligns left */
        --hero-direction: row;
        --hero-align: flex-start;
        --hero-text-align: left;
        --title-size: 3.5rem;
    }
}
```

By applying these variables to a container, the layout shifts effortlessly across breakpoints:

```css
.hero-section {
    display: flex;
    flex-direction: var(--hero-direction);
}
.hero-content {
    align-items: var(--hero-align);
    text-align: var(--hero-text-align);
}
```

## Scaling Claymorphism Effects

The defining feature of a "clay" element is its combination of an outer drop shadow (for elevation) and dual inner shadows (one light for highlighting, one dark for depth). 

On mobile devices, a 24px inner shadow offset can overwhelm a small button, making it look broken. Therefore, the padding and border-radius of clay elements should scale alongside typography.

```css
:root {
    /* Mobile: Tighter padding and slightly smaller radius */
    --clay-padding: 1rem 2rem;
    --clay-radius: 20px;
}

@media (min-width: 768px) {
    :root {
        /* Desktop: Generous padding for the inflated look */
        --clay-padding: 1.25rem 2.5rem;
        --clay-radius: 24px;
    }
}

.clay-btn {
    padding: var(--clay-padding);
    border-radius: var(--clay-radius);
    
    /* 
      The core clay effect:
      1. Outer elevation
      2. Dark depth (bottom right)
      3. Light highlight (top left)
    */
    box-shadow: 
        8px 8px 16px rgba(163, 177, 198, 0.4),
        inset -4px -4px 8px rgba(163, 177, 198, 0.2),
        inset 4px 4px 8px rgba(255, 255, 255, 0.9);
}
```

By scaling the container spacing and the button dimensions via variables, the complex claymorphic shadows maintain their intended visual proportion regardless of screen size.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
