# ease-network-status-indicator-cozy

A CSS-only network status indicator with a smooth online/offline pulse animation, fully customizable via CSS custom properties.

## What does this do?

Displays a pulsing dot that visually communicates network connectivity state — online (green), offline (red), or reconnecting (amber) — using only `@keyframes` CSS animations.

## How to use it

Link `style.css` and drop in the markup:

```html
<link rel="stylesheet" href="style.css">

<!-- Online (default) -->
<div class="ease-network-indicator">
  <div class="ease-network-indicator__dot-wrap">
    <div class="ease-network-indicator__dot"></div>
  </div>
  <span class="ease-network-indicator__label">Online</span>
</div>

<!-- Offline -->
<div class="ease-network-indicator ease-network-indicator--offline">
  <div class="ease-network-indicator__dot-wrap">
    <div class="ease-network-indicator__dot"></div>
  </div>
  <span class="ease-network-indicator__label">Offline</span>
</div>

<!-- Reconnecting / warning -->
<div class="ease-network-indicator ease-network-indicator--warning">
  <div class="ease-network-indicator__dot-wrap">
    <div class="ease-network-indicator__dot"></div>
  </div>
  <span class="ease-network-indicator__label">Reconnecting…</span>
</div>
```

### State modifiers

| Modifier class | State |
|---|---|
| *(none)* | Online — steady green pulse |
| `ease-network-indicator--offline` | Offline — slow red pulse |
| `ease-network-indicator--warning` | Reconnecting — oscillating amber pulse |
| `ease-network-indicator--no-pulse` | Minimal — static dot, no animation |

### Switching state with JavaScript

```js
const el = document.querySelector('.ease-network-indicator');

// Go offline
el.classList.add('ease-network-indicator--offline');
el.querySelector('.ease-network-indicator__label').textContent = 'Offline';

// Go back online
el.classList.remove('ease-network-indicator--offline');
el.querySelector('.ease-network-indicator__label').textContent = 'Online';
```

> **Accessibility:** When toggling state via JavaScript, the label text changes dynamically. Add `role="status"` and `aria-live="polite"` to the `.ease-network-indicator` container so screen readers announce the change without stealing focus:
>
> ```html
> <div class="ease-network-indicator" role="status" aria-live="polite">
>   ...
> </div>
> ```

## Customization

All visual properties are exposed as CSS custom properties on `:root`. Override them globally or inline on any instance:

| Property | Default | Description |
|---|---|---|
| `--nsi-online-color` | `#15803d` | Dot + pulse color when online |
| `--nsi-offline-color` | `#b91c1c` | Dot + pulse color when offline |
| `--nsi-warning-color` | `#92400e` | Dot + pulse color when reconnecting |
| `--nsi-dot-size` | `12px` | Diameter of the status dot |
| `--nsi-pulse-spread` | `8px` | How far the pulse ring expands |
| `--nsi-pulse-duration` | `1.8s` | Speed of the pulse cycle |
| `--nsi-font-size` | `0.875rem` | Label font size |
| `--nsi-font-family` | `system-ui, -apple-system, sans-serif` | Label font family |
| `--nsi-label-color` | `inherit` | Label font color when no pulse applies |
| `--nsi-gap` | `0.5rem` | Space between dot and label |
| `--nsi-bg` | `transparent` | Container background |
| `--nsi-padding` | `0.4rem 0.75rem` | Container padding |
| `--nsi-radius` | `999px` | Container border-radius |

**Example — purple custom color:**

```html
<div class="ease-network-indicator" style="--nsi-online-color: #a855f7;">
  ...
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS is animation-first. This component delivers a meaningful, real-world animation pattern — the "heartbeat" status dot used in dashboards, sidebars, and chat apps — using only `@keyframes` and CSS custom properties. It ships with:

- Dark mode via `[data-theme="dark"]`
- `prefers-reduced-motion` override (animation disabled, dot remains visible)
- Three semantic states with distinct pulse rhythms to convey meaning through motion
- Zero JavaScript required for the animation layer

## Browser support

Requires CSS custom properties and `@keyframes` — supported in all current evergreen browsers.
