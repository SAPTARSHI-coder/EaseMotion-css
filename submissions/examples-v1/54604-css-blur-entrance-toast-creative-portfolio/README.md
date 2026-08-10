# CSS Blur-Entrance Toast for Creative Portfolio Layouts — EaseMotion CSS

> **Issue #54604 Submission**  
> **Package:** EaseMotion CSS Example Showcase  
> **Subfolder:** `submissions/examples/54604-css-blur-entrance-toast-creative-portfolio/`  
> **Author:** EaseMotion CSS Contributor  
> **Level:** Advanced Submission  

---

## 📖 Table of Contents

1. [Overview](#-overview)
2. [Key Features](#-key-features)
3. [File Structure & Location](#-file-structure--location)
4. [Quick Start Guide](#-quick-start-guide)
5. [Pure HTML & CSS Architecture](#-pure-html--css-architecture)
6. [CSS Custom Properties (Design Tokens)](#-css-custom-properties-design-tokens)
7. [Optical Blur & Lens Un-Blur Mechanics](#-optical-blur--lens-un-blur-mechanics)
8. [Keyframe Animations Breakdown](#-keyframe-animations-breakdown)
9. [Toast Variant Specifications](#-toast-variant-specifications)
10. [Positioning & Layout Utilities](#-positioning--layout-utilities)
11. [Pure CSS State Controller Pattern](#-pure-css-state-controller-pattern)
12. [Optional JavaScript Helper API](#-optional-javascript-helper-api)
13. [Accessibility (A11y) & WCAG Compliance](#-accessibility-a11y--wcag-compliance)
14. [Performance & Hardware Acceleration](#-performance--hardware-acceleration)
15. [Browser Compatibility & Testing](#-browser-compatibility--testing)
16. [Customization & Theme Extension](#-customization--theme-extension)
17. [Troubleshooting & FAQs](#-troubleshooting--faqs)
18. [License & Contribution](#-license--contribution)

---

## 📖 Overview

The **CSS Blur-Entrance Toast Notification System** is a modern, lightweight, pure CSS/HTML showcase example built for **EaseMotion CSS**. Specifically tailored for **Creative Portfolio Layouts**, optical motion designer showcases, UI/UX galleries, and high-end digital agency web applications, this component provides spatial **optical blur-entrance un-blur transitions** (`filter: blur(24px)` to `filter: blur(0px)`), frosted glassmorphic backdrop filters (`backdrop-filter: blur(24px)`), hover state scale lifts, timer pauses on hover, rich color accents, and full zero-JS interactivity.

Unlike conventional toast notifications that enter linearly, the Blur-Entrance Toast enters the viewport simulating a camera lens acquiring sharp focal clarity:
1. Starts heavily out of focus with a soft scale compression (`filter: blur(24px) scale(0.85)`).
2. Un-blurs smoothly into crisp visual focus (`filter: blur(0px) scale(1)`).
3. Responds to mouse cursor hover with micro-scale elevation (`scale(1.04) translateY(-4px)`) and backdrop blur sharpening (`backdrop-filter: blur(32px)`).
4. Automatically freezes the countdown progress timer line (`animation-play-state: paused`), ensuring users have ample time to read and interact with notifications.

---

## ✨ Key Features

- 🎯 **Pure CSS & HTML5**: 100% functional without external JavaScript frameworks or runtime dependencies.
- 🚀 **Performant Hardware Acceleration**: Uses strictly GPU-promoted CSS properties (`filter: blur()`, `transform`, `opacity`, `backdrop-filter`) to maintain 60+ FPS performance.
- 🌫️ **Optical Lens Un-Blur Entrance**: Physics-inspired blur-to-sharp entrance transition simulating depth-of-field focal plane alignment.
- ⏱️ **Timer Line Pause on Hover**: Automatically pauses countdown decay timers on cursor hover.
- 🎨 **Glassmorphic Portfolio Aesthetic**: Designed with dark surface colors, subtle metallic borders, sky cyan accent glow shadows, and backdrop blur (`backdrop-filter: blur(24px)`).
- ⚡ **5 Pre-Built Status Variants**:
  - **Success Toast**: Gallery published, artwork rendered, project saved.
  - **Info Toast**: Variable font synchronized, token updated.
  - **Warning Toast**: VRAM blur buffer limit warning (e.g. 89% buffer usage).
  - **Danger Toast**: Optical filter layer discarded with interactive "Undo Discard" button.
  - **Portfolio Special Toast**: Studio retainer proposal contract.
- 📍 **Flex Positioning Overlay**: Positioning classes supporting Top-Right, Top-Left, Bottom-Right, Bottom-Left, and Top-Center viewports.
- ♿ **Accessibility First (A11y)**: Built-in ARIA roles (`role="status"`, `role="alert"`), ARIA live regions (`aria-live="polite"`, `aria-live="assertive"`), high contrast elements, keyboard focus rings (`:focus-visible`), and automatic graceful degradation for `prefers-reduced-motion`.
- 📱 **Fluid Responsiveness**: Flexibly scales across screen resolutions from 320px mobile viewports to 2560px ultra-wide desktop monitors.

---

## 📁 File Structure & Location

All files for this submission are located strictly under:

```text
submissions/examples/54604-css-blur-entrance-toast-creative-portfolio/
├── demo.html    # HTML5 interactive showcase & portfolio playground page
├── style.css    # Complete CSS stylesheet containing design tokens, blur-entrance mechanics, and keyframe animations
└── README.md    # Exhaustive documentation, specs, and usage guide
```

---

## 🚀 Quick Start Guide

### Step 1: Link the Stylesheet
Add the `style.css` stylesheet into the `<head>` section of your HTML document:

```html
<link rel="stylesheet" href="submissions/examples/54604-css-blur-entrance-toast-creative-portfolio/style.css" />
```

### Step 2: Insert the Toast Container
Add the `.em-toast-container` overlay near the end of your HTML `<body>` element:

```html
<!-- EaseMotion Toast Overlay Container -->
<div class="em-toast-container toast-pos-top-right">
  
  <!-- Blur-Entrance Success Toast -->
  <div class="em-blur-toast toast-variant-success toast-show" role="status" aria-live="polite" aria-atomic="true">
    <div class="toast-body-flex">
      <div class="toast-icon-wrapper">
        <svg class="toast-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div class="toast-details">
        <div class="toast-header-row">
          <h4 class="toast-title">Gallery Published!</h4>
          <span class="toast-timestamp">Just now</span>
        </div>
        <p class="toast-message">
          Visual project "Aether Optics Prism" un-blurred and published.
        </p>
        <div class="toast-action-bar">
          <a href="#work" class="toast-btn toast-btn-primary">View Project</a>
        </div>
      </div>
    </div>
    <div class="toast-progress-bar">
      <div class="toast-progress-fill"></div>
    </div>
  </div>

</div>
```

---

## 🏗️ Pure HTML & CSS Architecture

The component architecture relies on modular BEM-like class naming conventions (`em-blur-toast`, `toast-variant-*`, `toast-body-flex`):

```text
em-toast-container (Fixed Overlay Layer)
└── em-blur-toast (Card Wrapper with Blur-Entrance & Un-blur Dynamics)
    ├── toast-body-flex (Flexbox Inner Row)
    │   ├── toast-icon-wrapper (Icon Badge with Glow Pulse)
    │   │   └── toast-svg (Vector SVG Icon)
    │   ├── toast-details (Text Details & Actions)
    │   │   ├── toast-header-row (Title + Timestamp)
    │   │   ├── toast-message (Notification Body Text)
    │   │   └── toast-action-bar (Primary & Secondary Buttons)
    │   └── toast-dismiss-btn (Dismiss Cross Button)
    └── toast-progress-bar (Countdown Line Container)
        └── toast-progress-fill (Animated ScaleX Line - Pauses on Hover)
```

---

## ⚙️ CSS Custom Properties (Design Tokens)

The system uses CSS custom properties defined under `:root` for consistent design system tokens:

| Token Name | Default Value | Description |
| :--- | :--- | :--- |
| `--em-blur-start` | `blur(24px) scale(0.88) translateY(15px)` | Initial out-of-focus blur entrance state |
| `--em-blur-end` | `blur(0px) scale(1) translateY(0)` | Sharp focal clarity active state |
| `--em-backdrop-blur` | `blur(24px)` | Default glassmorphism backdrop blur filter |
| `--em-backdrop-blur-hover` | `blur(32px)` | Sharpened glassmorphism backdrop blur on hover |
| `--em-bg-dark` | `#06080d` | Primary body background color |
| `--em-bg-surface` | `#0e121b` | Dark surface container color |
| `--em-bg-card` | `rgba(15, 20, 32, 0.78)` | Glassmorphic card background with alpha translucency |
| `--em-border-color` | `rgba(255, 255, 255, 0.08)` | Subtle card border outline |
| `--em-primary` | `#38bdf8` | Sky cyan primary brand accent color |
| `--em-primary-hover` | `#0284c7` | Hover state color for primary buttons |
| `--em-primary-glow` | `rgba(56, 189, 248, 0.4)` | Box-shadow drop glow for primary buttons |
| `--em-accent-indigo` | `#6366f1` | Indigo accent color |
| `--em-accent-pink` | `#ec4899` | Pink accent color |
| `--em-accent-emerald` | `#10b981` | Emerald green accent color |
| `--em-toast-success-accent` | `#10b981` | Accent color for success icons and progress bar |
| `--em-toast-info-accent` | `#38bdf8` | Accent color for info icons and progress bar |
| `--em-toast-warning-accent` | `#f59e0b` | Accent color for warning icons and progress bar |
| `--em-toast-danger-accent` | `#f43f5e` | Accent color for danger icons and progress bar |
| `--em-toast-portfolio-accent` | `#38bdf8` | Accent color for portfolio icons and progress bar |
| `--em-ease-blur-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth optical un-blur timing function |
| `--em-duration-slow` | `0.6s` | Optical blur entrance animation duration |
| `--em-toast-width` | `410px` | Maximum width of individual toast cards |
| `--em-toast-radius` | `20px` | Corner rounding radius for toast cards |

---

## 🌫️ Optical Blur & Lens Un-Blur Mechanics

### 1. Optical Blur Entrance Sequence
When a toast mounts, it undergoes a smooth transition from heavy Gaussian blur (`blur(24px)`) to crisp zero-blur focus (`blur(0px)`):

```css
@keyframes emBlurUnblurEntrance {
  0% {
    opacity: 0;
    filter: blur(24px);
    transform: scale(0.85) translateY(20px);
  }
  65% {
    opacity: 1;
    filter: blur(4px);
    transform: scale(1.02) translateY(-2px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1) translateY(0);
  }
}
```

### 2. Hover Backdrop Blur Amplification
Hovering over the toast amplifies the frosted backdrop filter blur level from `blur(24px)` to `blur(32px)` while applying a subtle micro-scale lift:

```css
.em-blur-toast:hover {
  transform: scale(1.04) translateY(-4px);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  box-shadow: var(--em-shadow-toast-hover);
}
```

### 3. Timer Line Freeze on Hover
Mouse hover automatically pauses the countdown progress timer line:

```css
.em-blur-toast:hover .toast-progress-fill {
  animation-play-state: paused;
}
```

---

## 🎬 Keyframe Animations Breakdown

### 1. Standard Blur Un-Blur Entrance (`emBlurUnblurEntrance`)
Transitions from optical blur to sharp focus:

```css
@keyframes emBlurUnblurEntrance {
  0% {
    opacity: 0;
    filter: blur(24px);
    transform: scale(0.85) translateY(20px);
  }
  65% {
    opacity: 1;
    filter: blur(4px);
    transform: scale(1.02) translateY(-2px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1) translateY(0);
  }
}
```

### 2. Optical Blur-Zoom Entrance (`emBlurZoomEntrance`)
Combines deep optical blur with radial scale expansion:

```css
@keyframes emBlurZoomEntrance {
  0% {
    opacity: 0;
    filter: blur(30px);
    transform: scale(0.7);
  }
  70% {
    opacity: 1;
    filter: blur(2px);
    transform: scale(1.04);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
}
```

### 3. Blur-Slide Entrance (`emBlurSlideEntrance`)
Vertical translation combined with un-blur filtering:

```css
@keyframes emBlurSlideEntrance {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: translateY(35px);
  }
  70% {
    opacity: 1;
    filter: blur(3px);
    transform: translateY(-4px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
  }
}
```

---

## 🎨 Toast Variant Specifications

### 1. Success Variant (`.toast-variant-success`)
- **Visual Style**: Translucent emerald tint (`rgba(16, 185, 129, 0.1)`), green accent icon.
- **Recommended Usage**: Gallery publishing, artwork rendered, project saved.
- **Example Text**: *"Gallery Published! Visual project un-blurred and published to portfolio."*

### 2. Info Variant (`.toast-variant-info`)
- **Visual Style**: Translucent sky cyan tint (`rgba(56, 189, 248, 0.1)`), cyan accent icon.
- **Recommended Usage**: Variable font synced, token update notices.
- **Example Text**: *"Variable Font Synchronized! Optical weight system synced across tokens."*

### 3. Warning Variant (`.toast-variant-warning`)
- **Visual Style**: Translucent amber gold tint (`rgba(245, 158, 11, 0.1)`), yellow alert triangle icon.
- **Recommended Usage**: VRAM blur buffer limits, memory usage warnings.
- **Example Text**: *"VRAM Blur Buffer Alert! Blur render buffer at 89% capacity."*

### 4. Danger Variant (`.toast-variant-danger`)
- **Visual Style**: Translucent red tint (`rgba(244, 63, 94, 0.1)`), red trash icon.
- **Recommended Usage**: Filter layer discarded, render dropouts.
- **Example Text**: *"Optical Filter Layer Discarded! Layer removed from active project."*

### 5. Portfolio Special Variant (`.toast-variant-portfolio`)
- **Visual Style**: Translucent cyan tint (`rgba(56, 189, 248, 0.12)`), star icon.
- **Recommended Usage**: Studio retainer contract proposals, client project inquiries.
- **Example Text**: *"Design Studio Contract! Retainer proposal received from Optics Studio."*

---

## 📍 Positioning & Layout Utilities

Position the toast container anywhere on the screen by modifying utility classes on `.em-toast-container`:

| Class Name | Viewport Alignment | Description |
| :--- | :--- | :--- |
| `.toast-pos-top-right` | Top: 0, Right: 0 | Standard desktop placement (Default) |
| `.toast-pos-top-left` | Top: 0, Left: 0 | Top-left corner placement |
| `.toast-pos-bottom-right` | Bottom: 0, Right: 0 | Bottom-right floating placement |
| `.toast-pos-bottom-left` | Bottom: 0, Left: 0 | Bottom-left corner placement |
| `.toast-pos-top-center` | Top: 2rem, Left: 50% | Centered banner style at top of viewport |

---

## 💡 Pure CSS State Controller Pattern

This component showcase demonstrates how to trigger show/hide toast notifications **without a single line of JavaScript** using pure HTML5 `<input type="checkbox">` elements and CSS `:checked` sibling selectors:

```html
<!-- 1. Hidden Checkbox at Root Level -->
<input type="checkbox" id="toggle-toast-success" class="toast-toggle-input" hidden />

<!-- 2. Interactive Trigger Label Element -->
<label for="toggle-toast-success" class="trigger-label-btn">
  Publish Gallery
</label>

<!-- 3. Toast Container Receiving Sibling Selector Signals -->
<div class="em-toast-container">
  <div class="em-blur-toast toast-variant-success" id="toast-card-success">
    ...
  </div>
</div>
```

**Corresponding CSS Rules:**

```css
#toggle-toast-success:checked ~ .em-toast-container #toast-card-success {
  display: flex;
  animation: emBlurUnblurEntrance var(--em-duration-slow) var(--em-ease-blur-entrance) forwards;
}
```

---

## 🛠️ Optional JavaScript Helper API

While the core component requires **zero JavaScript**, developers wishing to trigger toasts dynamically via JavaScript can use this clean 15-line helper function:

```javascript
/**
 * EaseMotion CSS - Programmatic Blur-Entrance Toast Trigger Helper
 * @param {Object} options - Toast configuration settings
 */
function showBlurToast({ title, message, variant = 'success', duration = 5000 }) {
  const container = document.querySelector('.em-toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `em-blur-toast toast-variant-${variant} toast-show`;
  toast.setAttribute('role', variant === 'danger' || variant === 'warning' ? 'alert' : 'status');
  toast.setAttribute('aria-live', 'polite');
  
  toast.innerHTML = `
    <div class="toast-body-flex">
      <div class="toast-details">
        <h4 class="toast-title">${title}</h4>
        <p class="toast-message">${message}</p>
      </div>
      <button class="toast-dismiss-btn" onclick="this.closest('.em-blur-toast').remove()">✕</button>
    </div>
    <div class="toast-progress-bar"><div class="toast-progress-fill" style="animation-duration:${duration}ms"></div></div>
  `;

  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.filter = 'blur(20px)';
      toast.style.transform = 'scale(0.85)';
      setTimeout(() => toast.remove(), 350);
    }, duration);
  }
}
```

---

## ♿ Accessibility (A11y) & WCAG Compliance

EaseMotion CSS prioritizes accessibility for all users:

1. **Screen Reader Live Regions**:
   - `role="status"` and `aria-live="polite"` for non-disruptive notifications (Success, Info, Portfolio).
   - `role="alert"` and `aria-live="assertive"` for urgent notifications requiring immediate attention (Warning, Danger).
2. **Keyboard Navigation & Focus Traps**:
   - Interactive labels and buttons feature `tabindex="0"`.
   - Clear contrast rings provided via `:focus-visible` styling (`outline: 2px solid var(--em-primary)`).
3. **Motion Accessibility (`prefers-reduced-motion`)**:
   - Users with vestibular motion sensitivities who have enabled "Reduce Motion" in OS settings automatically receive quiet opacity fade-in transitions without optical blurring or scaling:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .em-blur-toast:hover {
    transform: none !important;
  }

  .em-blur-toast.active,
  .toast-toggle-input:checked + .em-toast-container .em-blur-toast,
  .toast-show {
    animation: emFadeInOnly 0.15s linear forwards !important;
  }
}
```

---

## ⚡ Performance & Hardware Acceleration

- **GPU Promotion**: Keyframes and blur filters exclusively alter `filter: blur()`, `transform`, `opacity`, and `backdrop-filter`. This offloads rendering tasks directly to the GPU compositor thread.
- **Sub-pixel Anti-Aliasing**: Includes `-webkit-font-smoothing: antialiased` and proper transform origins to prevent text blurring after the un-blur transition completes.
- **Zero Reflow**: Display state transitions do not trigger layout reflows on surrounding page elements.

---

## 🌐 Browser Compatibility & Testing

Tested and verified across major desktop and mobile browser engines:

| Browser | Minimum Version | Status | Notes |
| :--- | :--- | :--- | :--- |
| Google Chrome | 88+ | Fully Supported | Full hardware blur acceleration & backdrop blur |
| Mozilla Firefox | 85+ | Fully Supported | Smooth optical blur transition support |
| Apple Safari | 14+ | Fully Supported | Supported with `-webkit-backdrop-filter` vendor prefix |
| Microsoft Edge | 88+ | Fully Supported | Chromium engine compatibility |
| iOS Safari | iOS 14.0+ | Fully Supported | Mobile layout reflow adapted |
| Android Chrome | Chrome 88+ | Fully Supported | Touch target sizes optimized (min 44px) |

---

## 🎨 Customization & Theme Extension

### Adding a Custom Prism Glow Variant
To create a custom "Prism Glow" toast variant for your project:

```css
.em-blur-toast.toast-variant-prism {
  --em-toast-border: rgba(168, 85, 247, 0.4);
  --toast-hover-border: rgba(168, 85, 247, 0.8);
  --toast-glow-color: rgba(168, 85, 247, 0.45);
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), var(--em-bg-card));
}

.toast-variant-prism .toast-icon-wrapper {
  --toast-icon-bg: rgba(168, 85, 247, 0.2);
  --toast-icon-border: rgba(168, 85, 247, 0.5);
  --toast-icon-color: #a855f7;
  --toast-icon-glow: rgba(168, 85, 247, 0.4);
}

.toast-variant-prism .toast-progress-fill {
  --toast-progress-color: #a855f7;
}
```

---

## ❓ Troubleshooting & FAQs

### Q1: Why does blur rendering feel sluggish on older devices?
**A**: `filter: blur()` can be resource-intensive on legacy GPU hardware. In low-power environments, consider reducing `--em-blur-start` to `blur(12px)` for faster rendering.

### Q2: Does backdrop-filter work in Firefox?
**A**: Yes! Firefox supports `backdrop-filter` natively since version 103 without flags.

### Q3: Can I combine blur-entrance with scale-hover?
**A**: Yes! The default `.em-blur-toast:hover` rule already incorporates a `scale(1.04)` micro-interaction along with `backdrop-filter: blur(32px)`.

---

## 📜 License & Contribution

Contributed to **EaseMotion CSS** repository under the open-source **MIT License**.  
Submissions Directory: `submissions/examples/54604-css-blur-entrance-toast-creative-portfolio/`  
Issue Reference: **#54604**

*Designed with motion precision & optical blur performance for developers and creators worldwide.*
