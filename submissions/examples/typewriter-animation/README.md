# Pure CSS Typewriter Text Animation Effect

A typography utility class `.ease-typewriter` that animates text as if it is being typed out character-by-character on a retro terminal, finishing with a blinking cursor.

## How is it used?

Include the `.ease-typewriter` class on your text element. Use CSS variables to control the character count (`--steps`) so the `steps()` animation feels choppy and realistic. Set `--ch-length` if you prefer using `ch` units (e.g., `39ch`) over `100%` width.

```html
<div class="ease-typewriter-wrapper" style="display: inline-block;">
  <h1 class="ease-typewriter" style="--steps: 39; --ch-length: 39ch;">
    Initializing retro terminal sequence...
  </h1>
</div>
```

## Why is this useful?

Typewriter effects are fantastic for landing page hero headers to grab attention. Generally, developers use JS to append substrings on an interval timer. We can recreate this exactly using CSS `overflow: hidden`, `white-space: nowrap`, and the `steps()` animation function, completely offloading the work to the browser's rendering engine.
