# Object Scale Down Utility

This submission implements a media fit comparison showcase demonstrating the visual output of the `ease-object-scale-down` utility class.

---

## Technical Details

The `object-fit` parameters determine how replaceable elements (like `<img>`, `<video>`, `<svg>`) fill their structural boxes:

- **Cover**: Resizes to fill parent box, cropping as needed.
- **Contain**: Fits entire asset inside parent box, maintaining aspect ratio.
- **Scale-Down**: Dynamically acts as `none` (smaller natural size) or `contain` (larger natural size), preventing pixelation of small assets.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the three panels: verify that the center circle in the **Scale-Down** card is correctly contained and not stretched or cropped.
