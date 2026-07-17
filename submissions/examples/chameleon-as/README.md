# Chameleon

### What does this do?

It shows a chameleon on a branch. Its whole body cycles through colours, its eye swivels independently, and when it locks on the bug hovering nearby it fires its tongue out and the bug disappears. Under reduced motion the chameleon holds one colour and the tongue stays in.

### How is it used?

```html
<div class="cham">
  <span class="bodych"></span>
  <span class="headch"></span>
  <span class="pupilch"></span>
  <span class="tongue"></span>
</div>
```

The colour change is one `hue-rotate` keyframe applied to every body part at once, so the whole animal shifts together without a single colour being written twice. The tongue is a bar with `transform-origin: 0 50%` scaled from `scaleX(0)` to `1`, so it shoots out from the mouth instead of growing from its middle, and its keyframe is timed against the bug's fade so the strike and the catch land on the same beat. The curled tail is a circle with two of its four borders set to `transparent`.

### Why is it useful?

Nature, wildlife, and theme switcher demos use a chameleon. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
