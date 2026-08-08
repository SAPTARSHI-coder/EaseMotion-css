# ease-counter

An animated number counter for **EaseMotion CSS**, powered by the CSS `@property` API — the browser natively tweens the integer, no per-frame JS math required.

## Usage

```html
<span class="counter" data-target="12500">0</span>

<script>
  document.querySelectorAll('.counter').forEach(el => {
    requestAnimationFrame(() => {
      el.style.setProperty('--num', el.dataset.target);
    });
  });
</script>