# Interactive Modal Component

A fully responsive, accessible, and performant pure CSS modal dialog component featuring frosted glassmorphism card styling, neon pink accent borders, and smooth scale-in preview transitions for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scaling transitions, flexbox layouts, and custom shadow filters.
- **Neon Dialog Aesthetic:** Hot pink glowing borders and deep drop shadows optimized for dark mode interfaces.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), modal dialog semantics (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<div class="em-modal-card" role="region" aria-label="Interactive Modal Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">Interactive Modal</h2>
    <p class="em-card-desc">A high-performance pure CSS modal dialog component.</p>
    <div class="em-modal-preview" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="em-modal-header">
            <h3 id="modal-title" class="em-modal-heading">System Alert</h3>
            <span class="em-modal-close" aria-label="Close modal">&times;</span>
        </div>
        <p class="em-modal-body">Modal dialogue protocols engaged successfully.</p>
    </div>
</div>
