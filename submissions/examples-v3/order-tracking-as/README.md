# Order Tracking

### What does this do?

It shows a delivery order tracker with four horizontal stages from ordered to delivered, each with an icon and a label, a connecting progress line that fills to the current stage, and an estimated arrival note.

### How is it used?

```html
<ol class="track" style="--progress: 66">
  <li class="track-step is-done"><span class="ts-dot"><svg>...</svg></span>Ordered</li>
  <li class="track-step is-current"><span class="ts-dot"><svg>...</svg></span>Shipped</li>
  <li class="track-step"><span class="ts-dot"><svg>...</svg></span>Delivered</li>
</ol>
```

Set `--progress` (0 to 100) for how far the connecting line fills. Mark completed stages `is-done` and the active one `is-current`, which give the icons their filled and ringed looks.

### Why is it useful?

Shops show a shipment tracker so customers know where a package is. This renders a horizontal delivery tracker with stage icons, a filled progress line driven by a custom property, and done and current states, using only CSS and inline SVG.
