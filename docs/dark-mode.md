# Dark Mode Implementation Guide

EaseMotion CSS is built on a **CSS variable foundation**, making dark mode trivial to implement. This guide shows you three approaches: OS preference detection, manual toggle, and hybrid.

---

## 🎯 Overview

The EaseMotion variable system organizes colors into **semantic slots**:

| Variable | Light Value | Dark Value |
|----------|------------|-----------|
| `--ease-color-bg` | `#f8fafc` (neutral-50) | `#0f172a` (neutral-900) |
| `--ease-color-surface` | `#ffffff` (white) | `#1e293b` (neutral-800) |
| `--ease-color-text` | `#1e293b` (neutral-800) | `#f8fafc` (neutral-50) |
| `--ease-color-muted` | `#64748b` (neutral-500) | `#94a3b8` (neutral-400) |

**You only override these 4 variables.** Everything else (buttons, cards, animations) automatically adjusts.

---

## 📱 Approach 1: System Preference (Recommended)

Let the OS tell your app whether the user prefers light or dark mode.

### Code
```css
/* Light mode (default) — no changes needed */
:root {
  --ease-color-bg:      #f8fafc;    /* neutral-50 */
  --ease-color-surface: #ffffff;
  --ease-color-text:    #1e293b;    /* neutral-800 */
  --ease-color-muted:   #64748b;    /* neutral-500 */
}

/* Dark mode — apply when user prefers dark */
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-bg:      #0f172a;   /* neutral-900 */
    --ease-color-surface: #1e293b;   /* neutral-800 */
    --ease-color-text:    #f8fafc;   /* neutral-50 */
    --ease-color-muted:   #94a3b8;   /* neutral-400 */
  }
}
```

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
    <link rel="stylesheet" href="./dark-mode.css" />
  </head>
  <body>
    <button class="ease-btn ease-btn-primary">Click Me</button>
    <!-- Automatically respects system dark mode 🌙 -->
  </body>
</html>
```

### Result
- Light mode on macOS (Settings → General → Light)
- Dark mode on macOS (Settings → General → Dark)
- Automatic on Windows, Linux, mobile (respects OS setting)

---

## 🎛️ Approach 2: Manual Toggle (data-theme)

Let users override their OS preference with a theme switcher button.

### CSS
```css
/* Light theme (default) */
:root {
  --ease-color-bg:      #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text:    #1e293b;
  --ease-color-muted:   #64748b;

  color-scheme: light;
}

/* Dark theme (explicit override) */
:root[data-theme="dark"] {
  --ease-color-bg:      #0f172a;
  --ease-color-surface: #1e293b;
  --ease-color-text:    #f8fafc;
  --ease-color-muted:   #94a3b8;

  color-scheme: dark;
}

/* Also respect OS preference if data-theme isn't set */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --ease-color-bg:      #0f172a;
    --ease-color-surface: #1e293b;
    --ease-color-text:    #f8fafc;
    --ease-color-muted:   #94a3b8;

    color-scheme: dark;
  }
}
```

### HTML + JavaScript
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
    <link rel="stylesheet" href="./dark-mode.css" />
  </head>
  <body>
    <!-- Theme Switcher Button -->
    <button id="theme-toggle" class="ease-btn ease-btn-primary" aria-label="Toggle dark mode">
      <span id="theme-icon">🌙</span>
      <span id="theme-label">Dark</span>
    </button>

    <div class="ease-card ease-mb-4 ease-p-6">
      <h1>Hello, Dark Mode!</h1>
      <p class="ease-text-muted">Try togkling the theme above.</p>
    </div>

    <script>
      // Initialize theme from localStorage or system preference
      function initTheme() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const theme = saved || (prefersDark ? 'dark' : 'light');
        setTheme(theme);
      }

      // Set theme and persist to localStorage
      function setTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
          document.getElementById('theme-icon').textContent = '☀️';
          document.getElementById('theme-label').textContent = 'Light';
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
          document.getElementById('theme-icon').textContent = '🌙';
          document.getElementById('theme-label').textContent = 'Dark';
          localStorage.setItem('theme', 'light');
        }
      }

      // Toggle on button click
      document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });

      // Initialize on page load
      initTheme();
    </script>
  </body>
</html>
```

