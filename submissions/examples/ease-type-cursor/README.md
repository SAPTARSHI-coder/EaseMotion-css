# ease-type-cursor

## Overview

Adds a dynamic, blinking text cursor to the end of any element using a pure CSS `::after` pseudo-element. This utility is ideal for pairing with typewriter animations to recreate retro CLI or coding interface visuals.

## Features

- Fully CSS-driven blinking cursor using a step animation.
- Highly customizable cursor character using the `--ease-cursor-char` variable.
- Fully accessible with a `prefers-reduced-motion` override that stops the blinking.
- Standalone utility that pairs easily with text layout and typing animations.

## How it works

The utility injects a pseudo-element (`::after`) with content populated by the `--ease-cursor-char` CSS variable (defaulting to `|`). It runs a `0.7s` duration infinite loop animation using `steps(1)` to instantly toggle the cursor opacity between `1` and `0` at the halfway mark (50%), simulating a perfect hardware console cursor blink.

## How to Apply to Any Text

Simply add the `.ease-type-cursor` class to the text container:

```html
<span class="ease-type-cursor">System booted successfully.</span>
```

### Customizing the Cursor Character

You can specify a different cursor (such as an underscore `_` or block `█`) by overriding the `--ease-cursor-char` CSS variable:

```css
.custom-terminal-text {
  --ease-cursor-char: "█";
}
```

## Customization Variables

| Variable             | Default Value | Description |
| :------------------- | :------------ | :---------- | ------------------------------------- |
| `--ease-cursor-char` | `"            | "`          | The character rendered as the cursor. |

## Accessibility Notes

When `prefers-reduced-motion: reduce` is enabled by the system, the blinking animation is disabled and the cursor is shown as static to prevent potential cognitive strain or distraction.
