# Session Timeout Warning Panel

## What does this do?

Displays a centred warning panel — over a blurred page backdrop — when a user's session is about to expire. The panel contains a conic-gradient countdown ring, a blinking status badge, a progress bar, descriptive text, and two action buttons. A second CSS class variant flips the panel into a fully-expired error state with a red ring and shake entrance animation.

## How is it used?

Place a `div.timeout-overlay` anywhere in the document. Inside it, add a `section.timeout-panel` with `role="alertdialog"` so assistive technologies announce it immediately. The panel slides in via a CSS entrance animation with no JavaScript required for the static state.

```html
<!-- Warning state -->
<div class="timeout-overlay">
  <section class="timeout-panel"
           role="alertdialog"
           aria-modal="true"
           aria-labelledby="timeoutHeading"
           aria-describedby="timeoutDesc">

    <div class="timeout-ring-wrap" aria-hidden="true">
      <div class="timeout-ring"></div>
      <span class="timeout-ring-label">2:00</span>
    </div>

    <div class="timeout-icon-strip" aria-hidden="true">
      <span class="timeout-badge">
        <span class="timeout-badge-dot"></span>
        Session expiring
      </span>
    </div>

    <h2 class="timeout-heading" id="timeoutHeading">Your session is expiring</h2>
    <p class="timeout-body" id="timeoutDesc">
      You will be signed out in <strong>2 minutes</strong>.
    </p>

    <div class="timeout-bar-wrap" aria-hidden="true">
      <div class="timeout-bar-fill"></div>
    </div>

    <div class="timeout-actions">
      <button class="timeout-btn-primary" type="button">Stay signed in</button>
      <button class="timeout-btn-secondary" type="button">Sign out now</button>
    </div>

  </section>
</div>
```

To show the **expired state**, add the `is-expired` modifier to the panel:

```html
<section class="timeout-panel is-expired" role="alertdialog" ...>
```

The ring turns red, the progress bar empties, and a shake entrance plays once to signal that the session is gone.

To use as a **standalone card** (without the full-screen overlay), omit the `.timeout-overlay` wrapper and render `.timeout-panel` directly.

The countdown value shown in `.timeout-ring-label` and the bar width in `.timeout-bar-fill` are set in markup — a real integration would update them via JavaScript as the timer counts down.

## Why is it useful?

Banking, healthcare, government, and enterprise apps all require session timeout warnings. The pattern is common but rarely done well — a plain `alert()` dialog breaks the experience, and a custom modal often lacks motion context. This example demonstrates how a conic-gradient ring and a subtle pulse animation can communicate urgency without being alarming, while the amber-to-red colour shift for the expired state gives a clear, accessible signal. The component works with dark mode via `prefers-color-scheme` and respects `prefers-reduced-motion` by freezing all animations while keeping the layout intact.
