# Animated Cookie Consent Banner (`ease-cookie-xyz`)

A zero-dependency, CSS-only animated cookie consent banner component designed for the **EaseMotion CSS** framework. Perfect for GDPR/CCPA compliance with smooth slide-in animations and interactive buttons.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions.
- **Animation-First**: Smooth slide-in animations, bouncing cookie icon, and button hover effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Positions**: Bottom banner (default), top banner, and bottom-left corner variants.
- **Cookie Preferences**: Optional checkbox options for granular cookie consent.
- **Interactive Buttons**: Accept, reject, and customize buttons with hover lift effects.
- **Bouncing Icon**: Animated cookie icon for visual appeal.
- **Privacy Link**: Built-in link styling for privacy policy.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Bottom Banner (Default)
```html
<div class="ease-cookie-xyz ease-cookie-xyz-bottom">
  <div class="ease-cookie-xyz-content">
    <div class="ease-cookie-xyz-icon">🍪</div>
    <div class="ease-cookie-xyz-text">
      <h4 class="ease-cookie-xyz-title">We use cookies</h4>
      <p class="ease-cookie-xyz-description">
        We use cookies to enhance your browsing experience.
      </p>
      <a href="#" class="ease-cookie-xyz-link">Learn more</a>
    </div>
  </div>
  <div class="ease-cookie-xyz-actions">
    <button class="ease-cookie-xyz-btn ease-cookie-xyz-btn-reject">Reject All</button>
    <button class="ease-cookie-xyz-btn ease-cookie-xyz-btn-accept">Accept All</button>
  </div>
</div>