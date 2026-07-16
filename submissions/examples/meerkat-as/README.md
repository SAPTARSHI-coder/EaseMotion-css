# Meerkat

### What does this do?

It shows a meerkat standing sentry on a mound in the desert. It rises on its toes, sweeps its head left and right scanning the horizon, its tail sways for balance, it blinks, and the sun pulses behind it. Under reduced motion the sentry holds its pose.

### How is it used?

```html
<div class="kat">
  <span class="bodyk"></span>
  <span class="tailk"></span>
  <div class="headk">
    <span class="facek"></span>
    <span class="snout"></span>
  </div>
</div>
```

The head scan is the key part: the head wrapper turns from `transform-origin: 50% 100%`, the point where the neck meets the body, so the whole face swings on the neck instead of spinning around its own middle. The tail does the same from its base. Because the scan lives on the wrapper, the eyes and ears keep their own positions inside it and only need their own blink animation.

### Why is it useful?

Wildlife, watchful, and lookout or monitoring themes use a meerkat. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
