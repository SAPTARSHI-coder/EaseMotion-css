# Rubber Band GDPR Consent Modal (Nature-Inspired Variant)

A nature-inspired, highly polished GDPR Consent Modal component featuring a springy physics-based entrance bounce (the "rubber-band" effect) and custom botanical slider toggles.

---

## 💡 Quick Overview

### 1. What does this do?
This component displays an interactive GDPR Cookie Consent preferences modal that enters the viewport with an elastic rubber-band snap animation, allowing users to toggle and customize their cookie choices (Essential, Analytics, Preferences, Marketing) with a fully responsive, nature-themed design.

### 2. How is it used?
Integrate the pure CSS checkbox controller mechanism and modal structure directly into your page layout:

```html
<!-- 1. Pure CSS Control Checkbox -->
<input type="checkbox" id="gdpr-consent-toggle" class="gdpr-state-checkbox" checked>

<!-- 2. Main Page Layout (Optional wrapper) -->
<div class="verdant-container">
  <!-- Content... -->
  <!-- Label trigger to open the modal -->
  <label for="gdpr-consent-toggle" class="trigger-cookie-settings" tabindex="0">
    Manage Cookies
  </label>
</div>

<!-- 3. GDPR Modal Overlay -->
<div class="gdpr-modal-overlay">
  <div class="gdpr-modal-panel" role="dialog" aria-modal="true" aria-labelledby="gdpr-headline">
    
    <!-- Modal Header -->
    <div class="gdpr-modal-header">
      <h2 id="gdpr-headline">Verdant Cookie Harmony</h2>
    </div>

    <!-- Preferences Toggles Drawer -->
    <div class="gdpr-modal-body">
      <div class="gdpr-preferences-list">
        <div class="gdpr-pref-item">
          <h4>Necessary Roots (Essential)</h4>
          <label class="leaf-switch">
            <input type="checkbox" checked disabled>
            <span class="leaf-slider"></span>
          </label>
        </div>
        <!-- Additional preferences categories... -->
      </div>
    </div>

    <!-- Action Buttons Footer -->
    <div class="gdpr-modal-footer">
      <label for="gdpr-consent-toggle" class="gdpr-btn gdpr-btn-secondary" tabindex="0">
        Reject Non-Essential
      </label>
      <label for="gdpr-consent-toggle" class="gdpr-btn gdpr-btn-primary" tabindex="0">
        Accept All
      </label>
    </div>

  </div>
</div>
```

### 3. Why is it useful?
GDPR consent forms are a universal requirement for modern web applications. By utilizing pure CSS state management, this component eliminates layout shifting and render-blocking scripts while providing a playful, elastic animation that improves user delight. Its biophilic nature styling offers an alternative to corporate layouts, making it ideal for environmental, conservation, organic, and wellness web platforms.

---

## 🎨 Theme & Customization Guide

You can customize the color scheme and animation dynamics of the modal by overriding the following CSS variables inside your `:root` definition:

```css
:root {
  /* Biophilic Colors */
  --verdant-canvas: #f6f8f5;         /* Main body background canvas */
  --verdant-surface: #ffffff;        /* Panel and card backgrounds */
  --verdant-border: #e2ebd9;         /* Inner borders and divider colors */
  --verdant-primary: #2d6a4f;        /* Main action branding color */
  --verdant-accent: #52b788;         /* Checked toggles and leaf highlight accent */
  --verdant-text: #1b2621;           /* Readable body typography color */

  /* Animation Speeds and Physics Curves */
  --ease-elastic-duration: 0.75s;    /* Speed of the rubber-band snap animation */
  --ease-fade-duration: 0.3s;        /* Smooth backdrop overlay transition duration */
  --ease-spring-curve: cubic-bezier(0.34, 1.56, 0.64, 1); /* Custom bezier mimicking physics spring */
}
```

---

## ♿ Accessibility Specifications

This component is built following W3C WAI-ARIA guidelines:
1. **Focus Management**: Label triggers have `tabindex="0"` to support keyboard navigation.
2. **Keyboard Handlers**: Includes a lightweight script mapping standard `Space` and `Enter` keystrokes to label elements to trigger target checkbox states cleanly.
3. **Screen Readers**: The modal utilizes `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` mappings to ensure readers understand dialog context and flow.
4. **Motion Settings**: Includes full support for `@media (prefers-reduced-motion: reduce)`, instantly scaling down animations to standard cross-fades to prevent motion sickness.
