# QR Code Frame

## What does this do?

A decorative corner-bracket frame around a QR code image — brackets at
opposite (top-left and bottom-right) corners — drawn entirely in CSS from
two pseudo-elements rather than baked into the image asset itself or built
from separate corner `<div>` elements.

## How is it used?

```html
<div class="qcf-frame">
  <img class="qcf-code" src="qr.svg" alt="QR code linking to the app download page" />
</div>
```

`.qcf-frame::before` draws the top-left bracket (a box with its right and
bottom borders removed), `::after` draws the bottom-right bracket the
mirror-opposite way — two corners from two pseudo-elements, using
`position: absolute` at opposite corners of the padded frame.

## Why is it useful?

A "frame" around a QR code is sometimes baked directly into the exported
image asset, which means any change to the frame's style — thickness,
colour, corner radius, or even wanting to remove it for a different
context — requires regenerating and re-exporting the QR code image, even
though the actual QR data hasn't changed at all. Keeping the frame as a
CSS decoration entirely separate from the image means the same QR image
asset can be reused with or without a frame, or with a differently-styled
frame, purely by changing CSS — nothing about the underlying scannable
image is ever touched.

Using pseudo-elements for both brackets (rather than separate `<div>`
elements marked up per corner) keeps the frame purely decorative and out
of the accessible DOM tree entirely — there's no extra markup a screen
reader could stumble on, since `::before`/`::after` content is never part
of the accessibility tree unless explicitly given text content. Extending
this to all four corners follows the same two-pseudo-element pattern used
here, just mirrored onto the frame's other diagonal via two more
pseudo-elements on a wrapping element, or by restructuring to use a single
`box-shadow`-based technique if all four corners share identical styling.
