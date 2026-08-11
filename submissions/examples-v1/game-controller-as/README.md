# Game Controller

### What does this do?

It shows a game controller with a shaped body, two shoulder bumpers, a D pad, four colored face buttons (A, B, X, Y), two analog sticks, and a pair of small center buttons. The face buttons press in when clicked.

### How is it used?

```html
<div class="pad">
  <div class="dpad"><span class="up"></span>...</div>
  <div class="face"><button class="btn a">A</button>...</div>
  <span class="stick left-stick"></span>
</div>
```

The body uses an asymmetric `border-radius` to form the grips. The D pad is built from positioned spans, the face buttons sit in a diamond with their classic colors, and the sticks are radial gradient circles with an inset ring.

### Why is it useful?

Game sites, settings, and controller mapping screens show a gamepad. This builds one entirely with CSS shapes and gradients, with press feedback and no images.
