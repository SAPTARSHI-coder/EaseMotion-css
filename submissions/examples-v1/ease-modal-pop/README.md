# EaseMotion — `ease-modal-pop`

A new CSS-only modal animation variant featuring an **elastic bounce pop-in effect**. This variant expands the modal component's animation toolkit by providing a playful, attention-grabbing entry transition perfect for CTAs, confirmations, and success alerts.

---

## Features

- **Elastic Pop Effect** — animates from `scale(0.9) opacity: 0` to `scale(1) opacity: 1` using bounce easing
- **CSS-only** — pure CSS animation with no JavaScript required
- **Dark Mode Support** — automatically adapts via `prefers-color-scheme: dark`
- **Accessibility** — respects `prefers-reduced-motion` to disable animations when needed
- **Works with `:target`** — compatible with URL hash-based modal triggering

---

## Usage

```html
<a href="#my-modal" class="ease-btn ease-btn-primary">Open Modal</a>

<div id="my-modal" class="ease-modal-overlay">
  <div class="ease-modal ease-modal-pop">
    <div class="ease-modal-header">
      <h2>Title</h2>
      <a href="#" class="ease-modal-close" aria-label="Close">&times;</a>
    </div>
    <div class="ease-modal-body">
      <p>Your content here...</p>
    </div>
  </div>
</div>
```
