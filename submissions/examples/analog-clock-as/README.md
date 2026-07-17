# Analog Clock

### What does this do?

It shows a live analog clock with hour, minute, and second hands, twelve tick marks, and four numerals. The hands rotate continuously (the second hand ticks in steps), and under reduced motion they hold a fixed time instead of moving.

### How is it used?

```html
<div class="clock">
  <span class="tick" style="--i: 1;"></span>
  <span class="hand hour"></span>
  <span class="hand minute"></span>
  <span class="hand second"></span>
  <span class="pivot"></span>
</div>
```

Ticks are placed with `rotate(calc(var(--i) * 30deg))` around a shared origin. Each hand rotates with its own keyframes and duration (12 hours, 60 minutes, 60 seconds), starting from a set angle so the clock reads a real time.

### Why is it useful?

Dashboards, world clock widgets, and time pickers often want a real clock face. This builds one entirely with CSS transforms and animations, with no SVG, images, or script.
