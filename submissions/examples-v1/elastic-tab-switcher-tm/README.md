# Elastic Tab Switcher — EaseMotion CSS Submission

## Overview

The **Elastic Tab Switcher** (`elastic-tab-switcher-tm`) provides spring-animated tab switching with full WAI-ARIA accessibility support. The active tab indicator uses `--ease-ease-bounce` for a satisfying overshoot animation that communicates "tab selected" with physicality.

## Design Tokens Used

| Token | Value | Role |
|---|---|---|
| `--ease-color-primary` | `#6c63ff` | Active tab, focus ring |
| `--ease-color-primary-light` | `#a09af8` | Hover underline |
| `--ease-color-primary-alpha` | `rgba(108,99,255,0.06)` | Hover background |
| `--ease-color-neutral-200` | `#e2e8f0` | Tab badge bg, panel border |
| `--ease-color-muted` | `#64748b` | Inactive tab text |
| `--ease-color-surface` | `#ffffff` | Panel background |
| `--ease-speed-fast` | `150ms` | Color transitions |
| `--ease-speed-medium` | `300ms` | Indicator + transform |
| `--ease-radius-md` | `0.5rem` | Tab rounding |
| `--ease-radius-lg` | `1rem` | Panel border radius |
| `--ease-ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring animation timing |

## Usage

```html
<div class="tab-bar" role="tablist" aria-label="My tabs">
  <button class="tab-btn" role="tab" aria-selected="true" aria-controls="panel-1">
    Tab One
    <span class="tab-badge">3</span>
  </button>
  <button class="tab-btn" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1">
    Tab Two
  </button>
</div>

<div class="tab-panel" role="tabpanel" id="panel-1" aria-labelledby="tab-1" aria-hidden="false">
  Content for tab one.
</div>
<div class="tab-panel" role="tabpanel" id="panel-2" aria-labelledby="tab-2" aria-hidden="true">
  Content for tab two.
</div>
```

## Variants

| Class | Description |
|---|---|
| `.tab-bar--sm` | Compact padding for sidebars |
| `.tab-bar--lg` | Larger padding for hero areas |
| `.tab-bar--pills` | Filled pill style with shadow on active |

## Accessibility

- Full WAI-ARIA `tablist` / `tab` / `tabpanel` roles
- Arrow key navigation (`←` `→`) within tab bar
- `prefers-reduced-motion` disables all animations
- `prefers-color-scheme: dark` provides dark panel variant
- Focus-visible ring on keyboard users
