# ease-scrollbar-gutter — CSS scrollbar-gutter Utility Classes

Utility classes for the CSS `scrollbar-gutter` property — reserves space for the scrollbar track so content does not shift when a scrollbar appears or disappears.

## Classes

| Class | Value | Use case |
|-------|-------|----------|
| `.ease-scrollbar-gutter-auto` | `auto` | Browser default — gutter only when scrollbar is present |
| `.ease-scrollbar-gutter-stable` | `stable` | Always reserve scrollbar space — prevents layout shift |
| `.ease-scrollbar-gutter-both-edges` | `stable both-edges` | Reserve equal space on both sides for symmetric layouts |

## Usage

```html
<!-- Prevent layout shift on overflow -->
<div class="ease-scrollbar-gutter-stable" style="overflow-y: auto; height: 300px;">
  ...content...
</div>

<!-- Symmetric layout -->
<div class="ease-scrollbar-gutter-both-edges" style="overflow-y: auto;">
  ...centered content...
</div>

<!-- Compose with existing EaseMotion scrollbar utilities -->
<div class="ease-scrollbar-gutter-stable ease-scrollbar-thin">
  ...polished scrollable area...
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS already provides `.ease-scrollbar-thin`, `.ease-scrollbar-none`, and `.ease-scrollbar-auto`. The `scrollbar-gutter` utilities complete the scrollbar control story — preventing the common layout shift bug where content reflows when a scrollbar appears or disappears. These classes complement the existing utilities directly.

## Browser Support

`scrollbar-gutter` is supported in Chrome 94+, Firefox 97+, Edge 94+. Safari does not currently support this property — the class has no effect in Safari (graceful degradation).

Closes #11527
