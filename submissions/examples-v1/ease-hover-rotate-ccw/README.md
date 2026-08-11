# Hover Rotate (Counter-Clockwise)

## What does this add?

A utility class that makes an element rotate continuously counter-clockwise while hovered, using `rotate(-360deg)` in a looping animation, easing smoothly to a stop on mouse-leave.

## How is it used?

```html
<div class="ease-hover-rotate-ccw">
  <svg><!-- icon --></svg>
</div>
```

```css
@keyframes ease-kf-rotate-ccw{
  from{ transform:rotate(0deg); }
  to{ transform:rotate(-360deg); }
}

.ease-hover-rotate-ccw{
  display:inline-flex;
  transition:transform .4s cubic-bezier(.4,0,.2,1);
}

.ease-hover-rotate-ccw:hover{
  animation:ease-kf-rotate-ccw 1.2s linear infinite;
}
```

No JavaScript needed — just add the class to any icon, button, or element.

## Why does it fit EaseMotion CSS?

EaseMotion already has clockwise rotate-on-hover utilities (`ease-hover-rotate`, `ease-hover-rotate-z-tm`); this adds the counter-clockwise direction variant, useful for "refresh," "undo," or any icon where rotation direction carries meaning.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and hover over any of the three icon boxes — each spins continuously counter-clockwise while hovered.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

Respects `prefers-reduced-motion: reduce` — the spin animation is disabled for users with that preference.
