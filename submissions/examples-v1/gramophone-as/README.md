# Gramophone

### What does this do?

It shows a wind-up gramophone playing a record. The platter spins, the tone arm tracks slowly inward across the disc as it plays, the crank turns, and notes drift out of the horn. Hovering or focusing it spins the record up to two and a half times the speed. Under reduced motion everything stops.

### How is it used?

```html
<div class="gramo" tabindex="0">
  <div class="platter">
    <span class="discG"></span>
    <span class="grooves"></span>
  </div>
  <div class="toneArm"><span class="headG"></span></div>
</div>
```

The record's grooves are a `repeating-radial-gradient` of hairline rings, which gives hundreds of concentric grooves from one property, and because they sit inside the spinning platter they turn with the disc. The tone arm's motion is the detail worth copying: rather than swinging back and forth, it rotates from `transform-origin: 92% 50%`, its pivot at the far end, through a slow twelve second sweep that only ever moves inward. A record arm that oscillates looks wrong; one that creeps steadily toward the label looks like it is playing.

### Why is it useful?

Vintage, music, and nostalgic themes use a gramophone. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
