# High Contrast Mode `forced-colors` for Inputs

An audited, WCAG 2.1 AA compliant form input component system designed to preserve explicit visual input borders, focus indicators, and invalid states in Windows High Contrast Mode (`forced-colors: active`).

## 🌟 Audit Fixes & Strategy

* **Explicit System Field Colors (WCAG 1.4.11):** Binds input containers explicitly to `Field` and `FieldText` with solid `CanvasText` 2px borders, preventing input boxes from disappearing against page backgrounds.
* **Distinct High Contrast Focus Rings (WCAG 2.4.7):** Applies `outline: 3px solid Highlight` on `:focus-visible` when `forced-colors: active` is active.
* **High Contrast Error States (WCAG 1.4.1):** Replaces color-only error indicators with `border: 3px dashed Mark` and programmatic `aria-invalid="true"` attributes.
* **Live Region Status Updates (WCAG 4.1.3):** Broadcasts validation updates and error messages to NVDA, VoiceOver, and JAWS via polite live regions.

## 📁 Package Contents

```text
submissions/examples/input-forced-colors-audit/
├── style.css           # Audited CSS with forced-colors active rules
├── demo.html            # HTML harness with form validation
├── input-controller.js  # JS validation & focus controller
├── README.md            # Documentation & WCAG guidelines
└── PULL_REQUEST.md      # PR submission template
