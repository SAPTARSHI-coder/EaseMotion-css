# Cyberpunk Shake Cookie Notification

A Cyberpunk-inspired cookie consent notification utilizing EaseMotion CSS variables and keyframe physics with zero JavaScript dependencies.

---

## 1. What does this do?

When the page loads, the cookie consent banner triggers an attention-grabbing, handcrafted entrance sequence designed for production environments.

The notification enters from below the viewport, settles briefly, performs exactly **one subtle horizontal shake** to draw the user's attention, and then becomes entirely static. It contains only two distinct choices and awaits user interaction calmly, without continuous looping or vibration.

## 2. How is it used?

The component uses a pure CSS dismissal state machine managed via a hidden input checkbox (`#cookie-dismiss-ag`):

```html
<!-- Dismiss State -->
<input
  type="checkbox"
  id="cookie-dismiss-ag"
  class="state-input-ag"
  aria-hidden="true"
/>

<div class="cookie-banner-wrapper-ag">
  <section
    class="cookie-banner-ag"
    role="dialog"
    aria-labelledby="cookie-title-ag"
    aria-describedby="cookie-desc-ag"
  >
    <div class="cookie-header-ag">
      <div class="cookie-status-ag">
        <span class="status-led-ag" aria-hidden="true"></span>
        <span class="status-text-ag">[SYS_ALERT: CONSENT_REQUIRED]</span>
      </div>
      <label for="cookie-dismiss-ag" class="cookie-close-ag" role="button"
        >✕</label
      >
    </div>

    <div class="cookie-body-ag">
      <h2 id="cookie-title-ag">Telemetry Authorization</h2>
      <p id="cookie-desc-ag">
        This terminal utilizes tracking beacons to calibrate synapse latency and
        stabilize your network uplink.
      </p>

      <div class="cookie-actions-ag">
        <label
          for="cookie-dismiss-ag"
          class="cyber-btn-ag primary-btn-ag"
          role="button"
        >
          [ AUTHORIZE ]
        </label>
        <label
          for="cookie-dismiss-ag"
          class="cyber-btn-ag secondary-btn-ag"
          role="button"
        >
          [ REJECT ]
        </label>
      </div>
    </div>
  </section>
</div>
```

## 3. Why is it useful?

It provides an isolated, production-grade cookie banner that grabs the user's attention with a single delayed horizontal shake without requiring continuous looping animations or heavy scripting libraries. Action buttons trigger a shake-exit dismiss transition purely in CSS. It satisfies accessibility standards with responsive stacking, high contrast overlays, Space/Enter keyboard support, and a prefers-reduced-motion fallback.
