# EaseMotion Rotate-Click Tooltip

A click- and focus-activated pure HTML & CSS tooltip component featuring interactive rotation micro-animations and responsive alignment protections.

## What does this do?
The **EaseMotion Rotate-Click Tooltip** displays diagnostic popups, pricing tables, or information labels when users click, tap, or tab-focus triggers. The tooltip enters with a customized rotative twist combined with fade and scale animations.

---

## How is it used?

Wrap the interactive trigger (e.g. `<button>`, `<input>`, or a generic wrapper with `tabindex`) and the tooltip inside an `.ease-rotate-tooltip-wrapper` container.

### 1. Basic Click Button Trigger
Clicking or tab-focusing the button activates the tooltip. Clicking outside automatically hides it.

```html
<div class="ease-rotate-tooltip-wrapper">
  <button class="ease-btn ease-btn-primary" aria-describedby="tooltip-btn">
    Click Me
  </button>
  <span id="tooltip-btn" class="ease-rotate-tooltip ease-rotate-tooltip-top" role="tooltip">
    Active Diagnostic Data
  </span>
</div>
```

### 2. Rotative Trigger Icons (Micro-Animations)
You can rotate a nested trigger icon (like a settings cog or cross plus) when the tooltip wrapper becomes active. Add the `.ease-rotate-trigger-icon` class to your SVG/icon:

```html
<div class="ease-rotate-tooltip-wrapper" style="--ease-rotate-icon-angle: 90deg;">
  <button class="action-btn" aria-describedby="tooltip-cog">
    <span class="ease-rotate-trigger-icon">
      <!-- Settings Cog SVG Icon -->
    </span>
  </button>
  <span id="tooltip-cog" class="ease-rotate-tooltip ease-rotate-tooltip-top" role="tooltip">
    Spin Cog config details
  </span>
</div>
```

### 3. Grid Node Schematic Trigger
Perfect for floorplans, server clusters, maps, or seat booking grids:

```html
<div class="ease-rotate-tooltip-wrapper">
  <button class="server-blade-node" aria-describedby="tooltip-diagnostics">Node 01</button>
  <span id="tooltip-diagnostics" class="ease-rotate-tooltip ease-rotate-tooltip-left ease-rotate-tooltip-glass" role="tooltip">
    CPU: 24% | RAM: 12GB | Status: Synced
  </span>
</div>
```

---

## Placement Directions
Add these classes to `.ease-rotate-tooltip`:
- `.ease-rotate-tooltip-top` - Positioned above, arrow pointing down.
- `.ease-rotate-tooltip-bottom` - Positioned below, arrow pointing up.
- `.ease-rotate-tooltip-left` - Positioned to the left, arrow pointing right.
- `.ease-rotate-tooltip-right` - Positioned to the right, arrow pointing left.

---

## Thematic Options
Customize colors easily using preset classes:
- `.ease-rotate-tooltip-primary` - Matches active primary accent.
- `.ease-rotate-tooltip-success` - Green status accent (operational).
- `.ease-rotate-tooltip-danger` - Red status accent (unreachable).
- `.ease-rotate-tooltip-warning` - Amber alert accent.
- `.ease-rotate-tooltip-light` - Premium light mode preset with box shadows.
- `.ease-rotate-tooltip-glass` - Translucent frosted glass effect using `backdrop-filter: blur()`.

---

## CSS Variables Customization API
Apply custom properties locally or globally on `:root` to adjust tooltip animations and styles:

| Variable | Description | Fallback Mapping |
| :--- | :--- | :--- |
| `--ease-rotate-tooltip-bg` | Tooltip background and arrow border color | `var(--ease-color-neutral-900)` (`#0f172a`) |
| `--ease-rotate-tooltip-color` | Text color | `var(--ease-color-neutral-50)` (`#f8fafc`) |
| `--ease-rotate-tooltip-radius` | Border radius | `var(--ease-radius-md)` (`0.5rem` / `8px`) |
| `--ease-rotate-tooltip-shadow` | Drop shadow strength | `var(--ease-shadow-lg)` |
| `--ease-rotate-tooltip-spacing` | Spacing gap offset from trigger | `var(--ease-space-2)` (`8px`) |
| `--ease-rotate-tooltip-duration` | Transition animation time | `var(--ease-speed-medium)` (`300ms`) |
| `--ease-rotate-tooltip-easing` | Custom timing function curve | `var(--ease-ease-bounce)` |
| `--ease-rotate-tooltip-angle` | Starting rotation angle of entrance | `-15deg` (rotates to `0deg`) |
| `--ease-rotate-tooltip-scale` | Starting scaling size factor of entrance | `0.9` (scales to `1`) |
| `--ease-rotate-icon-angle` | Angle trigger icons spin when active | `90deg` |

---

## Core Technical Features

### ⚡ GPU Acceleration
All hover and focus transitions are bound entirely to `opacity` and `transform` properties (`translate`, `rotate`, `scale`). Animating properties on the composited layer ensures that the browser bypasses layout repaints and reflow calculations, maintaining a consistent 60fps.

### 📱 Responsive Alignment Fallback
In tight floorplans or monitor layouts, left/right tooltips can overflow screens on mobile. Media queries (`max-width: 768px`) automatically force left (`.ease-rotate-tooltip-left`) and right (`.ease-rotate-tooltip-right`) tooltips to align to the **top** (`.ease-rotate-tooltip-top`) with a downward pointing arrow, preventing any overflow.

### ♿ Accessibility (A11y)
- **Focus Rings**: Employs `:focus-visible` styling to mark focused triggers.
- **Form Auditing**: Integrates with `:focus-within` on the wrapper, so tabbing through inputs immediately triggers tooltips.
- **Motion Reduction**: Respects system preferences via `@media (prefers-reduced-motion: reduce)`, disabling scaling/rotation transitions and setting the fade transition to a fast `50ms`. Trigger icon micro-rotations are also bypassed.
