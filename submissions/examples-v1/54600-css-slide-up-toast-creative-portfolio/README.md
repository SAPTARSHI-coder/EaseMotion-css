# CSS Slide-Up Toast for Creative Portfolio Layouts (#54600)

A modern, lightweight, pure CSS/HTML Toast Notification system featuring smooth spring keyframe slide-up animations, 6 customizable status variants, countdown timer progress bars, and high-end glassmorphism styling crafted specifically for Creative Portfolio layouts.

---

## 🚀 Overview & Key Highlights

1. **What does this do?**
   Provides lightweight, non-intrusive, pure CSS-animated notification cards that slide up smoothly from the bottom of the viewport with cubic-bezier spring physics when triggered in creative portfolio layouts.

2. **How is it used?**
   Place your slide-up toast items inside a fixed stack container:

   ```html
   <div class="toast-stack-container" role="status" aria-live="polite">
     <div class="toast-item toast-item--success">
       <div class="toast-icon-badge">
         <!-- Icon SVG -->
       </div>
       <div class="toast-content">
         <strong class="toast-head">Inquiry Received!</strong>
         <p class="toast-text">Your message was sent successfully.</p>
       </div>
       <label for="toast-success" class="toast-close-btn" aria-label="Dismiss notification">✕</label>
       <div class="toast-timer-bar toast-timer-bar--success"></div>
     </div>
   </div>
   ```

3. **Why is it useful?**
   - **Zero JavaScript Overhead**: Uses pure HTML checkbox `:checked` sibling rules (`#toast-trigger:checked ~ .toast-stack-container #toast-card`) to handle visibility and entrance animations without any external JS dependencies or runtime overhead.
   - **60FPS Performant Motion**: Leverages GPU-accelerated CSS properties (`transform: translateY()`, `opacity`, `scale()`) preventing layout repaints or jank.
   - **Editorial Dark Portfolio Aesthetic**: Tailored with dark glassmorphism backdrops (`backdrop-filter: blur(24px)`), luminous accent borders, status icon badges, and progress lines.
   - **Full Accessibility Compliance**: Includes semantic ARIA markup (`role="status"`, `role="alert"`, `aria-live="polite"`), focusable close targets (`:focus-visible`), and automatic `@media (prefers-reduced-motion: reduce)` fallbacks.

---

## 🎨 CSS Custom Properties (Design Tokens)

The component utilizes scoped CSS custom properties that can be overridden at the `:root` level:

| Property Name | Default Value | Description |
|---|---|---|
| `--toast-success-bg` | `rgba(16, 185, 129, 0.14)` | Background tint for success toast variant |
| `--toast-success-border` | `rgba(16, 185, 129, 0.4)` | Border accent color for success variant |
| `--toast-success-accent` | `#34d399` | Accent text/icon color for success variant |
| `--toast-info-accent` | `#38bdf8` | Accent color for informational notifications |
| `--toast-warning-accent` | `#fbbf24` | Accent color for warning/storage alerts |
| `--toast-action-accent` | `#c084fc` | Accent color for interactive action toasts |
| `--toast-error-accent` | `#fb7185` | Accent color for network/error alerts |
| `--toast-promo-accent` | `#f472b6` | Accent color for promotional deal toasts |
| `--duration-normal` | `420ms` | Duration for slide-up entrance animation |
| `--ease-slide` | `cubic-bezier(0.16, 1, 0.3, 1)` | Custom cubic-bezier spring easing curve |
| `--shadow-toast` | `0 24px 48px -12px ...` | Elevation drop-shadow for floating stack |

---

## 🛠️ Variants & Included Features

This showcase example includes 6 distinct slide-up toast notification cards:

1. **Success Toast**: Triggered for successful project brief submissions or form submissions.
2. **Info Toast**: Confirmation for media kit links or URL copy events.
3. **Warning Toast**: Storage limit and asset quota warnings.
4. **Action Toast**: Includes an interactive "Undo Action" button for item archival.
5. **Error Toast**: System/network failure alerts with retry messaging.
6. **Promotional Toast**: Special discount offers and call-to-action badges.

---

## ♿ Accessibility & Motion System Guidelines

- **Screen Reader Support**: Toast cards use `role="status"` or `role="alert"` combined with `aria-live="polite"` to communicate updates to assistive technologies.
- **Keyboard Navigation**: Close controls and action buttons feature high-contrast focus rings (`:focus-visible`).
- **Reduced Motion Fallback**: When `@media (prefers-reduced-motion: reduce)` is detected, spring transforms and timer animations are disabled, defaulting to an instant opacity fade.

---

## 📱 Responsive Layout Support

- **Desktop (1025px+)**: Positioned as a floating stack in the bottom-right corner.
- **Mobile & Tablet (<768px)**: Automatically centers at the bottom of the screen spanning `calc(100vw - 2.5rem)` with touch-friendly hit areas.
