# Typewriter Text Effect

1. What does this do? Adds an animated typing/typewriter text effect where characters appear one by one with a blinking cursor, supporting multi-string rotation, configurable speed, scroll-triggered activation, and loop control.

2. How is it used? Apply the `.typewriter` class to a container with a `.typewriter-text` span and a `.typewriter-cursor` span; use `data-speed`, `data-strings`, `data-loop`, and other attributes to configure behavior.

```html
<!-- Single string -->
<div class="typewriter" data-speed="80">
  <span class="typewriter-text">Hello World</span>
  <span class="typewriter-cursor" aria-hidden="true"></span>
</div>

<!-- Multi-string rotation + loop -->
<div class="typewriter" data-speed="90" data-loop="true">
  <span
    class="typewriter-text"
    data-strings='["String one", "String two", "String three"]'
  ></span>
  <span class="typewriter-cursor" aria-hidden="true"></span>
</div>

<!-- With JS controls -->
<script>
  typer.pause();
  typer.resume();
  typer.reset();
  typer.skipToEnd();
</script>
```

3. Why is it useful? Typing animations are a staple of modern landing pages, terminal-like UIs, and intro sections; this component provides a lightweight, accessible, scroll-triggered implementation that fits EaseMotion CSS's philosophy of simple, composable motion utilities.

Fixes #16400
