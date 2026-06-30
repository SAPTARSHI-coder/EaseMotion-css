# Retro Arcade INSERT COIN Button

## 1. What does this do?
This submission displays a retro arcade style text button containing "INSERT COIN" that performs a classic step-blink opacity loop. It shifts glowing color properties and scales upwards on hover, while compressing downwards on active click.

## 2. How is it used?
Developers can drop the button markup into their layouts and apply the `.arcade-btn` class, using the inner `.blink-text` span helper.

```html
<button class="arcade-btn">
  <span class="blink-text">INSERT COIN</span>
</button>
```

## 3. Why is this useful?
It acts as an entry-level learning module showing:
- **Simple Step Animations:** Demonstrates `steps(2, start)` with `visibility: hidden` keyframes, bypassing smooth transitions for a retro digital blink.
- **Micro-shadow Glows:** Highlights basic `text-shadow` and `box-shadow` values using CSS variables.
- **Basic Active Transforms:** Teaches standard scale offsets when interactive elements are triggered.
