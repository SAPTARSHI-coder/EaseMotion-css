# Glowing Search Bar Input (Quickstart Guide)

This guide documents the implementation of a visually striking, neon-glowing search bar designed for modern, dark-mode focused interfaces.

## 1. HTML Markup

A functional search input requires proper HTML structure. It must be wrapped in a `<form>` and properly labeled. If a visual label disrupts the design, use a visually hidden `sr-only` class.

```html
<form action="/search" role="search" class="search-form">
    
    <!-- Visually hidden label -->
    <label for="global-search" class="sr-only">Search</label>
    
    <div class="search-wrapper">
        <!-- The Glowing Input -->
        <input 
            type="search" 
            id="global-search" 
            class="glowing-search" 
            placeholder="Search..."
        >
        <!-- The Submit Button -->
        <button type="submit" class="search-btn" aria-label="Submit search">
            <svg>...</svg>
        </button>
    </div>
</form>
```

## 2. The Glow Effect (CSS)

The core visual appeal of this component relies on a combination of `border-color` shifts, `box-shadow` spreading, and a slight background color bump when the input receives focus.

By defining these values as CSS variables at the `:root`, the component is primed for easy theming in the future.

```css
:root {
    --glow-color: #38bdf8;
    --glow-shadow: rgba(56, 189, 248, 0.5);
    --glow-spread: 15px;
}

.glowing-search {
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

/* The magic happens on focus */
.glowing-search:focus {
    border-color: var(--glow-color);
    box-shadow: 0 0 var(--glow-spread) var(--glow-shadow);
    background: rgba(255, 255, 255, 0.1);
}
```

## 3. Keyboard Navigation & Accessibility

A soft glowing `box-shadow` is aesthetically pleasing, but it **fails WCAG contrast ratio requirements** as a focus indicator. 

To ensure the component remains accessible to keyboard users (who navigate via the `Tab` key), you must declare a separate, high-contrast outline using the `:focus-visible` pseudo-class.

```css
:root {
    --focus-ring: #ffffff; /* High contrast against dark backgrounds */
}

/* Applies ONLY when navigating via keyboard */
.glowing-search:focus-visible,
.search-btn:focus-visible {
    outline: 3px solid var(--focus-ring);
    outline-offset: 2px;
}
```

By separating `:focus` (which applies to mouse clicks) and `:focus-visible` (which applies to keyboard navigation), you preserve the premium aesthetic for mouse users while providing a strictly compliant experience for keyboard users.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
