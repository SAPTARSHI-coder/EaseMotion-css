# Animated Modal Popup Component

A modern, highly responsive modal popup overlay component built entirely with **pure HTML and CSS**. It utilizes browser `:target` states to trigger popup modals, supports backdrop blur overlays, scale-up bounce entrance motions, top status symbols, and click dismissals without a single line of JavaScript.

---

## 1. What does this do?
The **Animated Modal Popup** provides a clean modal experience for web interfaces:
- **Scale-Bounce Pop Entrance**: Modal cards pop open using a responsive spring scale effect (`cubic-bezier(0.34, 1.56, 0.64, 1)`) from `scale(0.9)` to `scale(1.0)`.
- **Pure CSS Backdrop Dismiss**: If a user clicks outside the modal card (on the backdrop overlay), the modal automatically closes.
- **URL Routing Integration**: Open actions update the URL hash natively. This allows standard back-and-forward browser navigation to open and close modals out-of-the-box.
- **Three Core Profiles**: Styled presets for Success (Green), Warning (Orange), and Information (Blue) modals.
- **100% JS-Free**: Opens, closes, and animates without loading script libraries.

---

## 2. How is it used?

### File Setup
Link `style.css` in the head of your document and copy the markup template:
```html
<link rel="stylesheet" href="style.css">
```

### HTML Layout Structure
Trigger overlays using anchor links mapping to container IDs. Build cards carrying a header, body, close actions, and backdrop dismiss anchors:
```html
<!-- Trigger Anchor -->
<a href="#modal-payment" class="btn btn-success">Pay Invoice</a>

<!-- Targetable Modal Container -->
<div id="modal-payment" class="ease-modal-overlay">
  <!-- Click overlay backdrop to dismiss -->
  <a href="#" class="ease-modal-backdrop-dismiss" aria-label="Close modal"></a>

  <div class="ease-modal-card">
    <!-- Close Cross Top-Right -->
    <a href="#" class="ease-modal-close-btn" aria-label="Close modal">&times;</a>

    <!-- Status Alert Icon -->
    <div class="ease-modal-icon-wrap ease-modal-icon-success">
      <svg class="ease-modal-status-svg"> ... </svg>
    </div>

    <!-- Title & Body -->
    <h3 class="ease-modal-title">Payment Completed</h3>
    <div class="ease-modal-body">
      <p>Your invoice has been successfully processed.</p>
    </div>

    <!-- Actions -->
    <div class="ease-modal-footer">
      <a href="#" class="btn btn-outline">Close</a>
      <a href="#" class="btn btn-success">View Dashboard</a>
    </div>
  </div>
</div>
```

---

## 3. Why is it useful?
- **Zero Script Footprint**: Modals usually require JS state bindings to handle backdrop overlay interactions and click triggers. This CSS implementation removes the overhead, saving CPU cycles.
- **Native Browser Back/Forward Support**: Because open states map directly to browser URL targets (hashes), users can press their browser "Back" buttons to close active modals, maintaining expected navigation behaviors.
- **Visual Spring Easing**: Entrance springs make popup cards feel tactile and fluid, matching high-end design specs.
- **Sensory Overrides**: Integrates `@media (prefers-reduced-motion: reduce)` rules that bypass spring scales, deploying simple cross-fades for users with motion sensitivity.
