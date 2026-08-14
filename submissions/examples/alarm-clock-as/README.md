# Alarm Clock

### What does this do?

It shows a classic twin bell alarm clock that shakes as if ringing. Two bells and a hammer sit on top, the round orange body holds a clock face with ticks and hour and minute hands, and two feet stand it up. Under reduced motion it stops shaking.

### How is it used?

```html
<div class="alarm">
  <span class="bell left"></span><span class="bell right"></span>
  <div class="body"><div class="face"><span class="hand hour"></span></div></div>
  <span class="foot left"></span>
</div>
```

The whole clock shakes with the `ring` keyframes around a low pivot. The body is a round gradient with an inset ring, the bells are rounded shapes tilted outward, and the hands are rotated bars over a tick marked face.

### Why is it useful?

Reminders, wake up flows, and time settings use an alarm clock. This builds a ringing twin bell clock with pure CSS shapes and a shake animation, no images, with a reduced motion fallback.
