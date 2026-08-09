# Forklift

### What does this do?

It shows a forklift lifting a crate onto a warehouse shelf. The carriage rides up the mast and back down on a loop, the crate rocks slightly as it starts and stops, the wheels turn, the warning beacon flashes, and the machine idles. Under reduced motion everything parks.

### How is it used?

```html
<div class="lift">
  <span class="mast"></span>
  <div class="carriage">
    <span class="forkF ff1"></span>
    <div class="crate">...</div>
  </div>
</div>
```

The forks and the crate both live inside one `carriage` wrapper, so a single `translateY` on that wrapper lifts the whole load up the mast: nothing has to be kept in sync by hand. The crate then carries its own small rotation on the same five second clock, timed to tip just after the lift starts and just after it stops, which is what makes the load feel heavy rather than glued to the forks. The mast rails and the crate's planks are both single repeating gradients.

### Why is it useful?

Warehouse, logistics, and machinery themes use a forklift. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
