# Button Group Composition Fix Demo

## What does this do?

This demo showcases button groups with proper border-radius composition for different button variants, including pill-shaped, small, and large buttons. It also demonstrates symmetric border handling between grouped buttons.

## How is it used?

### Pill Button Group

```html
<div class="button-group pill">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
```

### Small Button Group

```html
<div class="button-group small">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
```

### Large Button Group

```html
<div class="button-group large">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>
```

## Why is it useful?

This example demonstrates how grouped buttons can maintain their intended shapes and sizes while avoiding uneven border rendering between adjacent buttons. It improves visual consistency and helps create reusable, composable button group patterns.
