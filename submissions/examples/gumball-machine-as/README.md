# Gumball Machine

### What does this do?

It shows a classic gumball machine: a glass globe packed with colorful gumballs on a red base with a coin knob. Hovering or focusing the machine dispenses a gumball, which drops out and settles at the chute. It works with no JavaScript. Under reduced motion the gumball simply appears at the chute.

### How is it used?

```html
<div class="machine" tabindex="0">
  <div class="globe"><span class="gum g1"></span>...</div>
  <div class="neck"><span class="knob"></span></div>
  <div class="base"><span class="ball"></span></div>
</div>
```

The globe is a glossy circle with `overflow: hidden`, and twenty gumballs are placed inside at precomputed offsets from the center so they pack without overlapping. On `:hover` or `:focus`, a hidden `ball` runs the `dispense` animation, dropping down and bouncing to rest at the base chute.

### Why is it useful?

Reward, gacha, and playful store interfaces use a gumball machine. This builds an interactive gumball machine with pure CSS and animation, no images or JavaScript, with a reduced motion fallback.
