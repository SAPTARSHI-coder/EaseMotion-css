# Error Alert Component (ARIA Live Compliant)

An accessible, WCAG 2.1 AA compliant error alert system designed to guarantee immediate screen reader speech synthesis, full keyboard navigability, and High Contrast Mode support.

## 🌟 Key Features

* **Zero Automated axe-core Errors:** Compliant with WCAG 2.1 AA guidelines (`aria-valid-attr-value`, `color-contrast`, `region`, `button-name`).
* **Pre-Rendered Live Region:** Uses an existing `#error-alert-container` with `aria-live="assertive"` to eliminate dynamic creation race conditions in VoiceOver, NVDA, and JAWS.
* **Focus Management:** Programmatically focuses critical alerts and supports `Escape` key dismissal with focus restoration (`WCAG 2.4.3`).
* **High Contrast Support:** Integrated `forced-colors: active` rules for Windows High Contrast Mode visibility (`WCAG 1.4.11`).

## 📁 Package Contents

```text
submissions/examples/error-alert-aria-live/
├── style.css          # Accessible CSS with focus rings & forced-colors
├── demo.html           # HTML harness with pre-rendered live region
├── alert-controller.js # JS focus & ARIA live alert manager
├── README.md           # Documentation & WCAG guidelines
└── PULL_REQUEST.md     # PR submission template
