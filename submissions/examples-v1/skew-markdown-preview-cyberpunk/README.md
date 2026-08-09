# Skew Markdown Preview - Cyberpunk Aesthetic (Pure CSS)

A highly stylized, pure CSS Markdown Previewer built for Cyberpunk and Hacker-themed interfaces. It uses the CSS checkbox hack to toggle between a "Raw" code editor and a rendered Markdown view, transitioning between the two using an aggressive, glitchy `transform: skewX()` animation.

## Features
- 📐 **Aggressive Skew Animation**: Uses `transform: skewX()` paired with a snappy `cubic-bezier` curve to make the panels snap into view like a glitching computer terminal.
- 🌆 **Cyberpunk Aesthetic**: Pre-configured with clipped geometry (`clip-path`), neon borders, monospace typography, and a dark grid background.
- 🎛️ **Pure CSS State Management**: Uses a hidden `<input type="checkbox">` to handle the Edit/Preview state without a single line of JavaScript.
- ♿ **Accessibility First**: Implements `prefers-reduced-motion` to strip out the aggressive skewing and sliding, falling back to a simple, calm opacity crossfade for users with vestibular sensitivities.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--skew-angle` | `-15deg` | The intensity of the tilt during the transition. |
| `--skew-timing` | `0.4s` | The speed of the transition snap. |
| `--skew-easing` | `cubic-bezier(...)` | Creates the "overshoot" glitch effect. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. The text inside the `.editor-panel` textarea is for display purposes; in a real React/Vue application, you would bind this textarea to your state and render a real Markdown parser inside the `.preview-panel`.