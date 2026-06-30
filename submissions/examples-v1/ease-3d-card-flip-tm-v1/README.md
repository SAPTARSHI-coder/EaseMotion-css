# ease-3d-card-flip

CSS 3D card flip for EaseMotion CSS.

## Usage

```html
<div class="flip-card">
  <div class="flip-inner">
    <div class="flip-front">Front</div>
    <div class="flip-back">Back</div>
  </div>
</div>
```

```css
.flip-card {
  perspective: 1000px;
  height: 260px;
}
.flip-inner {
  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}
.flip-front,
.flip-back {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  backface-visibility: hidden;
}
.flip-back {
  transform: rotateY(180deg);
}
```
