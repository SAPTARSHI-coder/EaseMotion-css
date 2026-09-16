# CSS Radiant Score Display

A responsive score component where the visual radiant glow increases
with the selected score.

## ✨ Features

- Multiple score presets
- Score-dependent glow intensity
- Pure CSS state switching
- Smooth visual transitions
- Responsive design
- Dark-mode compatible
- Keyboard-accessible score controls
- Focus-visible states
- Reduced-motion support
- No JavaScript required
- No external dependencies

## 🎯 Score States

The demo includes these preset values:

- 40
- 60
- 80
- 95
- 100

Each value is mapped to a different glow and ring intensity.

## ⚙️ How It Works

The score presets use visually hidden radio inputs.

CSS sibling selectors detect the selected input and update the
corresponding score state.

Example:

```css
#score-95:checked
  ~ .score-preview
  .radiant-score {
  --glow-size: 39px;
  --glow-alpha: 0.39;
  --ring-alpha: 0.45;
}