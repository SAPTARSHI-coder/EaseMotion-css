# ⚡ Animation: Continuous Perimeter Border Trail Glow

### What does this do?

This layout feature implements a high-end outer perimeter outline tracking effect. Instead of the entire component border performing a sudden binary color swap on hover, a razor-sharp glowing light trail dynamically races along the rectangular boundaries of the card.

### How is it used?

Wrap your layout content cards with the `.ease-hover-border-trail` selector utility and override custom styles using local inline variable tokens:

```html
<div
  class="ease-hover-border-trail"
  style="--ease-trail-color: #ff0055; --ease-trail-speed: 2s;"
>
  <div class="ease-card-inner">
    <h3>Data Block Title</h3>
    <p>Modular card content components inside.</p>
  </div>
</div>
```

### Author

Pari Dubey
