# ease-lens-hover

A magnifying glass circle follows the cursor inside a card, creating a lens or spotlight effect.

## Usage

Add `.ease-lens` to the container and place a `.ease-lens__glass` child inside it.

```html
<div class="ease-lens">
  Content
  <div class="ease-lens__glass"></div>
</div>
```

Include the companion script to update the glass position on `mousemove`.

## Why it fits EaseMotion CSS

CSS controls all visual styling. The script only sets `left`/`top` — no logic or state.