# Squirrel

### What does this do?

It shows a squirrel on a branch nibbling an acorn. Its big bushy tail flicks behind it, its head and paws bob together in a fast nibbling rhythm, and it blinks. Under reduced motion the squirrel holds still.

### How is it used?

```html
<div class="squirrel">
  <span class="tail"></span>
  <span class="body"></span>
  <div class="head">...</div>
  <div class="arms"><span class="arm"></span><span class="acorn"></span></div>
</div>
```

The tail is one large rounded shape with a lighter highlight layered inside, flicking from a `transform-origin` where it meets the rump so it sweeps rather than spins. The head and the arms share the same `nibble` animation and duration, so the paws lift the acorn to the mouth in time with the chewing rather than drifting out of sync.

### Why is it useful?

Autumn, woodland, and storing or saving themes use a squirrel. This builds a nibbling squirrel with pure CSS shapes and animation, no images, with a reduced motion fallback.
