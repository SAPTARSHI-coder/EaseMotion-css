# High Contrast Accessible Modal Component

This repository contains a fully accessible modal dialog and backdrop implementation compliant with **WCAG 2.1 AA** standards, featuring support for **Windows High Contrast Mode (`forced-colors: active`)**.

## Features

- **Keyboard Trap:** Tab navigation is restricted to focusable elements inside the modal when open.
- **Escape Key Closing:** Pressing `Escape` closes the modal immediately and returns focus to the triggering element.
- **Focus Restoration:** Focus returns to the button that triggered the modal upon closing.
- **Screen Reader Support:** Configured with `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby`.
- **Forced Colors Mode:** Includes dedicated `@media (forced-colors: active)` CSS rules to ensure borders, buttons, and backgrounds remain visible when system high-contrast themes are enabled.

## Testing & Verification

1. **Automated Audits:** Evaluated via `axe-core` / Lighthouse with 0 violations.
2. **Screen Readers:** Verified on NVDA (Windows), VoiceOver (macOS/iOS), and JAWS.
3. **Keyboard:**
   - `Tab` / `Shift + Tab` loops within modal controls.
   - `Escape` dismisses the dialog.
   - `Enter` / `Space` activates modal actions.
