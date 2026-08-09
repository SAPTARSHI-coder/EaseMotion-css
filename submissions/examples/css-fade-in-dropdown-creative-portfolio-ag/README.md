# CSS Fade-In Dropdown — Creative Portfolio Layouts

A lightweight, pure HTML/CSS category filter dropdown with smooth fade-in reveal animations for creative portfolio interfaces.

## 1. What does this do?
Provides a zero-JavaScript disclosure dropdown for creative portfolio filter bars that reveals menu items using a smooth EaseMotion-powered fade-in animation.

## 2. How is it used?

Apply the `.portfolio-dropdown` container and `.dropdown-menu` classes to standard HTML `<details>` and `<summary>` elements:

```html
<details class="portfolio-dropdown">
  <summary class="dropdown-trigger">
    <span>Filter Category</span>
  </summary>
  <ul class="dropdown-menu" role="listbox">
    <li><a href="#all" class="dropdown-item active">All Disciplines</a></li>
    <li><a href="#ui-ux" class="dropdown-item">UI/UX & Systems</a></li>
  </ul>
</details>
```

## 3. Why is it useful?
- **Zero JS Engine**: Operates entirely with HTML5 `<details>` and pure CSS.
- **EaseMotion Design Tokens**: Consumes `--ease-speed-medium`, `--ease-ease-out`, `--ease-color-primary`, and surface design tokens.
- **Accessibility & Motion First**: Natively supports keyboard navigation (`Tab`, `Space`, `Enter`), `:focus-visible` ring indicators, and `prefers-reduced-motion: reduce`.
- **Fully Responsive**: Adapts seamlessly to desktop, tablet, and mobile viewports.
