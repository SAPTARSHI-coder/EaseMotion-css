# Issue 18189 — Tabs Slide

Sliding tab indicator using CSS `:target` and a sliding underline.

**Technique:** Tabs are `<a>` elements using `:target`. The `.indicator` bar slides via `transform: translateX()` with a CSS `transition`. Active panel is shown with `:target`.

**Custom properties:** `--transition-speed`, `--accent`, `--surface`, `--border`, etc.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables indicator transition.
