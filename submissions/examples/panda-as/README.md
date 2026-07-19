# Panda

### What does this do?

It shows a giant panda sitting and chewing a stalk of bamboo. Its head works up and down in a steady chewing rhythm, it blinks, and its body sways gently. Under reduced motion the panda sits still.

### How is it used?

```html
<div class="panda">
  <span class="ear le"></span>
  <span class="body"></span>
  <div class="head"><span class="patch lp"></span><span class="eye le2"></span></div>
  <div class="bamboo"><span class="stalk"></span><span class="leafb l1"></span></div>
</div>
```

The signature eye patches are dark ellipses rotated outward so they slant the way a panda's markings do, with the white eye and pupil layered on top. The head chews with a subtle `scaleY` squash rather than a rotation, which reads as jaw movement instead of a nod. The bamboo stalk's segments come from a repeating gradient.

### Why is it useful?

Wildlife, conservation, and calm or cute mascot themes use a panda. This builds a chewing panda with pure CSS shapes and animation, no images, with a reduced motion fallback.
