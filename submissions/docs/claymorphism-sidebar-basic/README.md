# Claymorphism Sidebar – Basic Usage

A simple documentation guide for using the Claymorphism Sidebar component.

## Overview

The Claymorphism Sidebar uses soft shadows, rounded corners, and subtle highlights to create a raised clay-like appearance.

It can be used for dashboards, admin panels, portfolio websites, and other navigation layouts.

## Basic HTML

```html
<aside class="clay-sidebar" aria-label="Main navigation">

  <div class="clay-sidebar__header">
    <h2 class="clay-sidebar__title">My Dashboard</h2>
  </div>

  <nav aria-label="Primary navigation">
    <ul class="clay-sidebar__menu">

      <li>
        <a
          href="#home"
          class="clay-sidebar__link clay-sidebar__link--active">
          Home
        </a>
      </li>

      <li>
        <a href="#profile" class="clay-sidebar__link">
          Profile
        </a>
      </li>

      <li>
        <a href="#projects" class="clay-sidebar__link">
          Projects
        </a>
      </li>

      <li>
        <a href="#settings" class="clay-sidebar__link">
          Settings
        </a>
      </li>

    </ul>
  </nav>

</aside>
```

## CSS Class Naming

The component follows a BEM-style naming convention.

### Block

```text
.clay-sidebar
```

The main sidebar container.

### Elements

```text
.clay-sidebar__header
.clay-sidebar__title
.clay-sidebar__menu
.clay-sidebar__link
```

Elements represent parts of the sidebar.

### Modifier

```text
.clay-sidebar__link--active
```

The modifier is used to indicate the currently selected navigation item.

## Custom CSS Variables

The component provides CSS custom properties for easy customization.

```css
:root {
  --clay-bg: #e8e8ed;
  --clay-text: #25252b;
  --clay-muted: #777780;
  --clay-accent: #7657e8;
  --clay-radius: 24px;
  --clay-padding: 24px;
}
```

You can override these values:

```css
.clay-sidebar {
  --clay-bg: #eef5ff;
  --clay-accent: #3578d4;
  --clay-radius: 20px;
}
```

## Claymorphism Shadow

The raised clay appearance is created using two shadows.

```css
.clay-sidebar {
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.15),
    -10px -10px 20px rgba(255, 255, 255, 0.9);
}
```

The darker shadow creates depth while the lighter shadow creates the soft raised effect.

## Active State

Add the modifier class to the selected navigation item.

```html
<a
  href="#home"
  class="clay-sidebar__link clay-sidebar__link--active">
  Home
</a>
```

## Hover State

Navigation links receive a subtle inset effect when hovered.

```css
.clay-sidebar__link:hover {
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.08),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}
```

## Accessibility

Use semantic HTML elements such as `<aside>`, `<nav>`, `<ul>`, and `<a>`.

### Keyboard Navigation

Native links automatically support keyboard navigation.

* `Tab` moves to the next link.
* `Shift + Tab` moves to the previous link.
* `Enter` activates the selected link.

### Focus Indicator

Always provide a visible focus indicator.

```css
.clay-sidebar__link:focus-visible {
  outline: 3px solid var(--clay-accent);
  outline-offset: 3px;
}
```

### Accessible Navigation

Provide an accessible name for the navigation.

```html
<nav aria-label="Primary navigation">
```

The sidebar can also have an accessible label:

```html
<aside aria-label="Main navigation">
```

## Responsive Design

The sidebar adapts to smaller screens.

```css
@media (max-width: 600px) {
  .clay-sidebar {
    width: min(280px, 90vw);
  }
}
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

## File Structure

```text
claymorphism-sidebar-basic/
├── index.html
├── style.css
└── README.md
```

## Summary

This basic implementation provides:

* Claymorphism visual styling
* Sidebar navigation
* Active navigation state
* Hover effects
* CSS variable customization
* Responsive layout
* Keyboard accessibility
* Visible focus states
* Reduced-motion support

## Related Issue

Closes #81648
