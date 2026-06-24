# Ease Zoom Out Right

A smooth exit animation that shrinks an element while moving it to the right and fading it out.

## Features

- Zoom-out exit effect
- Rightward movement
- Opacity fade-out
- Uses `ease-in` timing
- Pure CSS implementation

## Animation Sequence

```css
scale(1)
→
scale(0.7) translateX(20px) opacity(0)
```

## Usage

```html
<div class="ease-zoom-out-right">
  Content
</div>
```

## CSS

```css
.ease-zoom-out-right {
  animation: ease-zoom-out-right 1s ease-in forwards;
}
```

## Use Cases

- Dismissing notifications
- Removing cards
- Modal exits
- UI transitions

## Files

- demo.html
- style.css
- README.md