# Perspective GDPR Modal (`perspective-gdpr-modal-ksk`)

1. What does this do?  
Displays a cookie consent modal that enters from a 3D perspective flip angle (`rotateX(25deg) → rotateX(0deg)`) using a springy cubic-bezier transition, triggered purely via a checkbox hack.

2. How is it used?  
Pair a hidden `.gdpr-toggle` checkbox with a `.gdpr-trigger-label` button. The `.gdpr-backdrop` and `.gdpr-modal` activate on `:checked` state. Clicking the backdrop label or action buttons unchecks the toggle to close.

3. Why is it useful?  
Provides a legally-compliant, accessible GDPR cookie consent UI with toggle-style preference controls, all without any JavaScript.

---
*Created for GSSoC-26 — Resolves #42490.*
