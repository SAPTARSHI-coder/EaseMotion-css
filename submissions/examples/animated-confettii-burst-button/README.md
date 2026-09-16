# ease-confetti-btn

A celebratory confetti-burst button for **EaseMotion CSS** — great for subscribe/submit/success actions.

## Usage

```html
<button class="confetti-btn" onclick="
  this.classList.remove('burst');
  void this.offsetWidth; /* force reflow to allow re-triggering */
  this.classList.add('burst');
">
  Subscribe
  <span class="confetti-particle" style="--x:-40px; --y:-60px; --c:#f87171;"></span>
  <!-- add 4-8 more particles with varied --x/--y/--c -->
</button>