# Interactive Animation Playground

An interactive playground for experimenting with EaseMotion CSS animation classes in real time. Tweak duration, easing, delay, direction, and fill mode — then copy the generated code for use in your projects.

## Features

- **Live Preview**: Side-by-side controls and preview panel
- **30+ Animation Classes**: All entrance, attention, and special effect animations
- **Element Picker**: Switch between card, button, image, and text elements
- **Custom Timing**: Sliders for duration (0.1s–5s) and delay (0s–3s)
- **Easing Functions**: Standard CSS easings plus bounce and spring curves
- **Direction & Fill Mode**: Control animation playback direction and end state
- **Infinite Loop Toggle**: Toggle looping on/off
- **Code Export**: Auto-generated HTML+CSS snippet with copy-to-clipboard
- **Shareable URLs**: Animation configuration is encoded in the URL hash
- **Starter Presets**: 8 preset configurations for quick inspiration
- **Responsive**: Works on desktop and tablet

## File Structure

```
submissions/examples/interactive-playground-pk/
  demo.html         # Main playground page (HTML + CSS + JS)
  style.css         # Playground-specific layout and component styles
  README.md         # This file
```

## How to Use

1. Open `demo.html` directly in any modern browser (no server required)
2. Select an animation class from the dropdown
3. Adjust duration, delay, easing, direction, and fill mode
4. Toggle infinite loop for continuous playback
5. Switch element type to see the animation on different elements
6. Click any preset card for quick inspiration
7. Copy the generated code snippet for use in your project
8. Share your configuration via the URL (encoded in the hash)

## Animation Classes Covered

| Category | Classes |
|----------|---------|
| **Entrance** | ease-fade-in, ease-fade-out, ease-slide-up, ease-slide-down, ease-slide-in-left, ease-slide-in-right, ease-slide-in-from-top, ease-slide-in-from-bottom, ease-slide-in-from-left, ease-slide-in-from-right, ease-slide-in-from-top-left, ease-slide-in-from-top-right, ease-slide-in-from-bottom-left, ease-slide-in-from-bottom-right, ease-bounce-in, ease-zoom-in, ease-zoom-out, ease-flip, ease-blur-to-focus |
| **Attention** | ease-bounce, ease-rotate, ease-pulse, ease-wave, ease-ping, ease-shake, ease-float |
| **Special** | ease-gradient-rotation, ease-shimmer-text |

## Notes

- The playground embeds its own keyframe definitions for self-containment
- All CSS custom properties are scoped to the demo
- Compatible with Chrome, Firefox, Safari, and Edge
- No core framework files were modified

Fixes #13894
