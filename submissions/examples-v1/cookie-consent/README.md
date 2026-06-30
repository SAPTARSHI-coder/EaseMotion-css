# Cookie Consent Banner

### What does this do?

A responsive, GDPR-compliant Cookie Consent Banner featuring a slide-up entrance, slide-down dismissal, and basic localStorage persistence.

### How is it used?

Include `style.css` in your project and structure your HTML as follows, managing visibility and persistence with standard classes and localStorage logic:

```html
<div id="ease-cookie-consent" class="ease-cookie-consent">
  <div class="ease-cookie-consent-content">
    <p class="ease-cookie-consent-text">
      We use cookies to improve your experience. By continuing, you agree to our
      use of cookies.
    </p>
    <div class="ease-cookie-consent-actions">
      <button
        class="ease-btn ease-btn-primary ease-btn-sm"
        data-consent="accept"
      >
        Accept All
      </button>
      <button class="ease-btn ease-btn-ghost ease-btn-sm" data-consent="reject">
        Reject All
      </button>
    </div>
  </div>
</div>
```

Applying the class `.ease-cookie-consent--dismissed` triggers the slide-down dismissal animation.

### Why is it useful?

It provides an essential, high-converting compliance banner that integrates cleanly with EaseMotion CSS utility buttons and animations. It includes native prefers-reduced-motion coverage to prevent layout shifts/animations for users with accessibility preferences.
