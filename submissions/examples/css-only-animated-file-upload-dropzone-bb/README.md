# CSS-Only Animated File Upload Dropzone

A styled file upload area with animated hover and focus effects. Pure CSS, no JavaScript.

## What does this do?

Provides a styled file upload dropzone with hover lift effect, animated gradient border variant, and focus-visible states. Uses a transparent file input overlay for the interaction.

## How is it used?

```html
<label class="dropzone">
  <input type="file" class="dropzone__input" multiple />
  <svg class="dropzone__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
  <div class="dropzone__title">Drop files here or click to upload</div>
  <div class="dropzone__subtitle">Supports images and documents</div>
</label>
```

### Variants

```html
<!-- Animated gradient border -->
<label class="dropzone dropzone--animated">...</label>

<!-- Compact size -->
<label class="dropzone dropzone--compact">...</label>

<!-- Outline style -->
<label class="dropzone dropzone--outline">...</label>
```

## Why is it useful?

- **Accessible** — uses semantic `<label>` with file input, keyboard focusable
- **Animated** — lift effect on hover, icon bounce, gradient border animation
- **Multiple variants** — default, animated border, compact, and outline
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — animations disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for file upload forms, CMS editors, and admin panels
