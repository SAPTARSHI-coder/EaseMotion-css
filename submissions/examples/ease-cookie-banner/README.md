# Ease Cookie Consent Banner

A modern, responsive, and animated cookie consent banner built with **EaseMotion CSS**. This component provides a professional way to handle GDPR/CCPA notices with smooth entrance animations and clear action states.

## Key Features
- **Slide-up Entrance**: Gracefully animates from the bottom of the viewport on page load.
- **Fixed Positioning**: Remains pinned to the bottom of the screen for high visibility.
- **Micro-interactions**: Hover and active states for Accept and Reject actions.
- **Dark Mode Support**: Automatically adapts to system color schemes using EaseMotion tokens.
- **Accessibility**: Respects `prefers-reduced-motion` and includes semantic buttons.

## How to Use
1. Include `easemotion.css` in your project.
2. Structure your HTML using the `.ease-cookie-banner` class.
3. Use a small JavaScript snippet to toggle the `.is-dismissed` class when a button is clicked.

```html
<div class="ease-cookie-banner" id="cookie-banner">
  <div class="ease-cookie-banner-content">
    <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
    <div class="ease-cookie-banner-actions">
      <button class="ease-btn ease-btn-primary ease-cookie-banner-accept" onclick="dismiss()">Accept</button>
      <button class="ease-btn ease-btn-ghost ease-cookie-banner-reject" onclick="dismiss()">Reject</button>
    </div>
  </div>
</div>
```

## Directory Structure
- `demo.html`: Interactive demo showcasing the banner and dismissal logic.
- `style.css`: Styles for the banner layout, animations, and responsive behavior.
