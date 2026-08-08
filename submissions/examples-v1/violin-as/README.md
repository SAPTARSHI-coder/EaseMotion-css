# Violin

### What does this do?

It shows a violin being played. The bow saws back and forth across the strings, the strings blur as they vibrate, the body sways with the playing, and notes drift up and fade. Under reduced motion the instrument rests silently.

### How is it used?

```html
<div class="viol">
  <span class="upper"></span>
  <span class="lower"></span>
  <span class="waistl"></span>
  <span class="stringv sv1"></span>
</div>
```

The violin's hourglass body is three shapes and one trick: a small upper bout, a wider lower bout, and two circles painted in the page's own background colour that bite into the sides to carve the waist, so the classic curve needs no clip path. A string vibrates by scaling only in x from `transform-origin: 50% 100%`, which widens it into a blur without moving it off the bridge, and the four strings share that keyframe with staggered delays so they shimmer independently. The scroll is a circle with one border side set to `transparent`.

### Why is it useful?

Music, orchestra, and arts themes use a violin. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
