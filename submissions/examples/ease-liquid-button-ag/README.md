# Liquid Fill Button

A button that fills up with a smooth liquid wave animation on hover.

## Preview

Open `demo.html` in your browser and hover over the button to see the liquid wave effect.

## Implementation Details

- **No JavaScript:** The animation is powered completely by CSS keyframes.
- **Wave Animation:** Uses `::before` and `::after` pseudo-elements with slightly different border-radii (40% and 45%) spinning continuously. The rotating squircle shapes intersecting with a hidden overflow area create the illusion of flowing liquid waves.
- **Hover State:** On hover, the `top` position of the liquid element is animated upwards, giving the effect of filling the button.
