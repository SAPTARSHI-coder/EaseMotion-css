# Neumorphic Smart Home Thermostat Dial (GSSoC 2026)

## 1. What does this do?
The **Neumorphic Smart Home Thermostat Dial** provides a Soft UI neumorphic climate control widget featuring dual inset and extruded drop shadows (`box-shadow`), a glowing temperature arc indicator ring, and tactile pressed-state micro-animations (`:active` inset transformation).

## 2. How is it used?
Include the CSS file in your HTML project:
```html
<link rel="stylesheet" href="style.css">
```
Structure your thermostat component using `.outer-dial`, `.inner-dial`, and `.neu-btn` elements:
```html
<div class="thermostat-card">
  <div class="outer-dial">
    <div class="inner-dial">...</div>
  </div>
  <div class="thermostat-controls">...</div>
</div>
```

## 3. Why is it useful?
- **Tactile Soft UI Aesthetics**: Delivers modern Neumorphic tactile visual feel for IoT smart home controllers.
- **Zero JS Dependency**: Provides physical button press feedback using pure CSS active state box shadows.
- **Clean Accessibility**: High contrast typography and ARIA labels ensure screen reader usability.
