# Ease Hover Backdrop Appear

A hover effect that applies a smooth backdrop blur when the user hovers over an element.

## Effect

- `backdrop-filter: blur(0px)` → `blur(8px)`
- Smooth `0.3s` transition
- Requires semi-transparent background

## Usage

```html
<div class="ease-hover-backdrop-appear">Hover me</div>
```

## CSS

```css id="cssreadme2"
.ease-hover-backdrop-appear {
  backdrop-filter: blur(0px);
  transition: backdrop-filter 0.3s ease;
}

.ease-hover-backdrop-appear:hover {
  backdrop-filter: blur(8px);
}
```

## Notes

- Works best with background images or layered UI.
- Requires transparency (`rgba` or similar) to show blur effect.
