# ease-animated-weather-icon-sap

A "partly cloudy" weather icon built from pure CSS shapes — a pulsing sun peeking behind a gently drifting cloud.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="weather-icon-sap"><div class="sun"></div><div class="cloud"></div></div>
```

## Customization
- Sun/cloud colors, sizes, and positions.
- Pulse/drift animation range and speed.
- The cloud's puffy shape is built from the base rounded rectangle plus two `::before`/`::after` circles — add more pseudo-shapes for a fluffier cloud.

## Notes
- No icon font, SVG, or image asset — sun and cloud are both pure CSS shape compositions (circle + rounded-rect + circles).
- Sun and cloud animate independently on their own loops (pulse vs drift) rather than a single combined animation, giving a more natural, non-synchronized weather feel.
- Respects `prefers-reduced-motion`: both animations are disabled, icon renders as a static illustration.