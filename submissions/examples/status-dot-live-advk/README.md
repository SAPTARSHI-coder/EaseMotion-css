# Live Status Dot

## What does this do?

Service status indicators that encode state through shape and text as well as
colour, with a live ping on the healthy state only.

## How is it used?

```html
<ul class="sdl" role="list">
  <li><span class="sdl-d sdl-d--up"></span>API gateway <span class="sdl-t">Operational</span></li>
  <li><span class="sdl-d sdl-d--down"></span>Webhooks <span class="sdl-t">Outage</span></li>
</ul>
```

## Why is it useful?

Status dots are the textbook failure of colour-only encoding. Red and green sit
at the exact axis of the most common form of colour blindness, so for roughly one
in twelve men a green "operational" dot and a red "outage" dot are the same mark.
Giving each state a distinct shape — circle, diamond, square, hollow ring — makes
the indicator readable without relying on hue at all, and the text label makes it
unambiguous.

The animation decision is the other half. Only the healthy state pings. It is
tempting to make failures flash, but a pulsing red dot sits next to incident text
the user is trying to read during an outage — precisely the wrong moment to add
competing movement. A steady mark reads as more serious, not less.

Because the shapes carry the meaning, the `forced-colors` block can flatten every
dot to `CanvasText` without losing information, which a colour-only version could
not survive.
