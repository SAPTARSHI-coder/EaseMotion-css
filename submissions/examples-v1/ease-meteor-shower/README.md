# ease-meteor-shower

Animated shooting stars fall diagonally across a background container.

## Usage

```html
<div class="ease-meteors" id="sky">Page content</div>
```

Generate `.meteor` children via a small script loop, setting random positions, durations, and delays.

## Why it fits EaseMotion CSS

The CSS defines the visual. The script is just a loop that creates children — no event handling, no state.
