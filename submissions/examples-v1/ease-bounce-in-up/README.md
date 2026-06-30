# Bounce In Up Animation (`ease-bounce-in-up`)

A fluid, hardware-accelerated spring entrance animation perfect for mobile drawers, notification toasts, and modals. Built for the EaseMotion-css framework.

## 🚀 Features

- **Physics-Based Spring**: Rather than relying on rigid, hardcoded `@keyframes` percentages (e.g., `60% { transform: translateY(-20px) }`), this animation leverages a hyper-tuned `cubic-bezier(0.34, 1.56, 0.64, 1)` curve. The `1.56` parameter forces the browser to organically overshoot the target position before settling, creating a perfectly smooth spring effect native to the rendering engine.
- **Hardware Accelerated**: Animates only `transform` and `opacity`, ensuring 60fps performance on all mobile devices.
- **Plug-and-Play**: Just drop the class on any element to trigger the entrance.

## 🛠️ Usage

Append the `.ease-bounce-in-up` class to any element you wish to animate into the viewport from the bottom.

```html
<!-- Example: A mobile settings drawer -->
<div class="my-bottom-drawer ease-bounce-in-up">
  <h2>Settings</h2>
  <p>I bounced in from the bottom!</p>
</div>
```
