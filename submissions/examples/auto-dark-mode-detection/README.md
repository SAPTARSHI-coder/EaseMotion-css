# 🖥️ Automatic System Preference Detection for Dark Mode

A premium theme utility that automatically detects and applies OS-level color scheme preferences (light/dark mode) while allowing manual overrides that persist via `localStorage`.

## 📋 Features

- 🖥️ **OS Theme Syncing** - Instantly updates the website's theme when the user changes their operating system color scheme.
- 💾 **Manual Overrides** - Supports manual theme overrides (`Light` or `Dark` buttons) that take precedence over the OS theme.
- 🔄 **Persistent Storage** - Explicit choices are saved to `localStorage` to preserve theme selections across page reloads.
- ⚡ **Zero-Flash Hydration** - Inline blocking script inspects settings _before_ first paint to prevent white flash layout issues.
- 📡 **Real-time Observers** - Listens to background OS theme updates via the JavaScript `matchMedia` query listener.
- ✨ **Animated Transitions** - Integrates smooth CSS color and background transitions when switching modes.

## 🚀 Quick Start

### 1. HTML Flash Prevention Script

Add this script inside your `<head>` tag _before_ the stylesheet to inspect preferences before the page paints, preventing theme flashing:

```html
<script>
  (function () {
    const stored = localStorage.getItem("theme-override");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = stored || (systemDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  })();
</script>
<link rel="stylesheet" href="style.css" />
```

### 2. JavaScript Theme Manager

Include the theme switching and listener logic:

```javascript
const systemDarkMedia = window.matchMedia("(prefers-color-scheme: dark)");

function resolveAndApplyTheme() {
  const stored = localStorage.getItem("theme-override");
  const systemIsDark = systemDarkMedia.matches;
  const targetTheme = stored || (systemIsDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", targetTheme);
}

// OS theme observer
systemDarkMedia.addEventListener("change", () => {
  // Only auto-apply if there's no manual override active
  if (!localStorage.getItem("theme-override")) {
    resolveAndApplyTheme();
  }
});

// Setting manual overrides
function setManualOverride(theme) {
  if (theme === "system") {
    localStorage.removeItem("theme-override");
  } else {
    localStorage.setItem("theme-override", theme);
  }
  resolveAndApplyTheme();
}
```

### 3. CSS Custom Properties

Leverage the `[data-theme]` attribute selector to transition variables:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

[data-theme="dark"] {
  --bg-color: #0b0f19;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```
