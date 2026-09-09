# Documentation: Claymorphism Dropdown Split Button (#950588)

Comprehensive integration guide, theming configuration, and usage documentation for the EaseMotion library's **Claymorphism Dropdown Split Button** component (`#950588`), fully addressing issue `#85832`.

## 🚀 Overview & Features

- **Claymorphism Aesthetic:** Distinct soft 3D extruded look achieved via dual-layered drop shadows and inset highlights.
- **Theming & Custom CSS Properties:** Easily customizable through CSS variables for shadows, backgrounds, and primary accent colors.
- **Accessibility:** Fully supports ARIA attributes (`aria-expanded`, `aria-haspopup`, `role="menu"`), keyboard focus outlines, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ HTML Markup Example

```html
<div class="ease-clay-split-dropdown" aria-label="Claymorphism Split Dropdown Element" tabindex="0">
    <button class="em-clay-main-btn" aria-label="Main Action Button">Action</button>
    <button class="em-clay-toggle-btn" aria-expanded="false" aria-haspopup="true" aria-label="Toggle Dropdown Menu">
        <span class="em-arrow">▼</span>
    </button>
    <div class="em-clay-menu" role="menu">
        <a href="#" class="em-clay-item" role="menuitem">Theme Options</a>
        <a href="#" class="em-clay-item" role="menuitem">Custom Overrides</a>
        <a href="#" class="em-clay-item" role="menuitem">Accessibility Setup</a>
    </div>
</div>
