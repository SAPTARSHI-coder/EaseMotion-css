# Chip Component Dismiss Button ARIA Label

An audited, WCAG 2.1 AA compliant chip dismiss button implementation featuring contextual ARIA labels, focus management on item removal, arrow key and delete key navigation, and High Contrast Mode support.

## 🌟 Key Features

* **Contextual ARIA Naming (WCAG 4.1.2 / WCAG 2.4.6):** Uses explicit labels like `aria-label="Remove React filter"` to eliminate ambiguous "Remove" announcements across screen readers.
* **Focus Management on Removal (WCAG 2.4.3):** Dynamically transfers focus to the adjacent chip dismiss button upon removal, preventing focus drops to `<body>`.
* **Keyboard Navigation Suite (WCAG 2.1.1):** Supports `Tab`, `Enter`, `Space`, `Delete`, `Backspace`, and `Arrow Keys` (`Left`/`Right`/`Up`/`Down`).
* **Live Region Announcements (WCAG 4.1.3):** Broadcasts status updates (e.g., *"Removed React filter."*) to screen readers via a polite live region.
* **High Contrast Support (`forced-colors: active`):** Preserves chip borders and dismiss button visibility in Windows High Contrast Mode.

## 📁 Package Contents

```text
submissions/examples/chip-dismiss-aria-label/
├── style.css          # Accessible CSS with focus rings & forced-colors
├── demo.html           # HTML harness with chip list
├── chip-controller.js # JS focus manager & keyboard handlers
├── README.md           # Documentation & WCAG guidelines
└── PULL_REQUEST.md     # PR submission template
