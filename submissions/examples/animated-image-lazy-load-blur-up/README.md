# ease-blur-up

A blur-up progressive image loading effect for **EaseMotion CSS** — starts blurred, sharpens smoothly once the full image loads.

## Usage

```html
<div class="blur-up">
  <img
    src="image-large.jpg"
    loading="lazy"
    class="blur-up-img"
    onload="this.classList.add('loaded')"
  >
</div>