# ease-hover-dim & ease-hover-bright

## What does this do?
Two missing hover utility classes that the cheatsheet (`docs/cheatsheet.html`) already documents per #5716 but that don't exist in the framework — brightness-based hover feedback using `filter: brightness()`, matching the issue's exact implementation hint.

## How to use it
```html
<!-- Basic usage -->
<div class="ease-hover-dim">Dims on hover</div>
<div class="ease-hover-bright">Brightens on hover</div>

<!-- Composable with existing hover classes -->
<div class="ease-hover-grow ease-hover-bright">Grows AND brightens</div>
<div class="ease-hover-lift-shadow ease-hover-dim">Lifts AND dims</div>

<!-- Common use case: image galleries -->
<img class="ease-hover-dim" src="photo.jpg" alt="...">
```

## The implementation
```css
.ease-hover-dim {
  transition: filter var(--ease-speed-medium) var(--ease-ease);
}
.ease-hover-dim:hover {
  filter: brightness(0.7);
}

.ease-hover-bright {
  transition: filter var(--ease-speed-medium) var(--ease-ease);
}
.ease-hover-bright:hover {
  filter: brightness(1.3);
}
```

## Why this composes cleanly
Like `ease-hover-glow`, both classes only transition the `filter` property, so they stack without conflict alongside transform-based hover classes (`ease-hover-grow`, `ease-hover-lift-shadow`, `ease-hover-shrink`) — a card can grow AND brighten simultaneously, or lift AND dim, with each class owning a different CSS property.

## Why it fits EaseMotion CSS
This closes a real, already-flagged gap (#5716: cheatsheet documents ~40+ classes that don't exist) for two specific, commonly-needed classes. Image galleries, video thumbnails, and disabled-looking states all commonly use dim-on-hover or brighten-on-hover patterns, and the existing hover effect set (`grow`, `shrink`, `glow`, `lift`, `shimmer`) currently has no brightness-based option.
