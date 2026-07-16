# Venus Flytrap

### What does this do?

It shows a venus flytrap in a pot, its two traps open and waiting while a fly buzzes above them. Hovering or focusing the plant snaps both traps shut on a fast easing curve and the fly disappears. Under reduced motion the traps stay open and nothing moves.

### How is it used?

```html
<div class="trapPlant" tabindex="0">
  <div class="trapA">
    <span class="lobeV lvl"></span>
    <span class="lobeV lvr"></span>
  </div>
</div>
```

The interlocking teeth are a `::after` pseudo-element on each lobe with a sawtooth `clip-path`, so a comb of nine spikes costs no extra markup. Each lobe keeps its open angle in a `--lv` custom property and pivots from the hinge where the two halves meet; the snap multiplies that angle by 0.08, collapsing it to almost closed while still respecting which way each lobe leans. The closing `cubic-bezier(0.2, 0, 0.1, 1)` over 0.28 seconds is the whole effect: a trap that eases shut is unconvincing, and a trap that snaps is not.

### Why is it useful?

Botanical, carnivorous plant, and trap or "gotcha" themes use a flytrap. This builds one with pure CSS clip paths and a transition driven hover, no images and no JavaScript, with a reduced motion fallback.
