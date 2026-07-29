# _text-highlight-underline-draw-utilities-tw.scss

Pure-CSS "drawn underline" utilities for EaseMotion CSS.

## What it does

Provides `ease-underline-draw`, a mixin that gives inline text (links, nav items, headings) an animated underline that "draws" itself in on hover — left-to-right, right-to-left, or growing outward from the center — instead of just appearing or fading. It's implemented with a `background-image` gradient sized at `0%` and animated to `100%`, not `text-decoration` or an extra pseudo-element, so it drops onto existing inline elements without changing markup.

## Parameters

### `ease-underline-draw($origin, $color, $thickness, $trigger)`

| Parameter     | Type   | Default                        | Description                                                        |
| ------------- | ------ | -------------------------------- | ---------------------------------------------------------------------- |
| `$origin`     | String | `"left"`                         | Draw direction: `"left"`, `"right"`, or `"center"`.                    |
| `$color`      | Color  | `$ease-underline-color` (`currentColor`) | Underline color.                                              |
| `$thickness`  | Length | `$ease-underline-thickness` (`2px`) | Underline thickness.                                             |
| `$trigger`    | String | `"hover"`                         | `"hover"` animates on hover/focus; `"always"` shows the underline drawn immediately (e.g. for an active nav link). |

### Configuration variables

| Variable                      | Default        | Description                                  |
| -------------------------------| -------------- | ------------------------------------------------ |
| `$ease-underline-color`        | `currentColor` | Default underline color, inherits text color.    |
| `$ease-underline-thickness`    | `2px`          | Default underline thickness.                     |
| `$ease-underline-offset`       | `0.15em`       | Gap between the text baseline and the underline.  |
| `$ease-underline-duration`     | `350ms`        | Draw animation duration.                          |
| `$ease-underline-timing`       | `ease-out`     | Draw animation easing.                            |

## Usage

```scss
@use "text-highlight-underline-draw-utilities-tw" as *;

// Default: draws left-to-right on hover
.link {
  @include ease-underline-draw;
}

// Draws from the center, thicker, brand color
.link--brand {
  @include ease-underline-draw($origin: "center", $thickness: 3px, $color: #5b21b6);
}

// Right-to-left variant
.link--rtl-style {
  @include ease-underline-draw($origin: "right");
}

// Always-drawn underline, e.g. for the current page's nav link
.nav-link.is-active {
  @include ease-underline-draw($trigger: "always");
}
```

## CSS compilation results

`@include ease-underline-draw;` with all defaults compiles to approximately:

```css
.link {
  display: inline-block;
  text-decoration: none;
  background-image: linear-gradient(to right, currentColor, currentColor);
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: 0% 100%;
  padding-bottom: 0.15em;
  transition: background-size 350ms ease-out;
}

.link:hover,
.link:focus-visible {
  background-size: 100% 2px;
}

@media (prefers-reduced-motion: reduce) {
  .link {
    transition: none;
  }
}
```

## Why this fits EaseMotion CSS

Text-level motion is an underrepresented category in most CSS animation libraries, which tend to focus on cards and buttons. This utility gives EaseMotion a lightweight, markup-free way to add intentional motion to inline text and navigation — a common request for link hover states — while staying consistent with the framework's zero-JS, utility-first approach and respecting `prefers-reduced-motion`.
