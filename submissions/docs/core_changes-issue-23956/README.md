# ease-content-visibility — Issue #23956

## What

Three utility classes that wrap the CSS `content-visibility` property, which controls whether an element renders its contents:

- `.ease-content-auto` — sets `content-visibility: auto` and `contain-intrinsic-size: 0 var(--ease-contain-size)`
- `.ease-content-hidden` — sets `content-visibility: hidden` (skips rendering entirely)
- `.ease-content-visible` — sets `content-visibility: visible` (normal rendering)

A CSS custom property `--ease-contain-size` (default `300px`) controls the intrinsic size hint for the `auto` state.

## How

Apply the class directly to any block-level or replaced element:

```html
<div class="ease-content-auto">
  <!-- lazy-rendered content -->
</div>
```

Customize the containment size:

```css
.my-element {
  --ease-contain-size: 500px;
}
```

The `auto` class is best used for long lists, galleries, or content below the fold. The `hidden` class acts like `display: none` but preserves layout when toggled (useful for virtualized content).

## Why

`content-visibility` is a powerful performance optimisation that lets the browser skip rendering off-screen elements. By deferring paint, layout, and style work, pages with large DOM trees can see dramatic improvements in initial load time and scroll performance. These utilities make it trivial to adopt without remembering the verbose property values or the required `contain-intrinsic-size` hint.
