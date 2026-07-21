# Recurring Payment Card

### 1. What does this do?
A payment method card UI displaying a masked card number, cardholder name, and next billing date, with a pulsing "Recurring" status badge and a smooth hover-lift animation.

### 2. How is it used?
\`\`\`html
<div class="recurring-payment-card">
  <div class="rpc-top">
    <span class="rpc-brand">VISA</span>
    <span class="rpc-badge">
      <span class="rpc-badge-dot"></span>
      Recurring
    </span>
  </div>
  <div class="rpc-number">•••• •••• •••• 4242</div>
  <div class="rpc-bottom">
    <div class="rpc-field">
      <span class="rpc-label">Cardholder</span>
      <span class="rpc-value">Aaniya K.</span>
    </div>
    <div class="rpc-field">
      <span class="rpc-label">Next billing</span>
      <span class="rpc-value">Aug 14, 2026</span>
    </div>
  </div>
</div>
\`\`\`
- Add the \`is-paused\` class to switch to a muted "paused" state (badge turns gray, pulse animation stops).
- The pulsing dot on the badge signals an active recurring subscription at a glance.

### 3. Why is it useful?
Subscription and billing UIs are extremely common, and this component communicates recurring-payment status through motion (a pulsing dot) rather than a static label alone, fitting EaseMotion's animation-first, purposeful-motion philosophy. It's fully self-contained with no JS dependency.
