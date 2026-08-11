# EaseMotion Scale-Hover Tooltip

A high-performance, GPU-friendly, pure HTML & CSS tooltip component featuring scale-hover entrances and absolute responsiveness.

## What does this do?
The **EaseMotion Scale-Hover Tooltip** creates a responsive, styled popup element positioned relative to a trigger anchor. It appears instantly on hover or keyboard focus, fading and scaling in with high-performance CSS transitions.

## How is it used?

The tooltip operates on a wrapper-containment pattern. Wrap your trigger element and target tooltip in a container with the class `.ease-tooltip-wrapper`.

### 1. Basic Text Trigger
Add the `.ease-tooltip` class and a placement modifier (like `.ease-tooltip-top`):

```html
<span class="ease-tooltip-wrapper" tabindex="0">
  Hover or focus me
  <span class="ease-tooltip ease-tooltip-top" role="tooltip">
    Tooltip message content
  </span>
</span>
```

### 2. Composed Button Trigger
You can wrap buttons, links, or icons. The tooltip uses `:focus-within` on the wrapper, so focusing interactive child nodes automatically displays the tooltip:

```html
<div class="ease-tooltip-wrapper">
  <button class="ease-btn ease-btn-primary" aria-describedby="my-tooltip">
    Save Document
  </button>
  <span id="my-tooltip" class="ease-tooltip ease-tooltip-bottom" role="tooltip">
    Saves work to the cloud database
  </span>
</div>
```

---

## Placement Variants
The component supports four placements. Combine `.ease-tooltip` with one of the following classes:
- `.ease-tooltip-top` - Renders above the trigger, arrow pointing down.
- `.ease-tooltip-bottom` - Renders below the trigger, arrow pointing up.
- `.ease-tooltip-left` - Renders to the left of the trigger, arrow pointing right.
- `.ease-tooltip-right` - Renders to the right of the trigger, arrow pointing left.

---

## Thematic Variants
Pre-configured visual styles are available out of the box:
- `.ease-tooltip-primary` - Matches your active primary accent theme.
- `.ease-tooltip-success` - Green accent theme for validations and successes.
- `.ease-tooltip-danger` - Red accent theme for system warnings and delete actions.
- `.ease-tooltip-warning` - Amber theme for system warnings.
- `.ease-tooltip-info` - Soft lilac/indigo combination.
- `.ease-tooltip-light` - Premium light mode preset with double border shadows.
- `.ease-tooltip-glass` - Frosted glassmorphism effect using `backdrop-filter: blur()`.

*Example implementation:*
```html
<div class="ease-tooltip-wrapper">
  <button class="ease-btn ease-btn-success">Status</button>
  <span class="ease-tooltip ease-tooltip-top ease-tooltip-success" role="tooltip">
    Online and Operational
  </span>
</div>
```

---

## CSS Variables API
Customize any tooltip instance (or override globally) by setting these CSS Custom Properties:

| Variable | Description | Default Fallback |
| :--- | :--- | :--- |
| `--ease-tooltip-bg` | Background color of the tooltip and arrow | `var(--ease-color-neutral-900)` (`#0f172a`) |
| `--ease-tooltip-color` | Text color | `var(--ease-color-neutral-50)` (`#f8fafc`) |
| `--ease-tooltip-radius` | Border radius | `var(--ease-radius-md)` (`0.5rem` / `8px`) |
| `--ease-tooltip-shadow` | Drop shadow styling | `var(--ease-shadow-lg)` |
| `--ease-tooltip-duration` | Fade & scale timing duration | `var(--ease-speed-medium)` (`300ms`) |
| `--ease-tooltip-easing` | Transition timing function (e.g., ease, bounce) | `var(--ease-ease-bounce)` |
| `--ease-tooltip-scale-amount` | Starting scale factor of entrance | `0.95` (scales up to `1`) |
| `--ease-tooltip-spacing` | Gap offset spacing between trigger and tooltip | `var(--ease-space-2)` (`8px`) |

*Example overriding values locally:*
```html
<div class="ease-tooltip-wrapper" style="--ease-tooltip-bg: #8b5cf6; --ease-tooltip-spacing: 16px;">
  <button class="ease-btn">Purple Focus</button>
  <span class="ease-tooltip ease-tooltip-top" role="tooltip">Custom purple spacing!</span>
</div>
```

---

## Core Technical Features

### ⚡ GPU-Friendly Animations
Animations are fully optimized to run on the GPU. Transitions only animate the `opacity` and `transform: translate() scale()` properties. Animating `transform` and `opacity` avoids browser repaint and layout reflow cycles, keeping animations rendering at a smooth 60fps.

### 📱 Responsive Placements
On mobile viewport sizes (screen width `<= 768px`), left-positioned (`.ease-tooltip-left`) and right-positioned (`.ease-tooltip-right`) tooltips dynamically transform into **top placements** (`.ease-tooltip-top`) with a downward arrow. This automated fallback ensures tooltips never overflow the left or right boundaries of mobile screens.

### ♿ Accessibility (A11y)
- **Keyboard Access**: Uses `:focus-within` on the wrapper, so tab-focusing inputs or buttons automatically shows tooltips.
- **Focus Rings**: Includes explicit support for `:focus-visible` styling on custom tooltip wrappers.
- **Screen Readers**: Compatible with `role="tooltip"` and trigger linkages using `aria-describedby` or `aria-label`.
- **Motion Reduction**: Respects user browser preferences via `@media (prefers-reduced-motion: reduce)`, disabling scaling motion and accelerating transition fade times to `50ms`.
