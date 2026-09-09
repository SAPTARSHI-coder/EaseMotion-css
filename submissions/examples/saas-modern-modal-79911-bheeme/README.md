# CSS-only SaaS Modern Modal Component

A pure HTML and CSS modal dialog featuring modern SaaS design trends including dark slate palettes, glassmorphism backdrop blur, micro-interactions, smooth scale transitions, accessibility attributes, and full responsiveness.

---

### 1. What does this do?
This component renders a fully functional, animated modal dialog without writing a single line of JavaScript by leveraging the HTML checkbox state pattern (`:checked` pseudo-class) combined with CSS transitions and backdrop filters.

---

### 2. How is it used?
Include the HTML markup with a hidden checkbox input and matching `<label>` elements to toggle state:

```html
<!-- Trigger Button -->
<label for="saas-modal-toggle" class="btn btn-primary" tabindex="0" role="button">
  Upgrade Workspace
</label>

<!-- Hidden Checkbox Toggle -->
<input type="checkbox" id="saas-modal-toggle" class="modal-checkbox" hidden>

<!-- Modal Overlay & Content -->
<div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="saas-modal-title">
  <label for="saas-modal-toggle" class="backdrop-dismiss" aria-label="Close modal"></label>
  
  <div class="modal-card">
    <label for="saas-modal-toggle" class="modal-close" aria-label="Close modal" tabindex="0" role="button">✕</label>
    <div class="modal-header">
      <h2 id="saas-modal-title" class="modal-title">Unlock Enterprise Features</h2>
    </div>
    <!-- Modal content and action buttons -->
  </div>
</div>
```

Include `style.css` in your project stylesheet.

---

### 3. Why is it useful?
- **Zero JavaScript Overhead:** Lightweight performance with native CSS engine animation rendering.
- **SaaS Modern Aesthetics:** Dark theme background, purple/indigo gradient CTA, glassmorphism overlays, crisp typography.
- **Accessibility Ready:** Supports keyboard activation, ARIA modal attributes (`role="dialog"`, `aria-modal="true"`), focus states, and respects `prefers-reduced-motion`.
- **Fully Responsive:** Adapts cleanly to all mobile, tablet, and desktop viewports.
