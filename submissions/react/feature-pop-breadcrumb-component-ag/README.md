# Pop Breadcrumb (Disabled State) - React Component

A production-quality, accessible React breadcrumb component featuring a smooth CSS scale-pop effect (`scale(1.05)`) on hover and focus for enabled links, with visual distinction and non-interactivity for disabled or current page items.

---

## Overview

`PopBreadcrumb` provides semantic and accessible breadcrumb navigation built with React functional components and pure CSS transitions. Enabled navigation items respond dynamically to mouse hover and keyboard focus with a subtle pop motion, while disabled items remain non-interactive with muted colors, reduced opacity, and distinct accessibility attributes.

---

## Features

- **Smooth Scale-Pop Animation**: Pure CSS transition (`transform: scale(1.05)`) over 250ms on hover and keyboard focus.
- **Disabled State Support**: Non-interactive items feature reduced opacity (`0.6`), muted color (`#6b7280`), `aria-disabled="true"`, `cursor: not-allowed`, and no scale animations.
- **Semantic HTML Structure**: Built with `<nav aria-label="Breadcrumb">`, `<ol>`, and `<li>` for maximum accessibility and SEO compliance.
- **Current Page Indication**: Automatically or explicitly sets `aria-current="page"` on the active item.
- **Keyboard Accessible**: Fully operable using keyboard navigation with visible `:focus-visible` focus rings.
- **Reduced Motion Support**: Fully respects `prefers-reduced-motion: reduce` settings.
- **Zero Third-Party Dependencies**: Pure React and standard CSS only.

---

## File Structure

```text
submissions/react/feature-pop-breadcrumb-component-ag/
├── PopBreadcrumb.jsx
├── README.md
└── style.css
```

---

## Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<BreadcrumbItem>` | `[]` | Array of breadcrumb items to display. |
| `separator` | `string` | `"/"` | Visual character or symbol rendered between breadcrumb items. |

### `BreadcrumbItem` Object Shape

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | **Yes** | The visible text label for the breadcrumb item. |
| `href` | `string` | No | Navigation URL. If omitted or item is disabled/current, item renders as a non-clickable `<span>`. |
| `disabled` | `boolean` | No | When `true`, item is rendered non-interactively with `aria-disabled="true"` and muted styling. |
| `current` | `boolean` | No | Indicates whether this item represents the active page (`aria-current="page"`). If omitted, defaults to `true` for the last item in `items`. |

---

## Default Behavior

- **Current Page Defaulting**: If `current` is not explicitly set on an item, `PopBreadcrumb` automatically treats the **last item in the array** as the current page (`current: true`), rendering `aria-current="page"`.
- **Non-Interactive Disabled/Current Items**: Items marked as `disabled` or `current` (or without an `href`) are rendered as semantic `<span>` tags rather than `<a>` links, preventing pointer interaction and keyboard focus capture.

---

## Installation / Usage

1. Copy `PopBreadcrumb.jsx` and `style.css` into your project directory.
2. Import `PopBreadcrumb` in your React component:

```jsx
import PopBreadcrumb from "./PopBreadcrumb";
```

---

## Example React Usage

```jsx
import PopBreadcrumb from "./PopBreadcrumb";

const items = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb", current: true, disabled: true }
];

export default function App() {
  return <PopBreadcrumb items={items} />;
}
```

---

## Accessibility

- **Semantic HTML**: Uses standard HTML5 `<nav aria-label="Breadcrumb">`, `<ol>`, and `<li>` elements.
- **ARIA Attributes**:
  - `aria-current="page"` applied strictly to current page breadcrumbs.
  - `aria-disabled="true"` applied to disabled items.
  - `aria-hidden="true"` applied to item separators to avoid screen reader clutter.
- **Disabled Items**: Disabled breadcrumbs render as `<span>` elements with `aria-disabled="true"`, `cursor: not-allowed`, and reduced opacity (`0.6`) without relying solely on color.
- **Keyboard Focus**: Active links display high-contrast `:focus-visible` outline focus rings when navigated via keyboard.

---

## Reduced Motion Support

The component includes media query overrides for users who have requested reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .pop-breadcrumb-link-ag {
    transition: none !important;
  }
  .pop-breadcrumb-link-ag:hover,
  .pop-breadcrumb-link-ag:focus-visible {
    transform: none !important;
  }
}
```

---

## Customization

All CSS classes follow the repository convention ending with `-ag`:
- `.pop-breadcrumb-nav-ag`: Navigation container (`<nav>`)
- `.pop-breadcrumb-list-ag`: Ordered list (`<ol>`)
- `.pop-breadcrumb-item-ag`: List item wrapper (`<li>`)
- `.pop-breadcrumb-link-ag`: Enabled link (`<a>`) with scale-pop effect
- `.pop-breadcrumb-text-ag`: Standard text (`<span>`) for current/non-link items
- `.pop-breadcrumb-disabled-ag`: Disabled state styles (`<span>`)
- `.pop-breadcrumb-separator-ag`: Separator character (`<span>`)

---

## Why This Example Fits EaseMotion CSS

This component directly aligns with EaseMotion CSS principles:
- **Micro-Interactions**: Lightweight CSS `transform: scale(1.05)` animation providing delightful feedback on hover and focus.
- **Accessible Design**: Complies with WAI-ARIA breadcrumb patterns while maintaining clean motion behaviors.
- **Production-Ready**: Written with pure React and plain CSS without third-party dependencies.
