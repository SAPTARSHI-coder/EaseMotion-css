# Emphasis Text Reveal

**Issue:** [#36641](https://github.com/easemotion/easemotion-css/issues/36641)

Animated highlight sweep for emphasizing key words in text. Highlighted words start muted and are revealed with an animated sweep, underline, or glow effect. Click the text or the Reveal button to trigger.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--text-color` | `#e2e8f0` | Color of revealed text |
| `--highlight-color` | `#facc15` | Color of the highlight sweep/underline/glow |
| `--sweep-duration` | `1s` | Duration of the reveal animation per word |
| `--bg-color` | `#1e1e2e` | Card background color |

## Features

- Three reveal styles: Sweep (highlight bar sweeps across), Underline (underline grows from left), Glow (text-shadow glow fades in)
- Words animate with staggered delays
- Click the text or the Reveal button to trigger
- Adjustable sweep duration and highlight opacity via sliders
- Dark theme
