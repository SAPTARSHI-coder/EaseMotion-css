# ease-overscroll — Overscroll Behavior Utility Classes

## What does this do?

Controls browser overscroll behavior — whether scroll "bounces" or chaining occurs at boundaries. Useful for modals, sidebars, and embedded scroll containers.

## How is it used?

```html
<div class="ease-overscroll-none">
  <!-- Prevents scroll chaining beyond this element -->
</div>
<div class="ease-overscroll-contain">
  <!-- Contains scroll within, no bounce -->
</div>
```

### Classes

| Class                        | Property                         |
| ---------------------------- | -------------------------------- |
| `.ease-overscroll-auto`      | `overscroll-behavior: auto`      |
| `.ease-overscroll-contain`   | `overscroll-behavior: contain`   |
| `.ease-overscroll-none`      | `overscroll-behavior: none`      |
| `.ease-overscroll-x-auto`    | `overscroll-behavior-x: auto`    |
| `.ease-overscroll-x-contain` | `overscroll-behavior-x: contain` |
| `.ease-overscroll-x-none`    | `overscroll-behavior-x: none`    |
| `.ease-overscroll-y-auto`    | `overscroll-behavior-y: auto`    |
| `.ease-overscroll-y-contain` | `overscroll-behavior-y: contain` |
| `.ease-overscroll-y-none`    | `overscroll-behavior-y: none`    |
