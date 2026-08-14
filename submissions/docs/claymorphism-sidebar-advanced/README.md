# Claymorphism Sidebar – Advanced Styling

This guide demonstrates advanced customization techniques for a claymorphism sidebar, including elevation, shadows, active states, CSS variables, responsive behavior, and accessibility.

## Basic Markup

```html
<aside
  class="clay-sidebar clay-sidebar--elevated"
  aria-label="Advanced navigation">

  <div class="clay-sidebar__header">
    <h2 class="clay-sidebar__title">Navigation</h2>
  </div>

  <nav aria-label="Primary navigation">
    <ul class="clay-sidebar__menu">
      <li>
        <a
          class="clay-sidebar__link clay-sidebar__link--active"
          href="#home">
          Home
        </a>
      </li>

      <li>
        <a class="clay-sidebar__link" href="#projects">
          Projects
        </a>
      </li>
    </ul>
  </nav>

</aside>
```

## Class Naming

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
.clay-sidebar__close
```

Elements represent individual parts of the sidebar.

### Modifiers

```text
.clay-sidebar--elevated
.clay-sidebar__link--active
```

Modifiers change the appearance or state of a component.

## Advanced Claymorphism Shadows

The clay effect is created using layered shadows.

```css
.clay-sidebar {
  box-shadow:
    12px 12px 24px rgba(0, 0, 0, 0.16),
    -10px -10px 22px rgba(255, 255, 255, 0.9);
}
```

The darker shadow creates depth while the lighter shadow creates the raised clay appearance.

## Inset Effect

An inset shadow can be used for interactive elements.

```css
.clay-sidebar__link:hover {
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.08),
    inset -4px -4px 8px rgba(255, 255, 255, 0.75);
}
```

## Active Navigation State

Use a modifier class for the selected item.

```html
<a
  class="clay-sidebar__link clay-sidebar__link--active"
  href="#home">
  Home
</a>
```

The modifier makes the active state visually distinct.

## CSS Variable Customization

The component provides custom properties for advanced customization.

```css
:root {
  --clay-sidebar-bg: #e9e9ee;
  --clay-sidebar-text: #25252b;
  --clay-sidebar-muted: #777780;
  --clay-sidebar-accent: #7657e8;
  --clay-sidebar-radius: 28px;
}
```

These variables can be overridden without modifying the component's main CSS.

### Example

```css
.clay-sidebar {
  --clay-sidebar-bg: #eef5ff;
  --clay-sidebar-accent: #3578d4;
  --clay-sidebar-radius: 20px;
}
```

## Custom Shadow Variables

The shadow can also be customized.

```css
.clay-sidebar {
  --clay-sidebar-shadow:
    16px 16px 30px rgba(0, 0, 0, 0.18),
    -12px -12px 25px rgba(255, 255, 255, 0.9);
}
```

This allows the component to adapt to different visual themes.

## Responsive Styling

Use a media query to prevent the sidebar from becoming too wide on smaller screens.

```css
@media (max-width: 600px) {
  .clay-sidebar {
    width: min(300px, 90vw);
  }
}
```

## Accessibility

### Semantic Structure

Use `<aside>` for the sidebar and `<nav>` for navigation.

```html
<aside aria-label="Main navigation">
  <nav aria-label="Primary navigation">
    ...
  </nav>
</aside>
```

### Keyboard Navigation

Navigation links should remain native `<a>` elements.

Keyboard users can:

* Press `Tab` to move forward.
* Press `Shift + Tab` to move backward.
* Press `Enter` to activate a link.
* Use the close button when the sidebar is displayed as a drawer.

### Visible Focus

Do not remove the browser focus indicator.

```css
.clay-sidebar__link:focus-visible {
  outline: 3px solid var(--clay-sidebar-accent);
  outline-offset: 3px;
}
```

### Toggle Button

A sidebar toggle should expose its expanded state.

```html
<button
  type="button"
  aria-controls="advanced-sidebar"
  aria-expanded="false">
  Open Menu
</button>
```

When the sidebar is open, update:

```html
aria-expanded="true"
```

When closed:

```html
aria-expanded="false"
```

The state must match the actual visibility of the sidebar.

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

## Accessibility Checklist

* Use semantic landmarks.
* Provide accessible names for navigation regions.
* Keep links keyboard accessible.
* Provide visible focus indicators.
* Use `aria-expanded` for sidebar toggles.
* Provide an accessible name for icon-only buttons.
* Do not rely only on color to communicate the active state.
* Respect `prefers-reduced-motion`.
* Keep the sidebar usable on smaller screens.

## Files

```text
claymorphism-sidebar-advanced/
├── index.html
├── style.css
└── README.md
```

## Related Issue

Closes #81649
