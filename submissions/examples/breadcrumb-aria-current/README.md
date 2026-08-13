# Breadcrumb Navigation ARIA Current Page Attribute

An audited, WCAG 2.1 AA compliant breadcrumb navigation component featuring `aria-current="page"` semantics, landmark labeling, CSS pseudo-element separators, and High Contrast Mode support.

## 🌟 Key Features

* **Programmatic Current Page Location (WCAG 4.1.2):** Applies `aria-current="page"` to the active location link, enabling NVDA, VoiceOver, and JAWS to explicitly announce *"current page"*.
* **Landmark Identification (WCAG 2.4.1 / WCAG 1.3.1):** Wraps breadcrumb items in `<nav aria-label="Breadcrumb">` to distinguish them from primary and footer navigation landmarks.
* **Hidden Visual Separators (WCAG 1.1.1):** Uses CSS pseudo-elements (`::after`) or `aria-hidden="true"` to prevent screen readers from verbosely reading *"slash"* between breadcrumb steps.
* **Keyboard Navigation & Live Updates (WCAG 2.1.1):** Supports full `Tab` navigation and broadcasts dynamic route updates via an `aria-live="polite"` region.
* **High Contrast Support (`forced-colors: active`):** Binds active current page states explicitly to `Highlight` system colors in Windows High Contrast Mode.

## 📁 Package Contents

```text
submissions/examples/breadcrumb-aria-current/
├── style.css               # Accessible CSS with focus rings & forced-colors
├── demo.html                # HTML harness with breadcrumb navigation
├── breadcrumb-controller.js # JS controller for aria-current state management
├── README.md                # Documentation & WCAG guidelines
└── PULL_REQUEST.md          # PR submission template