### How It Works
1. User clicks button → updates `data-theme` attribute on `<html>`
2. CSS rule `[data-theme="dark"]` kicks in → overrides variables
3. All components (buttons, cards, text) instantly switch colors ✨
4. Theme persists in `localStorage` across page refreshes

### Optional: Smooth Transition
```css
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## 🔀 Approach 3: Hybrid (System + Manual Override)

Respect OS preference by default, but allow manual override for power users.

### CSS
```css
/* Default light mode */
:root {
  --ease-color-bg:      #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text:    #1e293b;
  --ease-color-muted:   #64748b;
}

/* Override with data-theme if user manually toggled */
:root[data-theme="dark"] {
  --ease-color-bg:      #0f172a;
  --ease-color-surface: #1e293b;
  --ease-color-text:    #f8fafc;
  --ease-color-muted:   #94a3b8;
}

:root[data-theme="light"] {
  --ease-color-bg:      #f8fafc;
  --ease-color-surface: #ffffff;
  --ease-color-text:    #1e293b;
  --ease-color-muted:   #64748b;
}

/* Respect OS preference if NO manual override set */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --ease-color-bg:      #0f172a;
    --ease-color-surface: #1e293b;
    --ease-color-text:    #f8fafc;
    --ease-color-muted:   #94a3b8;
  }
}
```

### JavaScript
```javascript
function initTheme() {
  const saved = localStorage.getItem('theme');
  
  if (saved) {
    // User manually toggled before
    document.documentElement.setAttribute('data-theme', saved);
  } else {
    // First visit: respect OS preference (via @media, no attribute needed)
    // data-theme attribute is NOT set, so @media query applies
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  
  if (current === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else if (current === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'system');
  } else {
    // Currently following system → switch to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

initTheme();
```

---

## 🎨 Customize Dark Mode Colors

Don't like the default dark palette? Override the variables with your own!

### Example: Custom Dark Mode with Purples
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Swap in your brand colors */
    --ease-color-bg:      #1a0f2e;   /* Deep purple */
    --ease-color-surface: #2d1b4e;   /* Purple-dark */
    --ease-color-text:    #f5f1ff;   /* Off-white */
    --ease-color-muted:   #a09af8;   /* Purple-light */
  }
}
```

### Example: High Contrast Dark Mode (Accessibility)
```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-bg:      #000000;   /* True black */
    --ease-color-surface: #1a1a1a;
    --ease-color-text:    #ffffff;   /* True white */
    --ease-color-muted:   #cccccc;
  }
}
```

### Example: Warm Dark Mode (Eye Comfort)
```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-bg:      #1a1410;   /* Warm black */
    --ease-color-surface: #2a2420;   /* Warm grey */
    --ease-color-text:    #f5ede3;   /* Warm white */
    --ease-color-muted:   #a59a92;   /* Warm muted */
  }
}
```

---

## 📚 Which Variables Are Safe to Override?

### ✅ Always Safe (designed for theming)
- `--ease-color-bg` – Page background
- `--ease-color-surface` – Cards, buttons, modals
- `--ease-color-text` – Paragraph text, headings
- `--ease-color-muted` – Disabled text, secondary labels
- `--ease-color-primary`, `--ease-color-success`, etc. – Semantic colors (optional override)

### ⚠️ Can Override (but affects accents)
- `--ease-shadow-*` – Adjust for dark backgrounds (optional)
- `--ease-glow-*` – Adjust glow intensity (optional)

### ❌ Don't Override (system properties)
- `--ease-speed-*` – Timing values
- `--ease-ease-*` – Easing functions
- `--ease-font-*` – Typography
- `--ease-space-*` – Spacing scale
- `--ease-radius-*` – Border radius
- `--ease-z-*` – Z-index layers

---

## 🧪 Testing Dark Mode

### Option 1: DevTools (Easiest)
**Chrome DevTools:**
1. F12 → **Rendering** tab
2. Scroll to **Emulate CSS media feature prefers-color-scheme**
3. Select **"prefers-color-scheme: dark"**

**Firefox DevTools:**
1. F12 → **Inspector** → **Settings** (⚙️)
2. Check **"Print Simulation"** or use `about:config` → `ui.systemUsesDarkTheme = 1`

### Option 2: Test in Real Dark Mode
- **macOS:** System Preferences → General → Appearance → Dark
- **Windows 11:** Settings → Personalization → Colors → Dark
- **iOS:** Settings → Display & Brightness → Dark
- **Android:** Settings → Display → Dark theme

### Option 3: Manual Toggle (Recommended)
Use Approach 2 (manual toggle) during development so you can easily switch modes without changing OS settings.

---

## 🚨 Common Issues

### Issue: Colors don't change when toggling theme
**Cause:** CSS not loaded or specificity conflict.

**Fix:**
```css
/* Make sure your CSS loads AFTER EaseMotion */
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
<link rel="stylesheet" href="./dark-mode.css" /> <!-- Your overrides here -->
```

### Issue: Transitions feel jarring
**Solution:** Add a smooth transition:
```css
:root {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### Issue: Some components don't update
**Cause:** Component has inline `color` or `background` that overrides variables.

**Check:** Open DevTools → Inspector → select element → see if inline `style` attribute exists. If so, update the component CSS to use variables:
```css
/* Don't: */
.my-component { background: white; }

/* Do: */
.my-component { background: var(--ease-color-surface); }
```

### Issue: Text becomes unreadable in dark mode
**Solution:** Ensure sufficient contrast. Use:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-text: #ffffff; /* Brighter for dark backgrounds */
  }
}
```

---

## ✅ Quick Start Templates

### Minimal Setup (5 lines of CSS)
```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-bg: #0f172a;
    --ease-color-surface: #1e293b;
    --ease-color-text: #f8fafc;
    --ease-color-muted: #94a3b8;
  }
}
```

### Full Toggle Setup (Copy-Paste Ready)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dark Mode Demo</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css" />
  <style>
    :root {
      --ease-color-bg: #f8fafc;
      --ease-color-surface: #ffffff;
      --ease-color-text: #1e293b;
      --ease-color-muted: #64748b;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme]) {
        --ease-color-bg: #0f172a;
        --ease-color-surface: #1e293b;
        --ease-color-text: #f8fafc;
        --ease-color-muted: #94a3b8;
      }
    }

    :root[data-theme="dark"] {
      --ease-color-bg: #0f172a;
      --ease-color-surface: #1e293b;
      --ease-color-text: #f8fafc;
      --ease-color-muted: #94a3b8;
    }

    body {
      font-family: var(--ease-font-sans);
      background: var(--ease-color-bg);
      color: var(--ease-color-text);
      transition: background-color 0.3s, color 0.3s;
      padding: var(--ease-space-8);
    }
  </style>
</head>
<body>
  <button id="theme-toggle" class="ease-btn ease-btn-primary">🌙 Dark</button>
  <div class="ease-card ease-mt-4 ease-p-6">
    <h1>Hello, Dark Mode!</h1>
  </div>

  <script>
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    function setTheme(theme) {
      if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️ Light';
        localStorage.theme = 'dark';
      } else {
        html.removeAttribute('data-theme');
        btn.textContent = '🌙 Dark';
        localStorage.theme = 'light';
      }
    }

    btn.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });

    if (localStorage.theme === 'dark') {
      setTheme('dark');
    }
  </script>
</body>
</html>
```

---

## 📖 See Also

- [CSS Variables Reference](./class-naming-conventions.md#css-variables)
- [Accessibility & Reduced Motion](./accessibility-reduced-motion.md)
- [EaseMotion CSS Main Docs](./index.html)
