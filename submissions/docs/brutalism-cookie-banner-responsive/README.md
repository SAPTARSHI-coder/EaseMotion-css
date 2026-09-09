# Brutalism Cookie Consent Banner (Responsive Breakpoints Guide)

This guide explains how to properly scale the Brutalism Cookie Consent Banner across different screen sizes. Brutalist design features—such as massive fonts and thick, hard block shadows—pose unique responsive challenges. If a `12px` solid black box-shadow is rendered on a small mobile device, it can easily cause horizontal overflow and break the viewport.

## Responsive Architecture via CSS Variables

To prevent layout breakage while maintaining the brutalist aesthetic, we scale the padding, font sizes, button widths, and the shadow offsets using root-level CSS custom properties mapped to media queries.

```css
:root {
    /* Mobile First: Smaller shadows, full-width buttons */
    --brutal-padding: 1.5rem;
    --brutal-shadow-offset: 4px;
    --title-size: 1.25rem;
    --btn-padding: 0.75rem 1rem;
    --btn-width: 100%;
}

/* Tablet Breakpoint */
@media (min-width: 768px) {
    :root {
        --brutal-padding: 2rem;
        --brutal-shadow-offset: 8px; /* Shadow grows */
        --title-size: 1.5rem;
        --btn-padding: 1rem 1.5rem;
        --btn-width: auto; /* Buttons return to inline flow */
    }
}

/* Desktop Breakpoint */
@media (min-width: 1024px) {
    :root {
        --brutal-shadow-offset: 12px; /* Maximum brutalist impact */
        --title-size: 1.75rem;
        --btn-padding: 1rem 2rem;
    }
}
```

## HTML Layout Strategy (Flexbox)

The HTML is structured with Flexbox, allowing the text content and the action buttons to stack gracefully on mobile and sit side-by-side on desktop.

```html
<div class="brutal-cookie-banner">
    <!-- flex: 1 1 300px; Allows text to wrap or take full width -->
    <div class="brutal-content">
        <h2>WE USE COOKIES</h2>
        <p>...</p>
    </div>
    
    <!-- flex-wrap: wrap; Combined with --btn-width: 100% on mobile -->
    <div class="brutal-actions">
        <button class="brutal-btn">ACCEPT ALL</button>
        <button class="brutal-btn">REJECT</button>
    </div>
</div>
```

### Implementing the Variables

By applying the variables directly to the core classes, the component automatically adjusts its proportions at every breakpoint without needing to rewrite complex CSS rules.

```css
.brutal-cookie-banner {
    padding: var(--brutal-padding);
    /* The shadow X and Y offsets scale dynamically */
    box-shadow: var(--brutal-shadow-offset) var(--brutal-shadow-offset) 0px var(--brutal-border);
}

.brutal-heading {
    font-size: var(--title-size);
}

.brutal-btn {
    padding: var(--btn-padding);
    width: var(--btn-width); /* Forces block stacking on mobile, inline on desktop */
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
