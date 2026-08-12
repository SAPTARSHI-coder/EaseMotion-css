# Image Hover Zoom Card

### What does this do?

It shows media cards where the image gently zooms on hover inside a clipped frame while the caption slides up, all in CSS. The demo uses gradient art in place of photos so it is self contained.

### How is it used?

```html
<a class="media-card" href="#">
  <span class="media-img" aria-hidden="true"></span>
  <span class="media-overlay">
    <span class="media-caption">
      <strong>Northern Lights</strong>
      <span>Travel</span>
    </span>
  </span>
</a>
```

Swap the `.media-img` background for a real image, for example `background: url(photo.jpg) center / cover`. The frame clips the overflow so the zoom stays inside the card.

### Why is it useful?

Media cards with a hover zoom are common in galleries, blogs, and product grids. This scales the image inside an `overflow: hidden` frame and reveals the caption with transitions, so it needs no JavaScript. The card is a focusable link that also responds to keyboard focus with a ring, and the motion is disabled under `prefers-reduced-motion: reduce`.
