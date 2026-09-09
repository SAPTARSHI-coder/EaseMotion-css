# Dark Mode Variables Override Guide

Welcome to the **Dark Mode Variables Override Guide**! This directory provides design principles, setup patterns, and code instructions for overrides of EaseMotion CSS custom properties (`--ease-*` variables) to enable a seamless dark/light theme experience.

---

## 📋 Table of Contents
1. [Core Design Token System](#1-core-design-token-system)
2. [Automatic System Theme Detection](#2-automatic-system-theme-detection)
3. [Manual User Interface Overrides](#3-manual-user-interface-overrides)
4. [Mitigating Flash of Unstyled Content (FOUC)](#4-mitigating-flash-of-unstyled-content-fouc)
5. [Animation Testing in Dark Environments](#5-animation-testing-in-dark-environments)
6. [Interactive Playground Application](#6-interactive-playground-application)

---

## 1. Core Design Token System

To support dark mode efficiently, avoid hardcoding hex/rgba values directly within CSS declarations. Instead, map all components to a centralized system of CSS Custom Properties (Variables).

Here is the recommended registry of `--ease-*` variables to override:

| Custom Variable | Light Mode Value | Dark Mode Value | Target Elements | Contrast Target |
| :--- | :--- | :--- | :--- | :---: |
| `--ease-bg-base` | `#f9fafb` | `#030712` | Background backdrop | AAA |
| `--ease-bg-surface` | `#ffffff` | `#0b0f19` | Cards, popups, inputs | AAA |
| `--ease-bg-surface-hover` | `#f3f4f6` | `#111827` | Hovered rows/items | AAA |
| `--ease-border-subtle` | `#e5e7eb` | `#1f2937` | Dividers, border borders | AA |
| `--ease-text-primary` | `#111827` | `#f9fafb` | Primary text and headers | AAA |
| `--ease-text-secondary` | `#4b5563` | `#9ca3af` | Secondary/details descriptions | AA |
| `--ease-accent-primary` | `#8b5cf6` | `#a78bfa` | Main CTA buttons, active states | AA |

---

## 2. Automatic System Theme Detection

We can target users' operating system settings directly using the standard media query `prefers-color-scheme`. This operates automatically without any JavaScript overhead.

```css
/* Base default light theme custom properties */
:root {
  --ease-bg-base: #f9fafb;
  --ease-bg-surface: #ffffff;
  --ease-text-primary: #111827;
  --ease-border-subtle: #e5e7eb;
}

/* System-level override mapping */
@media (prefers-color-scheme: dark) {
  :root {
    --ease-bg-base: #030712;
    --ease-bg-surface: #0b0f19;
    --ease-text-primary: #f9fafb;
    --ease-border-subtle: #1f2937;
  }
}
```

---

## 3. Manual User Interface Overrides

While automatic system theme detection is a good starting point, users expect a manual toggle switch in the UI. 

To prevent conflicts, configure your CSS variables to target the custom `data-theme` attribute on the root html node:

```css
/* Manual override values take absolute precedence */
:root[data-theme="dark"] {
  --ease-bg-base: #030712;
  --ease-bg-surface: #0b0f19;
  --ease-text-primary: #f9fafb;
  --ease-border-subtle: #1f2937;
}

:root[data-theme="light"] {
  --ease-bg-base: #f9fafb;
  --ease-bg-surface: #ffffff;
  --ease-text-primary: #111827;
  --ease-border-subtle: #e5e7eb;
}
```

By explicitly specifying both `[data-theme="dark"]` and `[data-theme="light"]`, we can lock the user's chosen preference regardless of their system settings.

### Combining Systems

To respect both the system media settings and manual user selection, combine the rules:

```css
/* 1. Default fallback is light */
:root {
  --ease-bg-base: #f9fafb;
  --ease-text-primary: #111827;
}

/* 2. System dark preference (applied ONLY if no manual theme override is set) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --ease-bg-base: #030712;
    --ease-text-primary: #f9fafb;
  }
}

/* 3. Manual theme locks */
:root[data-theme="dark"] {
  --ease-bg-base: #030712;
  --ease-text-primary: #f9fafb;
}
:root[data-theme="light"] {
  --ease-bg-base: #f9fafb;
  --ease-text-primary: #111827;
}
```

---

## 4. Mitigating Flash of Unstyled Content (FOUC)

A common issue when loading pages with dark mode support is **FOUC**. If the script to check the theme is placed at the end of the `<body>`, the browser initially renders the page in default light mode, then flashes black once the script runs.

### The Solution: Head Inline Blocker

Place a tiny, synchronous blocker script at the very top of your `<head>` tag, before any stylesheet is requested:

```html
<head>
  <script>
    (function() {
      const persistedTheme = localStorage.getItem('ease-theme');
      if (persistedTheme) {
        document.documentElement.setAttribute('data-theme', persistedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      }
    })();
  </script>
  <link rel="stylesheet" href="style.css" />
</head>
```

This prevents the browser from rendering the light mode base if the user preferred dark mode.

---

## 5. Animation Testing in Dark Environments

When changing variables globally, visual artifacts can arise inside pre-defined animations. To guarantee visual excellence across both states:

1. **Contrast Compliance**: Ensure background-accent configurations preserve a minimum contrast of `4.5:1` (WCAG AA) to remain legible to visually impaired users.
2. **Animation Keyframes**: Animations should use custom properties rather than static values to blend correctly. For example:
   ```css
   @keyframes fadeColor {
     from { background-color: var(--ease-bg-surface); }
     to { background-color: var(--ease-bg-surface-hover); }
   }
   ```
3. **Interactive Testing Lab**: The accompanying `demo.html` includes test targets for four main visual animation styles:
   - **Fade In**: Tests opacity blending over deep backgrounds.
   - **Slide In**: Verifies translation offsets on changing viewports.
   - **Bounce In**: Audits spring transformations.
   - **Pulse Loop**: Inspects recurring box-shadow ripples on dark backgrounds.

---

## 6. Interactive Playground Application

The accompanying `demo.html` contains a full live testing workbench.

### Interactive Features:
1. **Dynamic Theme Switcher**: Toggle between light and dark settings manually.
2. **Live Environment Status**: Monitor active properties and detection methods in real-time.
3. **Variables Registry**: View swatches and active values for system-wide custom properties.
4. **Animation Testing Suite**: Click individual action buttons to verify motion styles on dynamic backdrops.
