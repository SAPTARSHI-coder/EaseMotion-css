# typewriter-text-ak

Pure CSS typewriter text entrance effect — no JavaScript required.

## How to use

Set `--ch-count` (character count width e.g., `22ch`) and `--steps-count` (matching number of steps) inline to fit your text string length.

```html
<div class="ease-typewriter" style="--ch-count: 22ch; --steps-count: 22;">
  EaseMotion CSS Framework
</div>

<!-- Color Variants -->
<div class="ease-typewriter ease-typewriter--cyan" style="--ch-count: 18ch; --steps-count: 18;">...</div>

<!-- Looping Variant -->
<div class="ease-typewriter ease-typewriter--loop">...</div>