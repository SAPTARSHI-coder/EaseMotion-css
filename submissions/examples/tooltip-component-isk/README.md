# Tooltip Component

## What does this do?
A CSS-only, highly accessible tooltip component that reveals descriptive text when elements are hovered or focused, supporting top, bottom, left, and right directions.

## How is it used?
Add the `.ease-tooltip` class to an element and specify the tooltip content using the `data-tooltip` attribute. Add a direction modifier class (default is top):

```html
<button class="ease-tooltip ease-tooltip-top" data-tooltip="This is a top tooltip!">
  Hover Me
</button>

<button class="ease-tooltip ease-tooltip-right" data-tooltip="This is a right tooltip!">
  Hover Me
</button>
```

## Why is it useful?
Tooltips provide crucial interface descriptions without cluttering layouts. Implementing them entirely in CSS ensures zero runtime JS overhead and instant load times. This component also supports keyboard focus-visible selectors for comprehensive accessibility.
