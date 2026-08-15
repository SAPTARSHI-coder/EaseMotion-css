# Documentation: Minimalist Modal - Advanced Styling (#53785)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Minimalist Modal (Advanced Styling)** component (`#53785`), fully addressing issue `#81637`.

## 🚀 Overview & Features

- **Advanced Modifier Styling:** Utilizes the `.em-modal-advanced` modifier class for enhanced cyan-to-emerald neon glows and deeper glassmorphism backdrop blur.
- **Accessible Dialog Attributes:** Built with semantic ARIA roles (`role="dialog"`, `aria-modal="true"`) and direct labeling (`aria-labelledby`, `aria-describedby`).
- **Keyboard Navigation & Focus Control:** Strict `:focus-visible` outlines and focus-ready action buttons.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-minimalist-modal em-modal-advanced" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc" tabindex="0">
    <div class="em-modal-content">
        <span class="em-modal-badge">ADVANCED DIALOG</span>
        <h2 id="modal-title" class="em-modal-inner-title">Advanced Theme Modal</h2>
        <p id="modal-desc" class="em-modal-inner-text">Featuring advanced backdrop blur, glowing cyan-to-emerald gradient borders, and refined modifier styling.</p>
        <div class="em-modal-actions">
            <button class="em-modal-btn em-modal-btn-glow" autofocus>Proceed</button>
            <button class="em-modal-btn em-modal-btn-subtle">Dismiss</button>
        </div>
    </div>
</div>
