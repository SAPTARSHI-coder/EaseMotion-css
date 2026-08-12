# EaseMotion — Dark Mode Token System

Automatic `prefers-color-scheme: dark` support with manual override via `.ease-dark` / `.ease-light` classes.

## The Problem

EaseMotion components (cards, buttons, modals, navbar) use hardcoded light colors. In dark mode, they're invisible or jarring.

## The Solution

Define theme tokens as CSS custom properties in `core/variables.css`, then update all components to use `var()` references instead of hardcoded values.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Dark/light toggle with card, button, badge, form, toast, tooltip components |
| `style.css` | Token variables, dark/light overrides, component styles |

## Token Reference

| Variable | Light | Dark |
|----------|-------|------|
| `--ease-bg-primary` | `#ffffff` | `#1e293b` |
| `--ease-bg-secondary` | `#f8fafc` | `#0f172a` |
| `--ease-text-primary` | `#1e293b` | `#f1f5f9` |
| `--ease-text-secondary` | `#64748b` | `#94a3b8` |
| `--ease-border` | `#e2e8f0` | `#334155` |
| `--ease-shadow` | `rgba(0,0,0,0.08)` | `rgba(0,0,0,0.4)` |

## Usage

### Via system preference (auto)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --ease-bg-primary: #1e293b;
    --ease-text-primary: #f1f5f9;
    /* ... */
  }
}
```

### Via class override (manual toggle)

```css
.ease-dark { --ease-bg-primary: #1e293b; /* ... */ }
.ease-light { --ease-bg-primary: #ffffff; /* ... */ }
```

### Component usage

```css
.ease-card {
  background: var(--ease-bg-primary);
  color: var(--ease-text-primary);
  border: 1px solid var(--ease-border);
  box-shadow: 0 1px 3px var(--ease-shadow);
  transition: background 0.3s, color 0.3s, border 0.3s;
}
```

## Affected Components

Card, Button, Badge, Form, Toast, Tooltip, Modal, Navbar, Sidebar — all benefit from the token system.
