# Ice Cream Cone

### What does this do?

It shows a three-scoop ice cream cone with a cherry on top, slowly melting. Drips stretch and shrink down the sides of the bottom scoop, and every so often a droplet breaks loose and falls. Under reduced motion the drips hold their shape and nothing falls.

### How is it used?

```html
<div class="icecream">
  <span class="cherry"></span>
  <span class="scoop s3"></span>
  <span class="drip dp1"></span>
  <span class="cone"></span>
</div>
```

The waffle cone is a `clip-path` triangle with two crossed repeating gradients drawn over it for the lattice. The scoops are stacked radial-gradient circles, and each `drip` is a rounded blob anchored at its top that stretches with `scaleY` in the `ooze` animation, while falling droplets run a separate `falldrop`.

### Why is it useful?

Dessert, summer, and food themes use an ice cream cone. This builds a melting ice cream with pure CSS shapes and animation, no images, with a reduced motion fallback.
