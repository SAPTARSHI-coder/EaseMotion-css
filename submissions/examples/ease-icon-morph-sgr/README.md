# Icon Morph Animation

## What does this do?

Enables smooth vector shape transitions (morphs) for interactive icons, such as morphing from a Play triangle to Pause bars, or a Hamburger menu to a Close 'X'.

## How is it used?

1. Wrap the vector paths in an SVG:

```html
<svg class="morph-icon" viewBox="0 0 100 100">
  <path class="path-left" d="M 25 15 L 55 32.5 L 55 67.5 L 25 85 Z" />
  <path class="path-right" d="M 55 32.5 L 85 50 L 85 50 L 55 67.5 Z" />
</svg>
```

2. Morph the paths in CSS when active (or using a container class):

```css
.is-active .path-left {
  d: path("M 20 15 L 45 15 L 45 85 L 20 85 Z");
}
.is-active .path-right {
  d: path("M 55 15 L 80 15 L 80 85 L 55 85 Z");
}
```

## Why is it useful?

Smooth state transitions enhance cognitive flow by showing how one control transitions into another (e.g. clicking Play physically splits the triangle into Pause bars). This provides high-fidelity, native-app-quality micro-interactions. Using CSS-driven SVG path transitions avoids heavy third-party animation libraries while remaining highly responsive and sharp.

## Tech Stack

- HTML
- CSS (SVG path `d` property animation, transitions)

## Preview

Open `demo.html` directly in your browser to see the effect.
