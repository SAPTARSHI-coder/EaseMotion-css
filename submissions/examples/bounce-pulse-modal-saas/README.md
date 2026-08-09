# CSS Bounce-Pulse Modal — SaaS Showcase Layouts

A lightweight, pure CSS modal component featuring spring-bounce entrance physics and an ambient pulse attention glow, designed specifically for modern SaaS Showcase interface layouts. Zero JavaScript required.

---

## Quick Q&A

1. **What does this do?**  
   It provides an interactive, pure CSS modal with an elastic bounce-in entrance and a continuous ambient pulsing glow effect to highlight high-conversion SaaS offers, pricing upgrades, and feature announcements.

2. **How is it used?**  
   Bind a checkbox input `<input type="checkbox" id="modal-toggle" class="modal-toggle-checkbox">` to a trigger `<label for="modal-toggle">` and apply `.modal-card` with bounce & pulse keyframes inside `.modal-overlay`.

3. **Why is it useful?**  
   It delivers dynamic, hardware-accelerated animations for SaaS conversion flows while adhering to EaseMotion CSS's zero-JS, lightweight, accessibility-first philosophy.

---

## Key Features

- **Zero JavaScript Dependencies**: Operates entirely via pure HTML5 `<input type="checkbox">` toggling and CSS `:target` pseudo-class fallback.
- **Spring Bounce Entrance Physics**: Uses cubic-bezier easing to create an eye-catching, elastic scale & translate bounce animation when revealed.
- **Ambient Pulse Glow**: Keeps user focus centered on SaaS conversion modals via continuous subtle box-shadow and border breathing animations.
- **SaaS Showcase Layout**: Out-of-the-box layout for Pro tier upgrades, pricing badges, feature checklists, and primary/secondary CTAs.
- **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop viewports.
- **Accessibility & Motion Preference**: Built-in support for `@media (prefers-reduced-motion: reduce)` which cleanly disables heavy movement for users who prefer minimal motion.

---

## Included Files

- `demo.html` — Clean, self-contained HTML5 showcase page
- `style.css` — Pure CSS stylesheet with custom properties, responsive breakpoints, and keyframe animations
- `README.md` — Complete documentation, usage guidelines, and CSS custom property references

---

## HTML Usage Example

```html
<!-- Hidden Checkbox Controller -->
<input
  type="checkbox"
  id="saas-modal-toggle"
  class="modal-toggle-checkbox"
  hidden
/>

<!-- Open Trigger Button -->
<label for="saas-modal-toggle" class="btn btn-trigger">
  🚀 Upgrade to SaaS Pro
</label>

<!-- Modal Overlay & Card -->
<div
  class="modal-overlay"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <label
    for="saas-modal-toggle"
    class="modal-backdrop"
    aria-label="Close modal"
  ></label>

  <div class="modal-card">
    <label for="saas-modal-toggle" class="modal-close-btn" aria-label="Close"
      >&times;</label
    >

    <div class="modal-header">
      <span class="modal-badge pulse-badge">⚡ Limited Offer</span>
      <h2 id="modal-title" class="modal-title">Unlock SaaS Pro</h2>
      <p class="modal-description">Supercharge your team's workflow today.</p>
    </div>

    <div class="modal-footer">
      <button class="btn btn-primary pulse-cta-btn">Start Free Trial</button>
      <label for="saas-modal-toggle" class="btn btn-secondary"
        >Maybe Later</label
      >
    </div>
  </div>
</div>
```

---

## CSS Custom Properties

```css
:root {
  --bg-dark: #0b0f19;
  --bg-card: rgba(17, 24, 39, 0.92);
  --bg-modal-box: rgba(30, 41, 59, 0.7);
  --border-card: rgba(99, 102, 241, 0.25);

  --accent-primary: #6366f1;
  --accent-gradient: linear-gradient(
    135deg,
    #6366f1 0%,
    #8b5cf6 50%,
    #d946ef 100%
  );
  --accent-glow: rgba(99, 102, 241, 0.35);
  --accent-pulse: rgba(139, 92, 246, 0.5);

  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-accent: #a5b4fc;
  --success-color: #10b981;
}
```

---

## Accessibility & Reduced Motion

Supports accessibility standard `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
