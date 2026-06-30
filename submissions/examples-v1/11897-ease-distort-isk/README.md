# ease-distort-isk

## What does this do?

Applies a wave-like distortion warp effect by oscillating skewX, scaleX, and scaleY simultaneously. It supports both infinite repeating distortion and a single-trigger distortion.

## How is it used?

Add the infinite distortion class for a continuous warping effect:

```html
<div class="ease-distort-isk">Warping Element</div>
```

Or add the class `.ease-distort-once-isk` to run the animation once:

```html
<div class="ease-distort-once-isk">Warp Once</div>
```

You can customize the distortion intensity by overriding the `--ease-distort-intensity` CSS variable:

```css
.custom-element {
  --ease-distort-intensity: 1.5;
}
```

## Why is it useful?

Distortion and warping animations are powerful tools for glitch aesthetics, holographic interfaces, and retro monitor screen warnings. The wave-like warp adds an extreme sense of energy and disruption to any element, making it highly effective for errors, alert icons, or game UI components.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)
