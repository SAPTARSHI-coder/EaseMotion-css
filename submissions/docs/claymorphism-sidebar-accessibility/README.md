# Claymorphism Sidebar – Accessibility Integration

A reusable claymorphism-style sidebar with navigation and accessibility considerations.

## Features

* Claymorphism visual style
* Semantic HTML structure
* Keyboard-friendly navigation
* Visible focus states
* Accessible sidebar label
* CSS custom properties
* Responsive layout
* Reduced-motion support

## Basic Usage

```html
<aside
  class="clay-sidebar"
  aria-label="Main navigation">

  <nav aria-label="Primary navigation">
    <ul class="clay-sidebar__menu">
      <li>
        <a class="clay-sidebar__link" href="#home">
          Home
        </a>
      </li>

      <li>
        <a class="clay-sidebar__link" href="#profile">
          Profile
        </a>
      </li>
    </ul>
  </nav>

</aside>
```

## Class Naming Convention

The component uses a base class with BEM-style elements and modifiers.

### Base Class

```text
.clay-sidebar
```

Defines the main sidebar component.

### Elements

```text
.clay-sidebar__header
.clay-sidebar__close
.clay-sidebar__menu
.clay-sidebar__link
```

These classes represent parts of the sidebar.

### Modifier

```text
.clay-sidebar__link--active
```

The modifier indicates the currently active navigation item.

## CSS Custom Properties

The component exposes variables for customization.

```css
:root {
  --clay-sidebar-bg: #e8e8e8;
  --clay-sidebar-text: #222;
  --clay-sidebar-accent: #7c5cff;
  --clay-sidebar-radius: 24px;
  --clay-sidebar-padding: 24px;
}
```

You can override them:

```css
.clay-sidebar {
  --clay-sidebar-bg: #f0e6ff;
  --clay-sidebar-text: #302040;
  --clay-sidebar-accent: #6d3fd1;
  --clay-sidebar-radius: 20px;
}
```

## Accessibility

Use semantic HTML for the sidebar.

```html
<aside aria-label="Main navigation">
  <nav aria-label="Primary navigation">
    ...
  </nav>
</aside>
```

This helps screen-reader users understand the purpose of the navigation.

## Keyboard Navigation

Navigation links should remain normal `<a>` elements so they can be reached using the keyboard.

Users should be able to:

* Press `Tab` to move between interactive elements.
* Press `Shift + Tab` to move backward.
* Press `Enter` to activate a focused link.
* Use the close button when the sidebar is opened as an interactive drawer.

Do not remove the browser's focus indicator.

## Focus Styles

The sidebar provides a visible focus state:

```css
.clay-sidebar__link:focus-visible {
  outline: 3px solid var(--clay-sidebar-accent);
  outline-offset: 2px;
}
```

This makes keyboard focus easier to identify.

## Sidebar Toggle Accessibility

If JavaScript is used to open and close the sidebar, the toggle button should expose its state.

```html
<button
  type="button"
  aria-controls="main-sidebar"
  aria-expanded="false">
  Open Menu
</button>
```

When the sidebar opens:

```html
aria-expanded="true"
```

When it closes:

```html
aria-expanded="false"
```

The `aria-expanded` value should always match the actual sidebar state.

## Close Button

The close button should have an accessible name.

```html
<button
  type="button"
  aria-label="Close navigation">
  &times;
</button>
```

## Reduced Motion

Respect users who prefer reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

## Responsive Design

The sidebar should remain usable on smaller screens.

```css
@media (max-width: 600px) {
  .clay-sidebar {
    width: min(280px, 90vw);
  }
}
```

## Usage Checklist

* Use semantic `<aside>` and `<nav>` elements.
* Give navigation landmarks accessible names.
* Keep navigation links keyboard accessible.
* Provide visible `:focus-visible` styles.
* Keep `aria-expanded` synchronized with the sidebar state.
* Give icon-only buttons accessible names.
* Respect `prefers-reduced-motion`.
* Do not place non-interactive elements in the tab order.

## License

This documentation is provided as part of the EaseMotion-css project.
