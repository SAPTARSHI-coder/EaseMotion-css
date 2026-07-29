# Sloth

### What does this do?

It shows a sloth hanging upside down from a branch by its hooked claws. It sways very slowly, blinks its sleepy eyes, gives the occasional yawn, and a vine drifts beside it. Under reduced motion the sloth hangs perfectly still.

### How is it used?

```html
<div class="sloth">
  <span class="claws cs1"></span>
  <span class="arms as1"></span>
  <span class="bodys"></span>
  <div class="heads"><span class="mask ms1"></span><span class="snouts"></span></div>
</div>
```

The hooked claws are circles with two of their four borders set to `transparent`, which leaves a curved hook rather than a ring, and rotating each one aims it over the branch. The whole sloth swings from a `transform-origin` up at the claws, so it pivots from where it is actually gripping instead of spinning about its belly.

### Why is it useful?

Wildlife, slow, and rest or "take it easy" themes use a sloth. This builds a hanging sloth with pure CSS shapes and animation, no images, with a reduced motion fallback.
