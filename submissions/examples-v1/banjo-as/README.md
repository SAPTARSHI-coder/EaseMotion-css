# Banjo

### What does this do?

It shows a banjo being played. The instrument rocks with the rhythm, the four strings blur as they vibrate, and notes drift up off the head. Under reduced motion the strings go quiet and the banjo rests.

### How is it used?

```html
<div class="banjo">
  <span class="potB"></span>
  <span class="headB"></span>
  <span class="bracketB"></span>
  <span class="stringB sb1"></span>
</div>
```

The tension brackets around the rim are a single `repeating-conic-gradient`, so the ring of hardware that would normally be a dozen elements is one property. The vibrating strings are the interesting trick: each string is only two pixels wide, and the keyframe scales it with `scaleX(2.4)`. Because a two pixel line widening and narrowing many times a second reads as a blur rather than a resize, that single scale is enough to sell a plucked string, and staggered delays keep the four from pulsing in unison.

### Why is it useful?

Music, folk, and instrument themes use a banjo. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
