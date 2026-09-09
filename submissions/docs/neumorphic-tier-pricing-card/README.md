# Documentation: Neumorphic Tier Pricing Card - Theming Configuration (#820483)

Comprehensive integration guide, theming configuration, and usage documentation for the EaseMotion library's **Neumorphic Tier Pricing Card** component (`#820483`), fully addressing issue `#85807`.

## 🚀 Overview & Features

- **Soft UI Theming:** Realistic extruded surface styling powered by customized dual-directional light/dark box shadows.
- **Custom CSS Variables:** Easily adjust color tokens, font sizes, and shadow depth vectors.
- **Accessibility Setup:** Built-in keyboard focus states (`:focus-visible`), aria labels, and `@media (prefers-reduced-motion: reduce)` support.

## 🛠️ HTML Markup Example

```html
<div class="ease-neumorphic-pricing" aria-label="Neumorphic Pricing Card Element" tabindex="0">
    <span class="em-neu-tier">ENTERPRISE TIER</span>
    <h2 class="em-inner-title">$99 / mo</h2>
    <ul class="em-neu-features">
        <li>Custom Soft UI Themes</li>
        <li>Configurable CSS Properties</li>
        <li>Full Keyboard Accessibility</li>
    </ul>
    <button class="em-neu-btn" aria-label="Choose Enterprise Tier Plan">Configure Plan</button>
</div>
