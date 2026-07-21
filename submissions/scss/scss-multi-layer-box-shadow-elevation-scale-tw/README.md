# _multi-layer-box-shadow-elevation-scale-tw.scss

A multi-layer box-shadow elevation system for EaseMotion CSS.

## What it does

Provides a 6-step elevation scale (levels `0`–`5`), where each level stacks two shadow layers — a tighter "key" shadow and a softer, wider "ambient" shadow — to create a more convincing sense of physical depth than a single flat `box-shadow` can. Higher levels use larger offsets/blur and slightly higher opacity, so elevation reads as a continuous, believable scale rather than an abrupt jump.

Exposes two entry points:

- **`ease-elevation-shadow($level)`** — a function that returns the raw `box-shadow` value for a level, for use inline or in your own composed declarations.
- **`ease-elevation($level, $transition: true)`** — a mixin that applies the shadow directly and (optionally) a smooth transition, for elements whose elevation changes on hover/focus.

## Parameters

### `ease-elevation-shadow($level)`

| Parameter | Type   | Description                                             |
| --------- | ------ | --------------------------------------------------------- |
| `$level`  | Number | Elevation key, `0`–`5`, matching `$ease-elevation-levels`. |

### `ease-elevation($level, $transition)`

| Parameter     | Type    | Default | Description                                              |
| ------------- | ------- | ------- | ---------------------------------------------------------- |
| `$level`      | Number  | —       | **Required.** Elevation key, `0`–`5`.                       |
| `$transition` | Boolean | `true`  | Whether to include a `box-shadow` transition on the rule.  |

### Configuration variables

| Variable                                | Default        | Description                                  |
| ---------------------------------------- | -------------- | ---------------------------------------------- |
| `$ease-elevation-color`                  | `15, 17, 23`   | RGB triplet used as the shadow color base.      |
| `$ease-elevation-transition-duration`    | `200ms`        | Duration for the mixin's optional transition.   |
| `$ease-elevation-transition-timing`      | `ease`         | Easing for the optional transition.             |
| `$ease-elevation-levels`                 | *(map, see source)* | The level → shadow-layers definition, overridable before `@use`. |

## Usage

```scss
@use "multi-layer-box-shadow-elevation-scale-tw" as *;

// Static elevation
.card {
  @include ease-elevation(1);
}

// Elevation that rises on hover, using the function directly
.card--interactive {
  @include ease-elevation(1);

  &:hover {
    box-shadow: ease-elevation-shadow(3);
  }
}

// Custom color, e.g. a colored glow instead of neutral shadow
.card--brand {
  $ease-elevation-color: 91, 33, 182; // override before use
  @include ease-elevation(2);
}
```

## CSS compilation results

For reference, here is what each level compiles to with the default `$ease-elevation-color: 15, 17, 23`:

```css
/* Level 0 */
box-shadow: 0 0 0 0 rgba(15, 17, 23, 0);

/* Level 1 */
box-shadow: 0 1px 2px 0 rgba(15, 17, 23, 0.1), 0 1px 3px 1px rgba(15, 17, 23, 0.08);

/* Level 2 */
box-shadow: 0 2px 4px 0 rgba(15, 17, 23, 0.12), 0 3px 6px 2px rgba(15, 17, 23, 0.1);

/* Level 3 */
box-shadow: 0 4px 8px 0 rgba(15, 17, 23, 0.14), 0 6px 12px 3px rgba(15, 17, 23, 0.12);

/* Level 4 */
box-shadow: 0 8px 16px 0 rgba(15, 17, 23, 0.16), 0 10px 20px 4px rgba(15, 17, 23, 0.14);

/* Level 5 */
box-shadow: 0 16px 28px 0 rgba(15, 17, 23, 0.18), 0 20px 36px 6px rgba(15, 17, 23, 0.16);
```

## Why this fits EaseMotion CSS

Elevation is a common but frequently reinvented pattern — most projects hardcode one-off `box-shadow` values per component, which drifts out of sync over time. This module centralizes elevation as a single overridable scale with a documented API, so any EaseMotion component (cards, modals, dropdowns, toasts) can opt into a consistent depth system, and pairs naturally with EaseMotion's existing hover/motion utilities for elements that "lift" on interaction.
