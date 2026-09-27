# Stepper Screen Reader Announcer Live

This repository contains the WCAG 2.1 AA accessible implementation of the dynamic Stepper component with live screen reader announcements and forced-color high contrast support.

## Key Features & Accessibility Fixes
* **WCAG 2.1 AA Compliance:** Minimum 4.5:1 color contrast ratio across all dynamic states (Active, Incomplete, Completed).
* **Dynamic Screen Reader Announcements:** Integrated `aria-live="polite"` region (`#sr-announcer`) notifying assistive technology of step transitions.
* **Semantic HTML Structure:** Uses native `<nav>` and `<ol>` tags alongside proper `aria-current="step"` semantics on active buttons.
* **Full Keyboard Support:**
  * `Tab` / `Shift+Tab`: Focus management.
  * `ArrowRight` / `ArrowDown`: Advance to the next step.
  * `ArrowLeft` / `ArrowUp`: Retreat to the previous step.
  * Visible focus outlines using `:focus-visible`.
* **High Contrast Support:** `@media (forced-colors: active)` overrides using system color tokens like `CanvasText` and `Highlight`.

## Verification Steps
1. **Automated Auditing:** Run `axe-core` via browser extensions or CLI. Ensure 0 violations.
2. **Screen Reader Testing:** Run NVDA, JAWS, or VoiceOver and trigger step transitions via arrow keys or form controls to verify announcements.
3. **High Contrast:** Enable Windows High Contrast mode to verify element visibility.
