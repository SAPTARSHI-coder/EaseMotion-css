# ease-modal

## What does this do?

Provides a CSS-only modal/dialog component with backdrop overlay, entrance/exit animations, configurable sizes (sm, md, lg), header/body/footer sections, scroll locking, ARIA accessibility attributes, and companion JavaScript for open/close, backdrop click, and Escape key handling.

## How is it used?

```html
<div
  id="my-modal"
  class="ease-modal-backdrop"
  role="dialog"
  aria-modal="true"
  aria-labelledby="my-modal-title"
>
  <div class="ease-modal">
    <div class="ease-modal-header">
      <h3 class="ease-modal-title" id="my-modal-title">Modal Title</h3>
      <button class="ease-modal-close" onclick="closeModal('my-modal')">
        &times;
      </button>
    </div>
    <div class="ease-modal-body">
      <p>Modal content goes here.</p>
    </div>
    <div class="ease-modal-footer">
      <button
        class="ease-modal-btn--secondary"
        onclick="closeModal('my-modal')"
      >
        Cancel
      </button>
      <button class="ease-modal-btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

**JavaScript:**

```js
function openModal(id) {
  document.getElementById(id).classList.add("is-open");
  document.body.classList.add("ease-modal-scroll-lock");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("is-open");
  document.body.classList.remove("ease-modal-scroll-lock");
}

// Close on backdrop click
document.querySelectorAll(".ease-modal-backdrop").forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target === b) closeModal(b.id);
  });
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll(".ease-modal-backdrop.is-open")
      .forEach(closeModal);
  }
});
```

### Available Classes

| Class                          | Purpose                           |
| ------------------------------ | --------------------------------- |
| `.ease-modal-backdrop`         | Fixed overlay with backdrop blur  |
| `.ease-modal-backdrop.is-open` | Visible state                     |
| `.ease-modal`                  | Centered modal container          |
| `.ease-modal-sm`               | Small variant (400px max-width)   |
| `.ease-modal-lg`               | Large variant (640px max-width)   |
| `.ease-modal-header`           | Header with title + close button  |
| `.ease-modal-title`            | Modal title text                  |
| `.ease-modal-close`            | Close button                      |
| `.ease-modal-body`             | Scrollable content area           |
| `.ease-modal-footer`           | Footer with action buttons        |
| `.ease-modal-btn--primary`     | Primary footer action             |
| `.ease-modal-btn--secondary`   | Secondary footer action           |
| `.ease-modal-scroll-lock`      | Applied to body to prevent scroll |

### CSS Custom Properties

| Property      | Default                       | Description                      |
| ------------- | ----------------------------- | -------------------------------- |
| `--mdbg`      | `rgba(0,0,0,0.5)`             | Backdrop color                   |
| `--mdsurface` | `#ffffff`                     | Modal background                 |
| `--mdborder`  | `#e2e8f0`                     | Border color                     |
| `--mdtext`    | `#1e293b`                     | Text color                       |
| `--mdmuted`   | `#64748b`                     | Muted text color                 |
| `--mdaccent`  | `#6c63ff`                     | Primary button/close focus color |
| `--mdradius`  | `0.75rem`                     | Border radius                    |
| `--mdshadow`  | `0 20px 60px rgba(0,0,0,0.3)` | Box shadow                       |
| `--mdmaxw`    | `500px`                       | Modal max-width                  |

## Why is it useful?

Modals are essential for confirmations, forms, image previews, and detail views. This component provides a reusable, accessible, and animated modal system that integrates with EaseMotion's design language.

## Features

- Backdrop overlay with `backdrop-filter: blur(4px)`
- Entrance animation (scale up + fade in)
- Exit animation (scale down + fade out)
- Three sizes: sm (400px), md (500px), lg (640px)
- Header, body, and footer sections
- Scroll locking on body when modal is open
- Close on backdrop click and Escape key (JS)
- ARIA attributes (`role="dialog"`, `aria-modal`, `aria-labelledby`)
- Dark mode support
- Respects `prefers-reduced-motion`
- CSS custom properties for full theming
