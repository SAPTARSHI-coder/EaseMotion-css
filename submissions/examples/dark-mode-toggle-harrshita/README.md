# Dark Mode Toggle

A CSS variable-powered dark mode toggle system with smooth transitions
for EaseMotion CSS. Switching the toggle updates `data-theme` on `<html>`
and all CSS variables transition simultaneously.

## Usage

```html
<!-- 1. Add data-theme to html element -->
<html data-theme="light">

<!-- 2. Link stylesheet -->
<link rel="stylesheet" href="style.css" />

<!-- 3. Add toggle button -->
<button class="ease-theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
  <span class="ease-theme-toggle__track">
    <span class="ease-theme-toggle__thumb">
      <span class="ease-theme-toggle__sun">&#9728;</span>
      <span class="ease-theme-toggle__moon">&#9790;</span>
    </span>
  </span>
</button>

<!-- 4. Add toggle script -->
<script>
  const btn  = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('ease-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  html.dataset.theme = saved;
  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('ease-theme', next);
  });
</script>
```

## CSS Variables

| Variable | Light | Dark | Description |
|----------|-------|------|-------------|
| `--ease-theme-bg` | `#f4f3ff` | `#0f0f1a` | Page background |
| `--ease-theme-surface` | `#ffffff` | `#1a1a2e` | Card/panel background |
| `--ease-theme-text` | `#2d2d44` | `#e0e0ff` | Primary text |
| `--ease-theme-muted` | `#888` | `#9090aa` | Secondary text |
| `--ease-theme-border` | `#ddd` | `#2e2e48` | Border color |
| `--ease-theme-accent` | `#6c63ff` | `#9d97ff` | Accent/brand color |
| `--ease-theme-accent2` | `#ede9ff` | `#1e1e38` | Light accent background |
| `--ease-theme-input` | `#ffffff` | `#13131f` | Input background |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-theme-toggle` | Toggle button wrapper |
| `.ease-theme-toggle__track` | Pill-shaped track |
| `.ease-theme-toggle__thumb` | Moving circle thumb |
| `.ease-theme-toggle__sun` | Sun icon (light mode) |
| `.ease-theme-toggle__moon` | Moon icon (dark mode) |

## Features

- Smooth 350ms transitions on all color properties
- LocalStorage persistence across page reloads
- Respects system `prefers-color-scheme` as default
- Accessible: `aria-label` and `aria-pressed` on button
- Transitions disabled via `prefers-reduced-motion`

Closes #67724
