# _dark-mode.scss

A mixin for applying dark-mode color overrides in EaseMotion CSS, supporting both automatic OS-level detection and manual toggling.

## What it does

Provides `ease-dark-mode`, a content mixin that wraps a block of styles in either:

- a `prefers-color-scheme: dark` media query (`"auto"` mode),
- a `.ease-dark &` ancestor selector for manual toggling (`"class"` mode), or
- both at once (`"both"` mode, the default for the convenience mixin).

Also includes `ease-dark-surface`, a shortcut that applies EaseMotion's default dark surface color, text color, border color, and a smooth color-scheme transition in one call.

## Parameters

### `ease-dark-mode($mode, $toggle-class)`

| Parameter       | Type   | Default        | Description                                                        |
| --------------- | ------ | -------------- | -------------------------------------------------------------------- |
| `$mode`         | String | `"auto"`       | `"auto"`, `"class"`, or `"both"` — which trigger mechanism(s) to emit. |
| `$toggle-class` | String | `".ease-dark"` | Class used for manual dark-mode toggling.                            |

### `ease-dark-surface($mode)`

| Parameter | Type   | Default  | Description                                   |
| --------- | ------ | -------- | ---------------------------------------------- |
| `$mode`   | String | `"both"` | Same options as `ease-dark-mode`.              |

## Usage

```scss
@use "dark-mode" as *;

// Automatic OS-level dark mode only
.card {
  background: #fff;
  @include ease-dark-mode {
    background: $ease-dark-surface;
    color: $ease-dark-text;
  }
}

// Manual toggle only, via <html class="ease-dark">
.sidebar {
  @include ease-dark-mode($mode: "class") {
    background: $ease-dark-surface;
  }
}

// Convenience shortcut: both triggers + transition, one line
.panel {
  @include ease-dark-surface;
}
```

## Why this is useful

Dark mode support is one of the most commonly requested features across contributor submissions, and everyone tends to reinvent it slightly differently. This mixin standardizes the two dominant strategies (OS preference vs. manual toggle) behind one API, so consumers can opt into either or both without duplicating media-query logic.
