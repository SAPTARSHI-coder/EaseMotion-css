# ease-typewriter-mp

## What does this do?
Animates text as if it is being typed character by character, with a blinking cursor — using pure CSS and no JavaScript.

## How is it used?

Add the `.ease-typewriter-mp` class to any inline or inline-block element and set two CSS variables to match your text:

```html
<span
  class="ease-typewriter-mp"
  style="--ease-typewriter-chars: 20; --ease-typewriter-speed: 2s;"
>
  Your text goes here.
</span>
```

| Variable | Default | Description |
|---|---|---|
| `--ease-typewriter-chars` | `30` | Number of characters in the text |
| `--ease-typewriter-speed` | `2s` | Total time to type the full string |

**Important:** Set `--ease-typewriter-chars` to match the exact character count of your text for the stepping to align correctly.

## Why is it useful?
Typewriter effects are one of the most requested hero-section animations and are traditionally implemented with JavaScript libraries. This utility delivers the same effect using only `steps()` easing on `width`, an animated `border-right` cursor, `white-space: nowrap`, and `overflow: hidden` — keeping EaseMotion CSS dependency-free and true to its philosophy of expressive motion through pure CSS.
