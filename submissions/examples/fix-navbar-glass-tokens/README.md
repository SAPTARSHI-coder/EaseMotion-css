# Fix: Navbar Glass Tokens

## Problem

`components/navbar.css` hardcoded rgba color values for the glass navbar background and border:

```css
.ease-navbar-glass {
  background: rgba(255, 255, 255, 0.18);         /* hardcoded */
  border: 1px solid rgba(255, 255, 255, 0.24);   /* hardcoded */
}
```

`variables.css` already defines `--ease-glass-bg` and `--ease-glass-border` tokens that automatically adapt to dark mode via `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`. By hardcoding the rgba values, the glass navbar always used light-mode transparency — it did not adapt to dark mode and could not be themed via CSS custom properties.

## Solution

Replace hardcoded rgba values with the design token variables:

```css
.ease-navbar-glass {
  background: var(--ease-glass-bg, rgba(255, 255, 255, 0.18));
  border: 1px solid var(--ease-glass-border, rgba(255, 255, 255, 0.24));
}
```

## Usage

No class changes needed — existing `.ease-navbar-glass` usage is unaffected:

```html
<nav class="ease-navbar-glass">
  <span>Brand</span>
  <div>Nav links</div>
</nav>
```

To customise the glass effect, override the token:

```css
:root {
  --ease-glass-bg: rgba(0, 0, 0, 0.2);
  --ease-glass-border: rgba(255, 255, 255, 0.1);
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses design tokens as the single source of truth for all visual values. Components should consume tokens rather than hardcoding values so theme overrides and dark mode work automatically.

Fixes #10239
