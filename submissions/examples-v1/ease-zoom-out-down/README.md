# Ease Zoom Out Down

A smooth exit animation that shrinks an element while moving it downward and fading it out.

## Features

- Zoom-out exit effect
- Downward movement
- Opacity fade-out
- Uses `ease-in` timing
- Pure CSS implementation

## Animation Sequence

```
scale(1)
→
scale(0.7) translateY(20px) opacity(0)
```

## Usage

```html
<div class="ease-zoom-out-down">
  Content
</div>
```

## CSS

```css
.card {
  transition: transform 0.4s ease-in, opacity 0.4s ease-in;
}

.card:hover {
  transform: scale(0.7) translateY(20px);
  opacity: 0;
}
```

## Use Cases

- Dismissing notifications
- Removing cards
- Drop-down exits
- UI transitions

## Files

- demo.html
- style.css
- README.md
