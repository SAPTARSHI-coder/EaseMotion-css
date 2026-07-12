# Exclusive Accordion

### What does this do?

It shows an accordion where opening one panel closes the others, with a smooth height reveal and a rotating icon.

### How is it used?

```html
<div class="acc-item">
  <input type="radio" name="acc" id="a1" class="acc-input" checked />
  <label for="a1" class="acc-head">First item <span class="acc-icon" aria-hidden="true"></span></label>
  <div class="acc-body"><div class="acc-inner"><p>Content</p></div></div>
</div>
```

All items share one radio `name`, so selecting one closes any other. The panel opens by animating `grid-template-rows` from `0fr` to `1fr`.

### Why is it useful?

Single open accordions keep long content tidy in FAQs, settings, and menus. This animates a smooth open with a `grid-template-rows` transition driven by radio inputs, so it needs no JavaScript. The heads are keyboard reachable with a focus ring, and the transition is disabled under `prefers-reduced-motion: reduce`.
