# ease-hover-sink-isk

## What does this do?
Sinks the element downward on hover, simulating a pressed state where it pushes into the surface.

## How is it used?
Add the class to any hoverable HTML element like a button or card:

```html
<button class="ease-hover-sink-isk">Hover Me</button>
```

You can customize the sink depth by overriding the `--ease-sink-depth` CSS variable:

```css
.custom-element {
  --ease-sink-depth: 6px;
}
```

## Why is it useful?
Sink-based hover effects create a tactile pressing sensation, making elements feel physical and interactive. It is the logical opposite of floating effects and works exceptionally well for active button states, card grids, and interactive lists.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)
