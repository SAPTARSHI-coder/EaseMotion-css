# Animated Scroll-Down Indicator

### What does this do?

It shows a scroll hint with a mouse shaped outline whose wheel dot animates downward in a loop, plus a bouncing chevron, inviting the user to scroll for more.

### How is it used?

```html
<div class="scroll-hint" role="img" aria-label="Scroll down for more">
  <span class="scroll-label">Scroll</span>
  <span class="scroll-mouse"><span class="scroll-wheel"></span></span>
  <span class="scroll-chevron" aria-hidden="true"></span>
</div>
```

Drop it at the bottom of a hero section. The mouse and chevron are drawn with CSS, so there are no images to load.

### Why is it useful?

Scroll indicators hint that there is more content below a hero. This builds the looping micro animation with keyframes only, so it needs no JavaScript. The whole hint carries an accessible label, and the animations are disabled under `prefers-reduced-motion: reduce`.
