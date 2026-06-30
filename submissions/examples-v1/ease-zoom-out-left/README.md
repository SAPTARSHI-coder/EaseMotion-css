# Ease Zoom Out Left

A smooth exit animation that shrinks an element while moving it to the left and fading it out.

## Features

- Zoom-out exit effect
- Leftward movement
- Opacity fade-out
- Uses `ease-in` timing
- Pure CSS implementation

## Animation Sequence

```
scale(1)
→
scale(0.7) translateX(-20px) opacity(0)
```

## Usage

```html
<div class="ease-zoom-out-left">
  Content
</div>
```

## CSS

```css
.card {
  transition: transform 0.4s ease-in, opacity 0.4s ease-in;
}

.card:hover {
  transform: scale(0.7) translateX(-20px);
  opacity: 0;
}
```

## Use Cases

- Dismissing notifications
- Removing cards
- Slide-out menus
- UI transitions

## Files

- demo.html
- style.css
- README.md
