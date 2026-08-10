# Scarecrow

### What does this do?

It shows a scarecrow standing in a field at dusk. The whole figure sways on its post, its head lolls from side to side, the straw poking out of its sleeves rustles, its stitched eyes wink, and crows flap past behind it. Under reduced motion it stands still.

### How is it used?

```html
<div class="crow">
  <span class="crossc"></span>
  <span class="shirt"></span>
  <div class="headc">
    <span class="sack"></span>
    <span class="eyec ecl"></span>
  </div>
</div>
```

The stitched X eyes are drawn with two crossed `linear-gradient`s in a single element: each gradient paints a hard edged diagonal band and leaves the rest transparent, so an X costs no extra markup and no clip path. The scarecrow sways from `transform-origin: 50% 100%`, the foot of the post, so the whole figure leans from the ground rather than spinning around its middle, and the head has its own pivot at the neck, so it lolls slightly out of time with the body and looks limp rather than rigid.

### Why is it useful?

Harvest, autumn, and farm themes use a scarecrow. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
