# Scale Rotate Utility

Adds a reusable utility class that combines scaling and rotation into a single smooth animation.

## Classes

### `.ease-scale-rotate`

Applies:

```css
transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
will-change: transform;
```

## Rotation and Scale Variants

```css
.scale-rotate-sm:hover {
  transform: scale(1.05) rotate(5deg);
}

.scale-rotate-md:hover {
  transform: scale(1.1) rotate(10deg);
}

.scale-rotate-lg:hover {
  transform: scale(1.15) rotate(15deg);
}

.scale-rotate-xl:hover {
  transform: scale(1.2) rotate(20deg);
}
```

## Usage

```html
<div class="ease-scale-rotate scale-rotate-md">
  Hover Me
</div>
```

## Accessibility

The utility respects user motion preferences through:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* Transitions are disabled
* Scale animations are removed
* Rotation animations are removed

## Demo

Open `demo.html` directly in a browser.

Included examples:

* Small scale + rotate effect
* Medium scale + rotate effect
* Large scale + rotate effect
* Extra large scale + rotate effect
* Product card example
* Button examples
* Usage snippet
