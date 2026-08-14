# Documentation: Neumorphic Tier Pricing Card (#780021)

Comprehensive integration guide, accessibility setup, and usage documentation for the EaseMotion library's **Neumorphic Tier Pricing Card** component (`#780021`), fully addressing issue `#85808`.

## 🚀 Overview & Features

- **Soft UI Neumorphism:** Built using dual-directional soft drop shadows and highlight vectors for a realistic physical extruded surface look.
- **Interactive Button States:** Features pressed inset box-shadow feedback upon user interaction.
- **Accessibility Setup:** Fully supports keyboard focus states (`:focus-visible`), aria labels, and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ HTML Markup Example

```html
<div class="ease-neumorphic-pricing" aria-label="Neumorphic Pricing Card Element" tabindex="0">
    <span class="em-neu-tier">PRO TIER</span>
    <h2 class="em-inner-title">$29 / mo</h2>
    <ul class="em-neu-features">
        <li>Advanced Soft UI Shadows</li>
        <li>Hardware Accelerated</li>
        <li>Full Accessibility Setup</li>
    </ul>
    <button class="em-neu-btn" aria-label="Choose Pro Tier Plan">Select Plan</button>
</div>
