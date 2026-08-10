# Combination Lock

### What does this do?

It shows a padlock with a rotary combination dial. A metal shackle arcs over the lock body, and the numbered dial has values placed evenly around its rim with a red pointer at the top and the current number in the center hub.

### How is it used?

```html
<div class="dial">
  <span class="pointer"></span>
  <span class="num n5">5</span>
  <span class="dial-face"><b>24</b></span>
</div>
```

Each number is positioned around the dial with a rotate then translate transform based on its `--a` angle, then counter rotated so it stays upright. The shackle is a border only box with a rounded top, and the center face shows the selected number.

### Why is it useful?

Security screens, lockers, and puzzle games use a combination lock. This builds a rotary padlock with a numbered dial and shackle using only CSS transforms, no images.
