# 🍪 Ease Animated Cookie Consent Banner

A fully functional, animated compliance notice system optimized for framework integrations.

## ✨ Features
- **Elastic Entry:** Renders with a spring motion profile via customized cubic-bezier setups.
- **Hardware Layer Acceleration:** Leverages composite transform rules for high frame rate rendering.
- **Local Persistence Interface:** Blocks repetitive mounting cycles by checking `localStorage` states.
- **Responsive Geometry:** Automatically re-flows from base blocks on screens under `768px` wide to horizontal bars on desktop monitors.

## 🚀 Usage Guide

Append the basic markup structure near the base of your layout tree:

```html
<div class="ease-cookie-banner" id="cookieBanner">
  <div class="ease-cookie-banner__content">
    <p>We use cookies to improve layout composition.</p>
    <div class="ease-cookie-banner__actions">
      <button class="ease-cookie-banner__accept">Accept All</button>
      <button class="ease-cookie-banner__decline">Decline</button>
    </div>
  </div>
</div>