# Pizza Slice

### What does this do?

It shows a hot slice of pepperoni pizza hanging from the crust. The slice swings from its top edge, the toppings sizzle, the cheese strings stretch and pull back under the tip, and steam drifts off the top. Under reduced motion it hangs still.

### How is it used?

```html
<div class="slice">
  <span class="crust"></span>
  <span class="base"></span>
  <span class="cheesep"></span>
  <span class="pep pp1"></span>
</div>
```

The wedge is a `clip-path` triangle, and the cheese is a second, slightly inset triangle using the same clip, so the crust edge shows through underneath without any extra shape work. The slice swings from `transform-origin: 50% 0` at the crust, so it hangs from where a hand would hold it rather than pivoting around its middle. Each cheese string stretches from its own top anchor, so it drips downward instead of growing in both directions.

### Why is it useful?

Food, delivery, and menu themes use a pizza slice. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
