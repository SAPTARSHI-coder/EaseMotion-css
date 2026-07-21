# Glass Search Bar

## What does this do?
This submission adds a premium glassmorphism search bar that feels at home in spotlight-style command surfaces, documentation portals, and dashboard experiences while staying lightweight and CSS-only.

## How is it used?
Apply the component classes directly to a form or wrapper element:

```html
<form class="ease-glass-search ease-glass-search-pill" role="search">
  <span class="ease-glass-search-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  </span>
  <label class="sr-only" for="search-demo">Search</label>
  <input class="ease-glass-search-input" id="search-demo" type="search" placeholder="Search anything…" />
  <span class="ease-glass-search-shortcut">⌘K</span>
</form>
```

## Why is it useful?
It fits EaseMotion CSS's animation-first philosophy by combining frosted visuals, smooth hover and focus motion, and a composable structure that can be reused across product surfaces without JavaScript.

## Features
- Frosted glass appearance with backdrop blur
- Search icon, shortcut badge, and optional action button
- Smooth hover and focus transitions with hardware acceleration
- Responsive sizing for compact, large, and pill-shaped variations
- CSS variables for quick visual customization

## Available classes
- `ease-glass-search`
- `ease-glass-search-input`
- `ease-glass-search-icon`
- `ease-glass-search-shortcut`
- `ease-glass-search-action`

## Variants
- `ease-glass-search-dark`
- `ease-glass-search-light`
- `ease-glass-search-pill`
- `ease-glass-search-large`
- `ease-glass-search-compact`

## CSS variable customization
The component is driven by these variables:

```css
:root {
  --ease-search-bg: rgba(255, 255, 255, 0.72);
  --ease-search-border: rgba(255, 255, 255, 0.65);
  --ease-search-blur: 24px;
  --ease-search-radius: 1.25rem;
  --ease-search-shadow: 0 20px 45px rgba(15, 23, 42, 0.14);
  --ease-search-padding: 0.95rem 1.1rem;
  --ease-search-transition: 220ms cubic-bezier(0.22, 1, 0.36, 1);
  --ease-search-focus: rgba(99, 102, 241, 0.26);
  --ease-search-text: #0f172a;
  --ease-search-placeholder: rgba(15, 23, 42, 0.56);
}
```

## Browser compatibility
The component uses `backdrop-filter` when available and gracefully falls back to a solid translucent surface in browsers that do not support it.

## Accessibility considerations
- Focus states remain visible and keyboard-friendly.
- High-contrast text and contrast-friendly defaults are included.
- Reduced-motion preferences are respected.
- The demo uses an accessible label pattern with visually hidden text for screen readers.
