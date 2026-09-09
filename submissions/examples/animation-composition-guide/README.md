# Animation Composition Guide

This example demonstrates how multiple animation utilities can be combined safely.

## Supported Combinations

### Fade + Slide

```html
<div class="ease-fade-in ease-slide-up">
  Content
</div>
```

### Zoom + Fade

```html
<div class="ease-fade-in ease-zoom-in">
  Content
</div>
```

### Rotate + Fade

```html
<div class="ease-fade-in ease-rotate">
  Content
</div>
```

## Benefits

* More expressive animations
* Cleaner implementation
* Reduced custom CSS

## Notes

Use composition-friendly animation utilities together to create richer motion effects while maintaining readability.
