# Animated Cookie Consent Banner

## What does this do?
Provides a smooth animated cookie consent banner that appears from the bottom of the page with Accept, Decline, and Settings actions.

## How is it used?
```html
<div class="cookie-banner" id="cookieBanner">
    <div class="cookie-banner-content">
        <p>
            We use cookies to improve your experience.
            By continuing you agree to our cookie policy.
        </p>

        <div class="cookie-actions">
            <button class="accept-btn">Accept All</button>
            <button class="decline-btn">Decline</button>
            <button class="settings-btn">Settings</button>
        </div>
    </div>
</div>
``` 

## Why is it useful?
This component provides a smooth, non-intrusive cookie consent experience, stores user preferences using `localStorage`, and is suitable for websites that require cookie consent functionality, including GDPR-compliant websites.
