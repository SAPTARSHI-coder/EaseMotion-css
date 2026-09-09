# Documentation: Neumorphic Button - Advanced Styling (#66309)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Neumorphic Button (Advanced Styling)** component (`#66309`), fully addressing issue `#81631`.

## 🚀 Overview & Features

- **Advanced Soft UI (Neumorphism):** Utilizes dual light and dark box-shadows (`8px 8px 16px #cbd5e1`, `-8px -8px 16px #ffffff`) to create an extruded physical button effect.
- **Inset Active State:** Smoothly transitions to inset shadows (`inset 4px 4px 8px`) upon click/focus interactions.
- **Accessibility Setup:** High-contrast focus rings and keyboard interaction guidance.

## 🛠️ Copy-Paste HTML Markup Example

```html
<button class="ease-neumorphic-button em-btn-advanced" role="button" aria-label="Advanced Neumorphic Action Button" tabindex="0" autofocus>
    <span class="em-btn-text">ADVANCED SOFT UI</span>
</button>
