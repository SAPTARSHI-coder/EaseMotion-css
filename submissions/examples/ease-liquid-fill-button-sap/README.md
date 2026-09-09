# ease-liquid-fill-button-sap

A button that fills with liquid-like color rising from the bottom on hover, using an animated `::before` with a curved top edge that flattens as it fills.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="liquid-btn-sap">Hover Me</button>
```

## Customization
- Fill color and border color.
- `::before` starting `border-radius` — larger values = more pronounced liquid curve at low fill levels.
- Fill height (`140%`) — slightly overshoots 100% so the curved top edge fully clears the button top when filled.

## Notes
- The `::before` height animates from `0%` to `140%` (not 100%) specifically so its curved top edge is pushed entirely above the visible button area once "full," avoiding a visible curve remnant at the top.
- Text color transition has a slight delay (`0.1s`) so the fill visibly rises before the text flips to white, reading as the liquid overtaking the text rather than a simultaneous color swap.
- Respects `prefers-reduced-motion`: fill height and text color both apply instantly instead of animating.