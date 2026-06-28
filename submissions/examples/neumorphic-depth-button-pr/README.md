# Interactive Neumorphic Depth Button

## What does this do?
A tactile, premium micro-interaction button leveraging neumorphic shadow
mechanics. The button displays a soft, elevated outset shadow in its base
state. On hover it lifts slightly, and on click/active it smoothly
transitions to a sunken inset shadow layer, creating a realistic physical
depth deflection.

## How is it used?

```html
<button class="ease-neumorphic-btn">Press Me</button>
```

For a toggled/pressed state (e.g. an active filter button), add `is-pressed`:

```html
<button class="ease-neumorphic-btn is-pressed">Active</button>
```

## Why is it useful?
Tactile neumorphic interfaces usually require complex canvas renderings or
nested markup states. This feature provides a zero-dependency, highly
interactive button option that uses standard CSS `box-shadow` values,
transitioning smoothly on `:hover` and `:active` pseudo-classes to maximize
responsiveness and visual feedback. Pure CSS, no JS required, with
prefers-reduced-motion support.