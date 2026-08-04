# Treasure Chest

### What does this do?

It shows a pirate's treasure chest that rocks gently and glints. Hovering or focusing it throws the lid open, the gold inside lights the scene up, and the lid drops shut again when you leave. Under reduced motion the chest holds still and the lid opens without any easing.

### How is it used?

```html
<div class="chest" tabindex="0">
  <div class="lid">
    <span class="lidwood"></span>
    <span class="lidband"></span>
  </div>
  <span class="coins"></span>
  <span class="box"></span>
</div>
```

The lid swings from `transform-origin: 50% 100%` at the back hinge, so it lifts on an arc the way a real lid does rather than sliding up. The open transition uses a `cubic-bezier` that overshoots slightly, so the lid springs past its stop and settles instead of arriving stiffly. The pile of gold is one element: five hard stop `radial-gradient` coins painted into a rounded mound, so they clip to the pile and never spill over the rim.

### Why is it useful?

Game, reward, and unlock themes use a treasure chest. This builds one with pure CSS gradients and transitions, no images and no JavaScript, with a reduced motion fallback.
