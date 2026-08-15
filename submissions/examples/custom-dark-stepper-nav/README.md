# CSS Custom Stepper Nav (Dark Mode)

A highly accessible, fully responsive progress stepper navigation designed specifically for modern dark mode interfaces, built entirely with pure CSS.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript dependencies. The connecting progress lines are generated dynamically using CSS `::after` pseudo-elements.
- **Dark Mode Aesthetics:** Utilizes deep slate backgrounds (`#111827`), high-contrast emerald green for completed tasks (`#10b981`), and a glowing indigo for active focus (`#6366f1`).
- **Responsive Layout:** Automatically detects smaller viewports (under `600px`) using Flexbox to gracefully morph the horizontal step tracker into a vertical timeline.
- **Accessible:** Uses semantic `<nav>` and `<ol>` HTML structures, proper `aria-current="step"` labeling for screen readers, and explicitly honors `@media (prefers-reduced-motion: reduce)` by disabling transition scaling.

## 📁 Files Included
```text
demo.html
style.css
README.md