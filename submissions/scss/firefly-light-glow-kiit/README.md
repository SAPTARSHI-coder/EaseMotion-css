# Firefly Light Glow Mixin

What does this do?
Adds a smooth, glowing animation effect reminiscent of a firefly, using hardware-accelerated opacity and scale/translate transforms.

How is it used?
You can use the utility class directly in your HTML:
```html
<div class="ease-anim-firefly-light-glow-kiit">Glowing element</div>
```
Or you can use the mixin in your SCSS, customizing the duration and timing function:
```scss
.my-element {
  @include ease-firefly-light-glow-kiit(4s, ease-in-out);
}
```

Why is it useful?
It provides a lightweight, visually appealing, hardware-accelerated ambient glow effect that respects user preferences for reduced motion, fitting perfectly into EaseMotion's performance-oriented philosophy.
