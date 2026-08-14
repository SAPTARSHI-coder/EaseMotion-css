# CSS-only Accordion Component

A fully responsive, accessible, and performant pure CSS accordion component utilizing semantic `<details>` and `<summary>` tags with frosted glassmorphism card styling for the EaseMotion CSS library.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native HTML5 `<details>` and `<summary>` elements, eliminating the need for scripting.
- **Smooth Expand Transitions:** Clean icon rotation and container expansion states.
- **Dark Mode Compatible & Accessible:** Built with proper landmark regions (`role="region"`), keyboard accessibility, and focus states out-of-the-box.

## 🛠️ Usage Example

```html
<div class="em-accordion-card" role="region" aria-label="CSS-only Accordion Showcase" tabindex="0">
    <span class="em-card-badge">COMPONENTS</span>
    <h2 class="em-card-title">CSS-only Accordion</h2>
    <div class="em-accordion-wrapper">
        <details class="em-accordion-item">
            <summary class="em-accordion-header">Expand Section</summary>
            <div class="em-accordion-content">
                <p>Expandable content goes here.</p>
            </div>
        </details>
    </div>
</div>
