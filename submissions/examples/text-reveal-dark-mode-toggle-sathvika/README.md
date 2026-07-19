# Ease Text Reveal Dark Mode Toggle

A dark/light mode toggle switch where the text label ("Light" / "Dark") animates in with a text-reveal transition as the toggle state changes. **Pure CSS, zero JavaScript** — state is handled entirely via the native `<input type="checkbox">` `:checked` pseudo-class.

## CSS Custom Properties

| Property                     | Default   | Description                          |
|--------------------------------|-----------|------------------------------------------|
| `--ease-toggle-duration`       | `0.4s`    | Transition duration                        |
| `--ease-toggle-easing`         | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-toggle-track-light`    | `#e5e7eb` | Track background color (light/unchecked)   |
| `--ease-toggle-track-dark`     | `#1f2937` | Track background color (dark/checked)      |
| `--ease-toggle-thumb`          | `#ffffff` | Thumb (knob) color                         |
| `--ease-toggle-accent`         | `#4f46e5` | Focus outline color                        |

## Usage

```html
<label class="ease-toggle-wrapper">
  <input type="checkbox" class="ease-toggle-input" id="darkModeToggle" />
  <span class="ease-toggle-label">
    <span class="ease-toggle-thumb"></span>
  </span>
  <span class="ease-toggle-text">
    <span class="ease-toggle-text__option ease-toggle-text__option--light">Light</span>
    <span class="ease-toggle-text__option ease-toggle-text__option--dark">Dark</span>
  </span>
</label>
```

Wrap the whole thing in a `<label>` so clicking anywhere (track, thumb, or text) toggles the checkbox — no JS event listeners needed. To actually apply a dark theme to your page, target `:has(.ease-toggle-input:checked)` on an ancestor, or add your own minimal JS if you need broader browser support than `:has()`.

## Behavior

- Both "Light" and "Dark" labels are stacked and clipped via `overflow: hidden`; the checked state slides the current label out and the new one in via `translateY`.
- The thumb slides across the track, and the track background color crossfades, all driven by the `:checked` sibling selector.

## Accessibility

- Uses a real `<input type="checkbox">`, so it's natively keyboard operable (Tab + Space) and exposes correct state to screen readers.
- Wrapping `<label>` ensures the whole control has a large, easy click target.
- Visible `:focus-visible` outline on the hidden input reflects onto the visible track.
- `prefers-reduced-motion: reduce` collapses all transitions to near-instant.

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and CSS custom properties for theming, consistent with the framework's zero-dependency, animation-first, pure-CSS philosophy — this component requires no JavaScript whatsoever.
