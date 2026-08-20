# Cyberpunk Text Glitch Effect (`.ease-text-glitch`)

## Description
This submission fulfills Issue #57082. It introduces a high-impact, cyberpunk-style text glitch animation utility. 

This effect is achieved entirely in CSS by using pseudo-elements to duplicate the text into Cyan and Magenta color channels, and then animating their `clip-path` and `transform` properties to create chaotic, erratic slicing effects.

## Features
- **Zero JavaScript:** Fully powered by CSS `@keyframes` and `clip-path: polygon()`.
- **Intermittent Glitch:** By default, the animation plays a quick glitch burst every few seconds and remains static the rest of the time, preventing it from being overly distracting.
- **Hover Intensification:** Hovering over the text triggers a continuous, intense glitch loop.
- **Accessible:** Respects `prefers-reduced-motion` by completely hiding the glitch layers and disabling the animation for users with vestibular disorders.

## Usage
Simply add the `.ease-text-glitch` class to any text element. **Crucially**, you must also provide the exact same text content in the `data-text` attribute, as the CSS pseudo-elements rely on this to create the color channels.

```html
<h1 class="ease-text-glitch" data-text="ERROR 404">ERROR 404</h1>
```

## Files Included
- `demo.html`: A presentation of the glitch effect.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
