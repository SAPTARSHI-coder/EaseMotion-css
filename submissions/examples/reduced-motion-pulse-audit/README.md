# Prefers-Reduced-Motion Audit for Pulse Animations

An audited, WCAG 2.1 AA compliant pulse and skeleton animation component system that halts keyframe motion when `prefers-reduced-motion: reduce` is detected while maintaining full screen reader accessibility and High Contrast Mode support.

## 🌟 Audit Fixes & Strategy

* **Vestibular Safety Override (WCAG 2.3.3):** Disables continuous `@keyframes` scaling and opacity pulsing under `@media (prefers-reduced-motion: reduce)`, replacing motion beacons with a static, high-contrast indicator ring.
* **Screen Reader Text Fallbacks (WCAG 1.1.1 / WCAG 4.1.2):** Pairs visual loading skeletons and pulse dots with `.sr-only` text labels and `aria-busy="true"` state attributes.
* **Live Region Status Announcements (WCAG 4.1.3):** Broadcasts loading progress and completion updates to NVDA, VoiceOver, and JAWS via a polite live region.
* **High Contrast Support (`forced-colors: active`):** Binds pulsing dots and skeleton outlines explicitly to `CanvasText` and `Highlight` system colors in Windows High Contrast Mode.

## 📁 Package Contents

```text
submissions/examples/reduced-motion-pulse-audit/
├── style.css           # Audited pulse CSS with reduced motion overrides
├── demo.html            # HTML harness with pulse beacon & skeleton loader
├── pulse-controller.js  # JS controller for aria-busy state management
├── README.md            # Documentation & WCAG guidelines
└── PULL_REQUEST.md      # PR submission template
