# Micro-Shake Tooltip (SaaS Marketing Component)

A pure CSS, hardware-accelerated tooltip component designed for professional SaaS layouts, clean marketing landing pages, and interactive dashboards. On hover or keyboard focus, it displays a white card styled box with a soft drop shadow, executing a subtle horizontal micro-shake animation before settling.

---

### Contribution Questions

1. **What does this do?**  
   It provides a reusable pure CSS tooltip that fades in and executes a subtle horizontal micro-shake animation on hover and focus events.
2. **How is it used?**  
   Wrap your trigger in a `.tooltip-wrapper` container alongside a `.tooltip-content` block, adding direction classes such as `.tooltip-top`.
3. **Why is it useful?**  
   It adds organic micro-interactions to landing pages without introducing external frameworks, dependencies, or JavaScript bundles.

---

## Features

- **Pure HTML & CSS:** 100% pure styling and keyframes with zero JavaScript, external libraries, or build configurations.
- **Micro-Shake Interaction:** A subtle 2px–4px horizontal back-and-forth shake keyframe sequence that draws user focus smoothly.
- **Modern SaaS Styling:** Clean white tooltip boxes, soft professional shadow layers, and custom SaaS accent themes.
- **Directional Placements:** Flexible layout support for Top, Bottom, Left, and Right tooltip placements.
- **Keyboard Navigation Support:** Fully navigable using keyboard focus selectors, styled via `:focus-visible`.
- **Motion Accommodating:** Automatically bypasses all animations when the user requests `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/micro-shake-tooltip/
├── demo.html       ← Live SaaS Marketing Showcase Demo
├── style.css       ← Custom keyframes, variables, and tooltip layouts
└── README.md       ← Full component documentation (this file)
```

---

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="./style.css" />
```

### HTML Example

```html
<div class="tooltip-wrapper">
  <!-- Interactive Focusable Trigger Button -->
  <button class="btn-primary" aria-describedby="tooltip-desc">
    Hover or Focus Me
  </button>

  <!-- Tooltip Element -->
  <div id="tooltip-desc" class="tooltip-content tooltip-top" role="tooltip">
    Subtle Micro-Shake Alert Box
  </div>
</div>
```

---

## CSS Variables

Exposed custom variables on `:root` allow instant style changes:

| CSS Variable               | Description                        | Default Value                            |
| :------------------------- | :--------------------------------- | :--------------------------------------- |
| `--tooltip-bg`             | Background color for tooltip card  | `#ffffff`                                |
| `--tooltip-color`          | Text color                         | `#1e293b`                                |
| `--tooltip-radius`         | Border radius                      | `8px`                                    |
| `--tooltip-padding`        | Padding inside tooltip             | `8px 14px`                               |
| `--tooltip-shadow`         | Shadow overlay                     | `0 10px 25px -5px rgba(15, 23, 42, 0.1)` |
| `--tooltip-duration`       | Animation duration                 | `350ms`                                  |
| `--tooltip-delay`          | Interaction timing delay           | `0s`                                     |
| `--tooltip-easing`         | Motion timing curve                | `cubic-bezier(0.25, 1, 0.5, 1)`          |
| `--tooltip-distance`       | Distance from trigger element      | `8px`                                    |
| `--tooltip-font-size`      | Font size                          | `0.75rem`                                |
| `--tooltip-shake-distance` | Horizontal translation shake limit | `3px`                                    |
| `--tooltip-focus-outline`  | Focus border outline color         | `#4f46e5`                                |

---

## Responsive Behaviour

- **Automatic Text Wrapping:** Features a default `max-width: 260px` combined with `width: max-content` to wrap text cleanly across viewports.
- **Fluid Layout Alignments:** Works inside flex containers and grid placement systems, adjusting dynamically to element dimensions.
- **Mobile Touch Handling:** Tap triggers display the tooltip on mobile screens natively, clearing on touch-outs.

---

## Accessibility

- **ARlA Compliance:** Built using explicit `role="tooltip"` wrappers and `aria-describedby` mapping tags.
- **Focus Rings:** Displays high-contrast SaaS borders on keyboard focus using `:focus-visible`.
- **Reduced Motion:** Integrates native media checks to strip out keyframe updates:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .tooltip-content {
      transition: none !important;
      animation: none !important;
    }
  }
  ```

---

## Browser Support

- Chrome & Chromium-based browsers (Full Support)
- Firefox (Full Support)
- Safari (iOS & macOS) (Full Support)
- Edge (Full Support)
