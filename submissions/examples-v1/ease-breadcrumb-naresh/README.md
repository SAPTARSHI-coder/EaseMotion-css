# Staggered Breadcrumb Component

## 1. What does this do?

This component adds an accessible, responsive breadcrumb navigation pattern featuring smooth staggered slide-in entrance animations for each breadcrumb item and custom fade-in animations for separators.

## 2. How is it used?

Developers can use this component by structuring their HTML list inside a `<nav>` container with the appropriate classes:

```html
<nav aria-label="breadcrumb" class="ease-breadcrumb">
  <ol class="ease-breadcrumb__list">
    <li class="ease-breadcrumb__item">
      <a href="#">Home</a>
    </li>
    <li class="ease-breadcrumb__separator" aria-hidden="true">/</li>
    <li class="ease-breadcrumb__item">
      <a href="#">Settings</a>
    </li>
    <li class="ease-breadcrumb__separator" aria-hidden="true">/</li>
    <li
      class="ease-breadcrumb__item ease-breadcrumb__item--active"
      aria-current="page"
    >
      Security
    </li>
  </ol>
</nav>
```

### Modifiers/Variants

- `.ease-breadcrumb--pill`: Wraps the breadcrumb inside a rounded capsule container.
- `.ease-breadcrumb--chevron`: Changes the active color to cyan and adds glowing outlines.

## 3. Why is it useful?

Breadcrumbs are an essential navigation aid for high-hierarchy and multi-level websites. By incorporating staggering entrance animations, this component makes navigation feel fluid, responsive, and tactile. The component is also fully screen-reader friendly through native standard ARIA landmarks and states.
