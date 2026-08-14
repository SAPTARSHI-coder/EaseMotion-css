# Rocket

### What does this do?

It shows a rocket lifting off against a starry sky. The rocket has a nose cone, a fuselage with a window and stripe, two fins, and a flickering two tone exhaust flame, and it gently bobs while the stars twinkle. Under reduced motion everything holds still.

### How is it used?

```html
<div class="rocket">
  <span class="nose"></span>
  <div class="fuselage"><span class="window"></span></div>
  <span class="fin left"></span>
  <div class="flame"><span class="flame-outer"></span><span class="flame-inner"></span></div>
</div>
```

The nose and fins are CSS triangles, the fuselage is a rounded box with a gradient, and the flame is two rounded shapes that scale and fade with the `flicker` keyframes. A `hover` animation bobs the whole rocket.

### Why is it useful?

Launch pages, empty states, and loaders often use a rocket. This builds an animated rocket with a flickering flame using pure CSS shapes and keyframes, no images, with a reduced motion fallback.
