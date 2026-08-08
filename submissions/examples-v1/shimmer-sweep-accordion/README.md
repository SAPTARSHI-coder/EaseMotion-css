# EaseMotion Shimmer Sweep Accordion

**Category:** Component — Accordion / Layout  
**Type:** Pure CSS  
**Folder:** `submissions/examples/shimmer-sweep-accordion/`

---

## Overview

The EaseMotion Shimmer Sweep Accordion is a responsive pure CSS accordion designed for modern portfolio and landing page layouts, running on zero JavaScript overhead.

By utilizing CSS Grid auto-height transitions, sections expand and collapse smoothly regardless of content lengths. An open state triggers a linear-gradient shimmer keyframe sweep across the active header, backed by bottom accent glows and rotating SVG indicators.

---

## Features

- **Pure CSS Layout** — visual expansions, triggers, and highlights are executed purely via style sheets.
- **Auto-Height Grid Transition** — shifts `grid-template-rows` from `0fr` to `1fr` to enable smooth animation of dynamic heights.
- **Shimmer Sweep Animation** — linear-gradient highlight sweeps across the header of the active accordion item.
- **Tactile Hover States** — headers incorporate glow scaling, color highlights, and smooth transition overrides.
- **Configurable Custom Properties** — simple CSS variables control duration, easing, shimmer cycle times, and focus highlights.
- **Keyboard Accessible** — checkbox inputs are placed off-screen but kept in focus flow, with visible outlines matching the active headers.
- **Reduced Motion** — automatically disables grid translations, chevron rotations, and shimmer sweeps under `prefers-reduced-motion: reduce`.

---

## File Structure

```
submissions/examples/shimmer-sweep-accordion/
├── demo.html      — Standalone portfolio presentation page with interactive customizer sliders
├── style.css      — Raw styling of accordion structures, grid columns, and sweep keyframes
└── README.md      — This documentation
```

---

## Usage

### Minimal HTML Structure

```html
<div class="em-accordion-container" role="region" aria-label="Services Accordion">
  
  <!-- Accordion Item Wrapper -->
  <div>
    <!-- Off-screen focusable input toggle -->
    <input type="checkbox" id="acc-item-1" class="em-accordion-input">
    
    <div class="em-accordion-item">
      <!-- Sibling label serves as click target -->
      <label for="acc-item-1" class="em-accordion-header">
        <span class="em-accordion-title">01 / Fullstack Development</span>
        <svg class="em-accordion-chevron" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>
        <div class="em-accordion-glow-line" aria-hidden="true"></div>
      </label>
      
      <!-- Auto-height transition wrapper -->
      <div class="em-accordion-content-wrapper">
        <div class="em-accordion-content">
          <div class="em-accordion-content-inner">
            Content paragraphs go here...
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
```

---

## How It Works

### Smooth Auto-Height Transition
Animating heights between `0` and `auto` has historically been a CSS layout limitation. Shifting `max-height` values creates abrupt delays or scaling speed errors if the value is too high.

This component addresses the issue using a **CSS Grid row-height transition**:

```css
.em-accordion-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.em-accordion-input:checked + .em-accordion-item .em-accordion-content-wrapper {
  grid-template-rows: 1fr;
}
```

The browser evaluates the height dynamically based on the child components. Adding `min-height: 0` to the child element (`.em-accordion-content`) is critical to allow the rows to collapse correctly.

### Keyboard Navigation & Access
The accordion is fully keyboard accessible. The actual input triggers are placed offscreen:
```css
.em-accordion-input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
```
Because they remain inside the DOM hierarchy without `display: none`, screen readers can read them and keyboard tab flows reach them normally. When focused via keyboard, the target outlines translate visually to the headers:
```css
.em-accordion-input:focus-visible + .em-accordion-item {
  outline: 2px solid var(--acc-accent);
  outline-offset: 4px;
}
```
Keyboard users can then cycle items using `Tab` and toggle states using the `Space` bar.

---

## Customization

All layout styles and animations are modular:

| CSS Custom Property | Default Value | Description |
|---|---|---|
| `--acc-duration` | `0.45s` | Auto-height grid expansion transition duration |
| `--acc-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Deci-deceleration curve (smooth decel) |
| `--acc-shimmer-duration` | `1.8s` | Cycle timing of the header shimmer sweep |
| `--acc-shimmer-color` | `rgba(255, 255, 255, 0.16)` | Highlight color wash of the sweep gradient |
| `--acc-accent` | `#6c63ff` | Active outline border and bottom glow indicator |
| `--acc-bg` | `#111827` | Base card surface panel background color |
| `--acc-border` | `rgba(255, 255, 255, 0.08)` | Frame border stroke color |
| `--acc-text` | `#94a3b8` | Content paragraph body color |
| `--acc-title` | `#f1f5f9` | Header section title typography color |

---

## Browser Support

| Browser | Version | Notes |
|---|---|---|
| Chrome / Edge | 107+ | Full support (earlier builds do not transition grid-template-rows) |
| Firefox | 115+ | Full support (earlier builds do not transition grid-template-rows) |
| Safari | 16+ | Full support (earlier builds do not transition grid-template-rows) |
| iOS Safari | 16+ | Full support |
| Samsung Internet | 21+ | Full support |

> **Graceful Fallback:** In older browser versions that do not support grid row transitions, the accordion still toggles open and closed instantly, preserving utility.

---

## Why This Effect Is Useful

Traditional JavaScript accordion widgets require loading script files, which adds up to bundle sizes and can delay interactivity. 

This pure CSS shimmer accordion compiles down to less than 3KB of stylesheet files while supporting advanced grid animation tracks:
1. **Zero Hydration Overhead** — visual states evaluate immediately on load, preventing cumulative layout shifts.
2. **Design Sophistication** — glowing outlines and shimmer sweep parameters are easily tweaked, fitting creative portfolios or visual dashboard suites.
3. **Accessibility Integrated** — focus indicator highlights, label-input bindings, and prefers-reduced-motion overrides are built into the design by default.

---

## License

Submitted under the same license as the EaseMotion CSS repository.
