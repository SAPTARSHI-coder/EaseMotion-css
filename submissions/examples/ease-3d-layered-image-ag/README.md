# 3D Layered Image Hover

An image card that splits into multiple floating 3D layers when hovered, built entirely with CSS 3D transforms and transitions.

## Preview

Open `demo.html` in your browser and hover over the card to see the layers split apart.

## Implementation Details

- **No JavaScript:** The 3D splitting effect is powered completely by CSS hover states.
- **3D Transform:** The parent container is given `perspective`, and the card wrapper has `transform-style: preserve-3d`. Initially, the card is tilted isometric-style using `rotateX` and `rotateZ`.
- **Layer Spread:** On hover, the tilt is reset, and the multiple absolute-positioned inner layers transition their `translateZ`, `translateX`, and `translateY` properties to spread apart, creating a striking layered depth effect.
