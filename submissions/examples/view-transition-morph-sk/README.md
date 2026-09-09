# View Transition Named Element Morph

Card-to-detail expansion using the View Transitions API with custom per-element `@keyframes` on `::view-transition-old()` and `::view-transition-new()`.

## How it works

Each morphing element gets a unique `view-transition-name`. The CSS then overrides the default crossfade per element:

```css
::view-transition-new(vt-image) {
  animation: vt-expand 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
```

Named elements: `vt-image`, `vt-title`, `vt-tag` — each with independent timing and easing.

The JS is minimal — just `document.startViewTransition(() => domUpdate())`.

## Usage

```html
<img style="view-transition-name: vt-image" src="..." />
<h3 style="view-transition-name: vt-title">Title</h3>
```

## Fallback

`@supports not (view-transition-name: none)` degrades to a plain opacity transition. `prefers-reduced-motion` removes all `::view-transition-*` animations.

Closes #9608
