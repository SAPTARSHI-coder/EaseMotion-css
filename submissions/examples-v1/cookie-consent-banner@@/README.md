# Cookie Consent Banner

This is a self-contained example demonstrating how to create modern, animated cookie consent banners in three different styles (bottom bar, modal dialog, slide-in panel) using pure CSS animations and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🍪 **Three Banner Styles:** Bottom bar, modal dialog, and slide-in panel.
- ⚖️ **GDPR/CCPA Compliant:** Accept, reject, and customize options for user consent.
- 🎨 **Smooth Animations:** Slide, fade, and scale transitions for all banner types.
- 🎚️ **Toggle Switches:** Custom animated toggles for cookie category preferences.
- 💾 **LocalStorage Integration:** Persists user consent choices across sessions.
- ✓ **Success Feedback:** Toast notifications for consent actions.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Adapts to mobile screens with adjusted layouts.
- 🎯 **Cookie Categories:** Essential, Analytics, Marketing, and Preference cookies.
- 🚫 **Minimal JavaScript:** Only for state management and localStorage operations.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the banner HTML structure you want to use.
4. Include the JavaScript class at the bottom of your page.
5. Initialize: `const cookieConsent = new CookieConsent();`
6. The banner will automatically show after 2 seconds if no consent is stored.

## Banner Types

### 1. Bottom Bar
```html
<div class="cookie-banner cookie-banner--bottom" id="bannerBottom">
  <div class="cookie-banner__container">
    <div class="cookie-banner__content">
      <div class="cookie-banner__icon">🍪</div>
      <div class="cookie-banner__text">
        <h3 class="cookie-banner__title">We use cookies</h3>
        <p class="cookie-banner__description">Description text...</p>
      </div>
    </div>
    <div class="cookie-banner__actions">
      <button class="cookie-btn cookie-btn--secondary">Customize</button>
      <button class="cookie-btn cookie-btn--secondary">Reject All</button>
      <button class="cookie-btn cookie-btn--primary">Accept All</button>
    </div>
  </div>
</div>