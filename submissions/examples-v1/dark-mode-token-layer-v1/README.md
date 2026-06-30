# Dark Mode Token Layer

## What does it do?

Adds a robust dark mode token layer using CSS custom properties.
Developers can toggle dark mode via `data-theme="dark"` on the
`<html>` element — no JavaScript framework required.

## How is it used?

```html
<!-- Activate dark mode -->
<html data-theme="dark">
  <!-- Toggle with JS -->
  <button
    onclick="
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
"
  >
    Toggle Theme
  </button>
</html>
```

## CSS Tokens

| Token                  | Light     | Dark      |
| ---------------------- | --------- | --------- |
| `--ease-color-bg`      | `#f8fafc` | `#0f172a` |
| `--ease-color-surface` | `#ffffff` | `#1e293b` |
| `--ease-color-text`    | `#0f172a` | `#f8fafc` |
| `--ease-color-muted`   | `#64748b` | `#94a3b8` |
| `--ease-color-border`  | `#e2e8f0` | `#334155` |
| `--ease-color-primary` | `#6c63ff` | `#818cf8` |

## Features

- Manual toggle via `data-theme` attribute
- System preference fallback via `prefers-color-scheme`
- Smooth transitions between themes
- Works alongside all existing EaseMotion classes

## Tech Stack

- CSS only for theming, minimal JS for toggle button

## Preview

Open `demo.html` directly in browser.
