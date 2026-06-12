# EaseMotion — `ease-modal`

A CSS-only modal dialog component with animated backdrop and panel. Supports two toggle mechanisms — checkbox `:checked` (recommended) and `:target` URL hash.

---

## Features

- **CSS-only** — no JavaScript required for open/close behaviour
- **Two toggle modes** — checkbox `:checked` (recommended) or `:target` URL hash
- **Animated entrance** — overlay fades in, panel scales + slides up with bounce easing
- **Backdrop dismiss** — click outside the panel to close
- **Close button** — visible close control inside the panel
- **Uses design tokens** — references `--ease-z-modal`, `--ease-color-*`, `--ease-space-*`, `--ease-speed-*`, `--ease-ease-bounce` from `core/variables.css`
- **Dark mode** — automatic via `prefers-color-scheme: dark`
- **Reduced motion** — disables transitions when `prefers-reduced-motion: reduce`

---

## Usage

### Checkbox `:checked` mode (recommended)

```html
<input type="checkbox" id="my-modal" class="ease-modal-toggle" />
<div class="ease-modal-overlay">
  <div class="ease-modal-panel">
    <label for="my-modal" class="ease-modal-close">&times;</label>
    <h2>Modal Title</h2>
    <p>Modal content here.</p>
    <label for="my-modal" class="ease-btn">Close</label>
  </div>
</div>

<!-- Trigger -->
<label for="my-modal" class="ease-btn ease-btn-primary">Open Modal</label>
```

### `:target` URL hash mode

```html
<div id="my-modal" class="ease-modal-overlay">
  <a href="#" class="ease-modal-backdrop-close"></a>
  <div class="ease-modal-panel">
    <a href="#" class="ease-modal-close">&times;</a>
    <h2>Modal Title</h2>
    <p>Modal content here.</p>
    <a href="#" class="ease-btn">Close</a>
  </div>
</div>

<!-- Trigger -->
<a href="#my-modal" class="ease-btn ease-btn-primary">Open Modal</a>
```

---

## Toggle mode comparison

| Feature                 | Checkbox `:checked` | `:target` URL hash   |
| ----------------------- | ------------------- | -------------------- |
| JavaScript required     | No                  | No                   |
| Backdrop click-to-close | Yes (label targets) | Yes (backdrop link)  |
| Escape key close        | Via JS listener     | Via JS listener      |
| Browser history impact  | None                | Adds/clears URL hash |
| Multiple modals         | Yes (independent)   | Yes (independent)    |

---

## Why does it fit EaseMotion CSS?

Modals/dialogs are a fundamental UI pattern missing from the framework. The roadmap in VISION.md lists overlay components as a planned feature. This component provides a production-ready modal with smooth entrance animations, using existing design tokens.

---

## Files

1. **`style.css`** — component CSS with overlay, panel, close button, dark mode
2. **`demo.html`** — interactive demo showing checkbox-based and `:target` modal patterns
3. **`README.md`** — documentation and usage examples

---

## Notes

- The checkbox approach does not mess with browser history — unlike `:target`, it won't leave a hash in the URL.
- For Escape-key close, add a small JS `keydown` listener that unchecks the checkbox.
- The overlay uses `pointer-events: none` when hidden — interactive elements behind it remain clickable.
- `--ease-z-modal` (default 1000) keeps the overlay above other content.
