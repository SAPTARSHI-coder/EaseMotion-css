# Glowing Search Bar (Accessibility Setup Guide)

This guide details the strict accessibility guidelines required when implementing the Glowing Search Bar. Search inputs are among the most frequently used components on a website, so their markup and focus states must be flawless.

## 1. Semantic HTML Form Structure

A search input should never exist in isolation. It must be wrapped in a `<form>` to allow native submit behavior (e.g., pressing `Enter`), and the form must be marked with the `search` ARIA role.

Furthermore, **placeholders are not labels**. Every input must have a `<label>`. If the design dictates that no visual label should exist, you must use a visually hidden `sr-only` class.

### Correct Markup Example

```html
<!-- Wrapper form with role="search" -->
<form action="/search" role="search" class="search-form">
    
    <!-- Visually hidden, but screen-reader accessible label -->
    <label for="global-search" class="sr-only">Search the site</label>
    
    <div class="search-wrapper">
        <!-- Must use type="search" to trigger search-specific mobile keyboards -->
        <input 
            type="search" 
            id="global-search" 
            class="glowing-search" 
            placeholder="Search..."
        >
        
        <!-- Submit button must have an accessible name if it relies on an icon -->
        <button type="submit" class="search-btn" aria-label="Submit search">
            <svg>...</svg>
        </button>
    </div>
</form>
```

### The `sr-only` Utility Class

Never use `display: none` to hide labels, as this hides them from screen readers too.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

## 2. Keyboard Focus Visibility

The defining feature of this component is the glowing `box-shadow` applied on `:focus`.

**The Accessibility Problem**: Soft glowing shadows often fail WCAG contrast ratio requirements, making it difficult for keyboard users (especially those with visual impairments) to determine if the input is actively focused.

**The Solution**: While mouse users clicking into the input can trigger the soft glow (`:focus`), keyboard navigators pressing `Tab` must receive a sharp, high-contrast outline (`:focus-visible`).

```css
/* Mouse/Touch interaction: Provide the aesthetic soft glow */
.glowing-search:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
}

/* Keyboard interaction: Ensure a high-contrast hard outline */
.glowing-search:focus-visible {
    outline: 3px solid #ffffff; /* White against dark bg guarantees contrast */
    outline-offset: 2px;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
