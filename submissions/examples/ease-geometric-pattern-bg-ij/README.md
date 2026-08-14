# Geometric Pattern BG — Morphing Shapes (#36683)

An animated background of morphing geometric blobs that drift and reshape continuously, creating an evolving visual landscape.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pattern-color1` | `#7c5cbf` | Primary color for half the shapes |
| `--pattern-color2` | `#4fc3a1` | Secondary color for the other shapes |
| `--bg-color` | `#0f0f13` | Background color behind the pattern |
| `--morph-duration` | `12s` | Base duration of one morph cycle |

## Behavior

- Six absolutely-positioned blobs with radial gradients morph their `border-radius` and `transform` via keyframe animations.
- Each has a unique animation with staggered delays for organic feel.
- A semi-transparent card overlay with backdrop blur sits on top for readable content.
- Palette buttons let users switch color schemes dynamically.
