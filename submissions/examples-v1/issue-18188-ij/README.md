# Issue 18188 — Accordion

Smooth accordion expand/collapse using the native `<details>` element.

**Technique:** CSS `transition` on `max-height` toggled by `[open]` attribute. No JavaScript required.

**Custom properties:** `--transition-speed`, `--radius`, `--header-bg`, `--panel-bg`, `--accent`, etc.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables transitions. Native `<details>` is fully keyboard-accessible.
