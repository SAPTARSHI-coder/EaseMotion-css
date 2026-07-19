# Animated Color Theme Switcher using CSS Variables

## What does this do?
A theme switcher component that toggles between light, dark, and custom
color themes by swapping CSS custom properties on the root element. All
themed properties (backgrounds, borders, text, accents) transition
smoothly when switching. Includes a toggle button with animated sun/moon
icons.

## How is it used?

```html
<body class="ease-theme-surface">

  <button class="ease-theme-toggle" id="themeToggle">
    <span class="ease-theme-icon-light">☀️</span>
    <span class="ease-theme-icon-dark">🌙</span>
  </button>

  <div class="ease-theme-card">
    <h2>Themed Content</h2>
  </div>

  <script>
    const root = document.documentElement;
    function setTheme(theme) {
      if (theme === 'light') {
        root.removeAttribute('data-ease-theme');
      } else {
        root.setAttribute('data-ease-theme', theme);
      }
    }
    document.getElementById('themeToggle').addEventListener('click', () => {
      const isDark = root.getAttribute('data-ease-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  </script>
</body>
```

Available themes: default (light), `dark`, `ocean` — set via
`data-ease-theme` attribute on `<html>`.

## Why is it useful?
Dark mode is a planned v1.1 feature. This component demonstrates how
EaseMotion CSS variables can be used for theming — swapping a single
data attribute updates an entire palette with smooth CSS transitions
on every themed property. Minimal JS toggles the attribute; all color
and transition logic is pure CSS, with prefers-reduced-motion support.