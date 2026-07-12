# Vending Machine

### What does this do?

It shows a red drink vending machine stocked with colored cans on three shelves, a keypad, and a screen. Hovering or focusing the machine vends a can: it drops down inside the cabinet and lands in the tray at the bottom. It works with no JavaScript. Under reduced motion the can simply appears in the tray.

### How is it used?

```html
<div class="machine" tabindex="0">
  <div class="cabinet">
    <div class="window">...<span class="drop"></span></div>
    <div class="panel">...</div>
  </div>
  <div class="tray"><span class="prize"></span></div>
</div>
```

The cabinet is a flex layout with a glass window of stocked cans and a control panel. On `:hover` or `:focus`, a hidden `drop` can runs the `vend` animation falling through the cabinet, and the `prize` can runs `land`, appearing and bouncing into the collection tray, timed so the handoff looks like one continuous drop.

### Why is it useful?

Store, reward, and gacha style interfaces use a vending machine. This builds an interactive vending machine with pure CSS and animation, no images or JavaScript, with a reduced motion fallback.
