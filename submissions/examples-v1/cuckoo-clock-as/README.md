# Cuckoo Clock

### What does this do?

It shows a carved cuckoo clock. The pendulum swings, the hands sweep around the dial at different speeds, the weights hang below on their chains, and every few seconds the cuckoo bird pops out of its little door, flaps, and ducks back inside. Under reduced motion everything holds still.

### How is it used?

```html
<div class="clock">
  <span class="roofc"></span>
  <div class="case">
    <div class="door"><div class="cuckoo"></div></div>
    <div class="face"><span class="handm"></span></div>
  </div>
  <div class="pend"><span class="rod"></span><span class="bob"></span></div>
</div>
```

The bird hides because the `door` clips it with `overflow: hidden`, so the `cuck` animation just translates it down out of view and back up, making it appear from inside the clock. The pendulum's rod and bob live in a zero-size wrapper whose `transform-origin` is at the top, so the whole assembly swings from its suspension point rather than pivoting about the bob.

### Why is it useful?

Time, vintage, and alarm or reminder themes use a cuckoo clock. This builds a working cuckoo clock with pure CSS shapes and animation, no images, with a reduced motion fallback.
