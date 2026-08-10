# Keyboard Shortcut Cheat Sheet (EaseMotion)

 A CSS-only keyboard shortcut reference panel built with EaseMotion CSS utilities.

 Purpose
- Provide a modern, accessible, and responsive cheat sheet for common keyboard shortcuts used in developer tools, IDEs, and SaaS apps.

 Use cases
- Documentation pages and developer docs
- In-app help overlays or panels
- Project README or onboarding guides

 HTML structure
- `main.cheatsheet-wrap` — container
- `section.cheatsheet-grid` — responsive grid of cards
- `article.cheatsheet-card` — category card with `h2` and `ul.shortcut-list`
- `aside.cheatsheet-meta` — supplemental tips and legend
- Use `<kbd>` for key badges (screen-reader friendly by default)

 Customization
- Colors and spacing are driven by CSS variables at the top of `style.css`.
- Grid columns change with media queries; adjust `grid-template-columns` in `.cheatsheet-grid` to change layout.
- Add or remove categories by adding/removing `article.cheatsheet-card` elements.
- The component uses only HTML + CSS — no JavaScript required.

 Why it fits EaseMotion CSS
- Lightweight: pairs well with EaseMotion's utility classes (`em-container`, `em-p-*`, `em-text-*`) while keeping custom styles minimal.
- Accessible: semantic markup and keyboard-friendly order align with EaseMotion's accessibility guidance.
- Composable: the component is a single demo folder ready to drop into docs or a showcase gallery.

 Files
- `demo.html` — self-contained demo that references `../../../easemotion.css` and `style.css`.
- `style.css` — component styles (responsive layout, hover animations, key badges).

 How to preview
1. Open `submissions/examples/keyboard-shortcut-cheatsheet-zt/demo.html` in your browser (serve or open file).
