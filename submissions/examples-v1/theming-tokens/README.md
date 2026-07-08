# CSS Custom Properties — Theming Support

**Fixes:** Issue #8384

## Problem

EaseMotion-css used hardcoded values scattered across component files:

```css
/* ❌ Before — impossible to theme */
.ease-fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
.ease-btn {
  background-color: #38bdf8;
  transition: background-color 0.3s ease;
}
```

Developers had to manually hunt and override dozens of rules to
change a single color or duration.

## Fix

All values moved to a `--ease-*` token system in `:root`:

```css
/* ✅ After — re-theme with one block */
:root {
  --ease-primary:         #38bdf8;
  --ease-duration-normal: 0.4s;
  --ease-timing:          ease-in-out;
  --ease-radius-md:       8px;
}

.ease-fade-in {
  animation: ease-kf-fade-in var(--ease-duration-normal) var(--ease-timing) both;
}
.ease-btn-primary {
  background-color: var(--ease-primary);
}
```

## Token Reference

### Colors
| Token | Default | Purpose |
|---|---|---|
| `--ease-primary` | `#38bdf8` | Primary brand color |
| `--ease-primary-hover` | `#0ea5e9` | Primary hover state |
| `--ease-primary-text` | `#ffffff` | Text on primary bg |
| `--ease-secondary` | `#818cf8` | Secondary brand color |
| `--ease-success` | `#4ade80` | Success state |
| `--ease-warning` | `#fbbf24` | Warning state |
| `--ease-danger` | `#f87171` | Danger/error state |
| `--ease-surface` | `#ffffff` | Card / modal bg |
| `--ease-text` | `#1e293b` | Body text |
| `--ease-text-muted` | `#64748b` | Secondary text |
| `--ease-border` | `#e2e8f0` | Border color |

### Animation
| Token | Default | Purpose |
|---|---|---|
| `--ease-duration-fast` | `0.15s` | Micro-interactions |
| `--ease-duration-normal` | `0.4s` | Standard transitions |
| `--ease-duration-slow` | `0.7s` | Emphasis animations |
| `--ease-timing` | `ease-in-out` | Default easing |
| `--ease-timing-bounce` | `cubic-bezier(0.34,1.56,0.64,1)` | Bounce effect |
| `--ease-timing-smooth` | `cubic-bezier(0.4,0,0.2,1)` | Material smooth |

### Radius
| Token | Default | px |
|---|---|---|
| `--ease-radius-sm` | `4px` | Small |
| `--ease-radius-md` | `8px` | Default |
| `--ease-radius-lg` | `16px` | Cards |
| `--ease-radius-xl` | `24px` | Large panels |
| `--ease-radius-full` | `9999px` | Pills / chips |

### Shadows
| Token | Purpose |
|---|---|
| `--ease-shadow-sm` | Subtle elevation |
| `--ease-shadow-md` | Cards, dropdowns |
| `--ease-shadow-lg` | Modals, overlays |
| `--ease-shadow-focus` | Focus ring |

## Consumer Override — One Block

```css
/* Amber theme */
:root {
  --ease-primary:         #f59e0b;
  --ease-primary-hover:   #d97706;
  --ease-duration-normal: 0.6s;
  --ease-radius-md:       2px;
  --ease-shadow-focus:    0 0 0 3px rgba(245, 158, 11, 0.4);
}
```

That single `:root` block re-themes buttons, cards, animations,
focus rings, and transitions — no !important, no class overrides.

## Acceptance Criteria

- [x] `:root` block defines all core tokens (color, duration, easing, radius)
- [x] All animation utility classes use `var(--ease-*)` instead of hardcoded values
- [x] All component classes (button, card) use tokens
- [x] Overriding `:root` variables re-themes the framework (live demo)
- [x] Dark mode token overrides via `@media (prefers-color-scheme: dark)`
- [x] Token reference table documented in README
- [x] No breaking changes to existing class names
- [x] `prefers-reduced-motion` guard included