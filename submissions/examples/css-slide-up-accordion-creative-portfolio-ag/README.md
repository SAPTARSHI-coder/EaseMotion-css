# CSS Slide-Up Accordion for Creative Portfolio Layouts

A lightweight, accessible, pure HTML/CSS slide-up disclosure accordion tailored for creative portfolio showcases, service lists, and project case studies.

## Features

- **Pure HTML/CSS**: Zero JavaScript dependencies, framework overhead, or third-party libraries.
- **Slide-Up Entrance Motion**: Combines CSS `grid-template-rows` height transition with vertical `translateY` entrance animation for fluid opening.
- **Accessible & Semantic**: Built on native HTML5 `<details>` and `<summary>` elements with full keyboard operability and screen-reader disclosure state.
- **Design Tokens**: Fully integrated with EaseMotion CSS custom properties (`--ease-speed-medium`, `--ease-ease`, `--ease-radius-lg`, `--ease-shadow-md`).
- **Reduced Motion Support**: Complete support for `@media (prefers-reduced-motion: reduce)`.
- **Fully Responsive**: Optimized layout for mobile, tablet, and desktop viewports.

## Usage

Include `style.css` in your document and format accordion panels using native `<details>` structure:

```html
<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-header">
      <div class="header-left">
        <span class="item-number">01</span>
        <span class="item-title">Brand Identity & Digital Platforms</span>
      </div>
      <div class="header-right">
        <span class="item-tag">Design & Motion</span>
        <span class="toggle-icon" aria-hidden="true"></span>
      </div>
    </summary>
    <div class="accordion-body">
      <div class="accordion-content">
        <p class="content-text">
          Crafting bespoke digital experiences and interactive brand platforms.
        </p>
        <div class="content-meta">
          <span class="meta-pill">Web Architecture</span>
          <span class="meta-pill">3D Motion</span>
        </div>
      </div>
    </div>
  </details>
</div>
```

## Supported Custom Properties

| Custom Property        | Default                         | Purpose                                                |
| ---------------------- | ------------------------------- | ------------------------------------------------------ |
| `--ease-color-primary` | `#6c63ff`                       | Primary accent color for numbers and borders           |
| `--ease-color-surface` | `#151c2c`                       | Card panel background color                            |
| `--ease-color-border`  | `rgba(255, 255, 255, 0.08)`     | Default panel border color                             |
| `--ease-speed-medium`  | `300ms`                         | Transition duration for slide motion and icon rotation |
| `--ease-ease`          | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing function for smooth motion                      |
| `--ease-radius-lg`     | `1rem`                          | Border radius for panel cards                          |

## Motion & Animation Behavior

When a `<details>` element gains the `[open]` attribute, `.accordion-body` transitions `grid-template-rows` from `0fr` to `1fr` while `.accordion-content` fades in (`opacity: 0` to `1`) and slides up vertically (`transform: translateY(1rem)` to `translateY(0)`).

## Accessibility

- Keyboard focus is visually indicated with `:focus-visible` ring on summary controls.
- Keyboard interaction supported natively (`Tab` to focus, `Space`/`Enter` to toggle).
- Screen readers natively announce disclosure status.

## Reduced Motion

When `@media (prefers-reduced-motion: reduce)` is active, slide transitions and transform shifts are instantly bypassed while maintaining full interactive functionality.

## Submission Files

- `demo.html`: Clean HTML5 showcase page.
- `style.css`: Pure CSS component styling and slide-up transition engine.
- `README.md`: Component documentation.
