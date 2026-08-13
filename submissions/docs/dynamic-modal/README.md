# Dynamic Modal Component

A fully responsive, accessible, and high-performance pure CSS dynamic modal dialog component featuring frosted glassmorphism card styling, Material Design elevation shadows, and smooth scaling preview transitions for the EaseMotion library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scaling transitions, flexbox layouts, and custom shadow filters.
- **Material Design Aesthetic:** Indigo-purple glowing borders and deep drop shadows optimized for modern dark mode interfaces.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), modal dialog semantics (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<div class="em-modal-card" role="region" aria-label="Dynamic Modal Showcase" tabindex="0">
    <span class="em-card-badge">DOCUMENTATION</span>
    <h2 class="em-card-title">Dynamic Modal</h2>
    <p class="em-card-desc">A high-performance pure CSS dynamic modal component.</p>
    <div class="em-modal-preview" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="em-modal-header">
            <h3 id="modal-title" class="em-modal-heading">Dynamic Dialog</h3>
            <span class="em-modal-close" aria-label="Close modal">&times;</span>
        </div>
        <p class="em-modal-body">Dynamic modal component layer initialized successfully.</p>
    </div>
</div>
