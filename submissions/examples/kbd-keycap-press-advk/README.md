# Keycap Press

## What does this do?

Keyboard shortcut keycaps that depress realistically on hover and press.

## How is it used?

```html
<p>Save: <kbd class="kcp">Ctrl</kbd> <kbd class="kcp">S</kbd></p>
```

## Why is it useful?

`components/kbd.css` styles keycaps as static boxes. Making them respond costs
two declarations and makes shortcut documentation noticeably more legible,
because the affordance reads as a key rather than as a bordered word.

The detail that makes it convincing is coupling the travel to the shadow. A hard
`box-shadow: 0 3px 0` acts as the side wall of the cap; pressing translates the
cap down by exactly 3px and reduces the shadow to zero, so the cap visually meets
the board instead of sliding over it. Animating the transform without the shadow
makes the key look like it is falling rather than being pressed.

The 90ms duration is deliberately short — key presses are the one interaction
where any perceptible lag feels wrong.

Under reduced motion the travel is removed but the press still gives feedback
through a background change, so the interaction is not silent. In `forced-colors`
the shadow is dropped entirely, since it is not painted there and the border
alone has to carry the cap shape.
