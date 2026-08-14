# Documentation: Neumorphic Tier Pricing Card - Quickstart Guide (#877316)

Comprehensive quickstart guide, markup examples, and usage documentation for the EaseMotion library's **Neumorphic Tier Pricing Card** component (`#877316`), fully addressing issue `#85806`.

## 🚀 Quickstart Overview

- **Instant Integration:** Copy-paste ready markup and soft UI neumorphic styling vectors.
- **Custom CSS Property Overrides:** Easily adjust theme tokens and shadows.
- **Accessibility Setup:** Built-in keyboard focus states (`:focus-visible`), aria labels, and `@media (prefers-reduced-motion: reduce)` support.

## 🛠️ HTML Markup Example

```html
<div class="ease-neumorphic-pricing" aria-label="Neumorphic Pricing Card Element" tabindex="0">
    <span class="em-neu-tier">QUICKSTART TIER</span>
    <h2 class="em-inner-title">$19 / mo</h2>
    <ul class="em-neu-features">
        <li>Instant Quickstart Setup</li>
        <li>Soft UI Extruded Shadows</li>
        <li>Keyboard Navigation Ready</li>
    </ul>
    <button class="em-neu-btn" aria-label="Get Started Quickstart Plan">Get Started</button>
</div>
