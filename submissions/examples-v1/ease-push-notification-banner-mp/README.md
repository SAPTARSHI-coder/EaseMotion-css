# Push Notification Banner (ease-push-notification-banner-mp)

### What does this do?
A CSS-only push notification banner that slides down smoothly from the top of the screen to alert the user, then slides back up either automatically or when dismissed.

### How is it used?
```html
<div class="push-notification-banner-mp" id="bannerMp">
  <div class="banner-icon-mp">🔔</div>
  <div class="banner-content-mp">
    <p class="banner-title-mp">New Notification</p>
    <p class="banner-text-mp">You have a new push notification waiting for you.</p>
  </div>
  <button class="banner-close-mp" onclick="hideBannerMp()">&times;</button>
</div>
```
Toggle the `show-mp` class (to slide in) and `slide-out-mp` class (to slide out) via JavaScript to trigger the animation, as shown in `demo.html`.

### Why is it useful?
Push/toast-style notifications are a common UI need across dashboards, web apps, and landing pages. This component gives EaseMotion CSS a lightweight, dependency-free banner with a natural slide-in/slide-out motion that fits the framework's focus on smooth, purposeful micro-animations.
