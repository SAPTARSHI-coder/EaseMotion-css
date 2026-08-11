# Saxophone

### What does this do?

It shows a brass saxophone being played. The horn sways gently, the keys press themselves down the body in sequence, and golden music notes drift up out of the bell. Under reduced motion the sax rests and no notes float.

### How is it used?

```html
<div class="sax">
  <span class="mouth"></span>
  <span class="neck"></span>
  <span class="body"></span>
  <span class="bow"></span>
  <span class="bell"></span>
  <span class="key k1"></span>
</div>
```

The curve at the bottom of the horn is a thick quarter-circle border, which gives the bow its bend from one element. The bell is a flared rounded shape with a dark radial gradient for its opening, and each key runs a `press` animation on a staggered delay so the fingering travels down the body. Music notes float out of the bell on a looping `float`.

### Why is it useful?

Music, jazz, and nightlife themes use a saxophone. This builds a played saxophone with pure CSS shapes and animation, no images, with a reduced motion fallback.
