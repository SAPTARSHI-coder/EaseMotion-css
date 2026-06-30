# ease-noise-texture

SVG filter-based noise texture overlay for EaseMotion CSS.

## Usage

```css
.element::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  background-size: 200px 200px;
  mix-blend-mode: overlay;
  pointer-events: none;
}
```

Parameters: baseFrequency (higher = finer grain), numOctaves (detail), opacity (strength).
