# ease-theme-switcher — Dark Mode Theme Toggle Component

## What does this do?

Provides a theme toggle switch component that lets users switch between light and dark modes. The toggle persists the user's preference in `localStorage`, respects the system's `prefers-color-scheme` setting on first visit, and animates smoothly between sun and moon icons.

## How is it used?

**Basic usage in HTML:**

```html
<!-- Include the CSS and JS -->
<link rel="stylesheet" href="style.css" />
<script src="theme-switcher.js" defer></script>

<!-- Place the toggle anywhere in your layout -->
<button class="ease-theme-switcher" aria-label="Toggle theme">
  <span class="ease-theme-icon">
    <svg
      class="ease-sun-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      />
    </svg>
    <svg
      class="ease-moon-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </span>
</button>
```

**With JavaScript (auto-initializes when loaded):**

```html
<script src="theme-switcher.js"></script>
```

The script automatically:

- Reads `localStorage` for a saved theme
- Falls back to `prefers-color-scheme` if no saved preference
- Adds `data-theme="dark"` to `<html>` when dark mode is active
- Toggles on click
- Saves preference to `localStorage`

## Variants

| Modifier                  | Effect                                       |
| ------------------------- | -------------------------------------------- |
| (none)                    | Default toggle with sun/moon SVG icons       |
| `.ease-theme-switcher-sm` | Smaller toggle (32px) for compact layouts    |
| `.ease-theme-switcher-lg` | Larger toggle (48px) for prominent placement |

## CSS Custom Properties

| Property                      | Default                         | Description                           |
| ----------------------------- | ------------------------------- | ------------------------------------- |
| `--ease-theme-switcher-size`  | `40px`                          | Width and height of the toggle button |
| `--ease-theme-switcher-bg`    | `var(--ease-color-neutral-100)` | Background color                      |
| `--ease-theme-switcher-color` | `var(--ease-color-text)`        | Icon color                            |

## Why is it useful?

Dark mode is a standard expectation in modern web applications. This component provides a complete, accessible, and persistent dark mode toggle that integrates with EaseMotion's existing `data-theme` CSS variable system.

## Features

- Sun/moon icon transition with smooth rotation animation
- Persists user preference in `localStorage`
- Respects `prefers-color-scheme` on first visit
- No external dependencies — pure CSS + vanilla JS
- Accessible with proper `aria-label` and keyboard support
- Two size variants (sm, lg)
- Fully customizable via CSS custom properties
- Works with existing `[data-theme="dark"]` variables in EaseMotion CSS
- Respects `prefers-reduced-motion`
