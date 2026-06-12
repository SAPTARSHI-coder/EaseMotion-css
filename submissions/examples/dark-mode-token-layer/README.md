# Dark Mode Token Layer

## What does this do?

Adds a reusable CSS custom property layer for light and dark themes with both automatic system preference support and manual `data-theme` overrides.

## How is it used?

Use the default token layer for system preference-based theming:

```html
<section class="theme-preview">
  <div class="theme-card">
    <h2>System Theme</h2>
    <p>This follows the user's device preference.</p>
  </div>
</section>
```

Use manual light mode by applying `data-theme="light"`:

```html
<section class="theme-preview" data-theme="light">
  <div class="theme-card">
    <h2>Manual Light Theme</h2>
    <p>This section always uses light theme tokens.</p>
  </div>
</section>
```

Use manual dark mode by applying `data-theme="dark"`:

```html
<section class="theme-preview" data-theme="dark">
  <div class="theme-card">
    <h2>Manual Dark Theme</h2>
    <p>This section always uses dark theme tokens.</p>
  </div>
</section>
```

## Why is it useful?

This fits EaseMotion CSS because it keeps theming readable, composable, dependency-free, and easy to reuse across cards, buttons, surfaces, borders, text, hover states, and focus states.

## Features

- Uses CSS custom properties for reusable design tokens
- Supports automatic dark mode through `prefers-color-scheme`
- Supports manual overrides with `data-theme="light"` and `data-theme="dark"`
- Keeps backgrounds, text, borders, buttons, hover states, and focus states theme-safe
- Provides accessible contrast between foreground and background colors
- Requires no build step and no external dependency

## Tech Stack

- HTML
- CSS only
- No external frameworks
- No build tools

## Preview

Open `demo.html` directly in the browser to preview:

1. System preference-based theme
2. Manual light theme
3. Manual dark theme
4. Reusable token swatches

## Contribution Notes

- This submission only adds files inside `submissions/examples/dark-mode-token-layer/`
- No changes are made to `core/`, `components/`, `docs/`, or root examples
- Class names are intentionally simple and readable; the maintainer can standardize naming later
