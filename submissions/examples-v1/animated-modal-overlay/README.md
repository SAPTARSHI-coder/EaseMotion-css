# Animated Modal / Overlay Component

Extends the existing `components/modals.css` system with four additional animation variants, plus structured header/body/footer sub-components.

## Animation Variants

| Modifier class              | Entry animation                        | Use case                 |
| --------------------------- | -------------------------------------- | ------------------------ |
| _(none)_                    | Scale-up + bounce (modals.css default) | General dialogs          |
| `.ease-modal--slide-top`    | Slides down from above                 | Notifications, alerts    |
| `.ease-modal--slide-bottom` | Slides up from bottom (sheet)          | Mobile action sheets     |
| `.ease-modal--flip`         | 3D perspective flip on X axis          | Onboarding, achievements |
| `.ease-modal--drawer`       | Translates in from right               | Settings, filters, carts |

## Sub-components

| Class                | Description                          |
| -------------------- | ------------------------------------ |
| `.ease-modal-header` | Header row with title + close button |
| `.ease-modal-title`  | Modal heading                        |
| `.ease-modal-close`  | Styled close/dismiss button          |
| `.ease-modal-body`   | Scrollable content area              |
| `.ease-modal-footer` | Action button row (right-aligned)    |

## Usage

```html
<!-- Open button -->
<button
  onclick="document.getElementById('my-modal').classList.add('is-active')"
>
  Open modal
</button>

<!-- Slide-from-top variant -->
<div class="ease-modal-overlay" id="my-modal" role="dialog" aria-modal="true">
  <div class="ease-modal ease-modal--slide-top" role="document">
    <div class="ease-modal-header">
      <h2 class="ease-modal-title">Title</h2>
      <button
        class="ease-modal-close"
        onclick="document.getElementById('my-modal').classList.remove('is-active')"
        aria-label="Close"
      >
        ×
      </button>
    </div>
    <div class="ease-modal-body">Content goes here.</div>
    <div class="ease-modal-footer">
      <button class="ease-btn ease-btn-outline">Cancel</button>
      <button class="ease-btn ease-btn-primary">Confirm</button>
    </div>
  </div>
</div>

<script>
  // Close on backdrop click
  document.getElementById("my-modal").addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("is-active");
  });
  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      document.getElementById("my-modal").classList.remove("is-active");
  });
</script>
```

## Accessibility

- `role="dialog"` + `aria-modal="true"` on overlay
- `aria-labelledby` linking overlay to modal title
- `aria-label="Close"` on close button
- Focus moved to first focusable element on open
- `Escape` key closes all active modals
- `prefers-reduced-motion`: transitions not affected (opacity/transform
  changes are fast enough; add `animation-duration: 1ms` override if needed)

## Dark Mode

Applies automatically via `prefers-color-scheme: dark` or `[data-theme="dark"]` attribute on the modal element.

Closes #12246
