# Expand Icon Mixin

## Description

`ease-expand-icon-mixin-sp` is an SCSS mixin that expands an icon smoothly on hover and keyboard focus. It is ideal for toolbar icons, nav icons, and action buttons.

## Why it is useful

- One `@include` for consistent icon hover feedback
- Works with buttons and focusable icons
- Built-in `prefers-reduced-motion` support

## Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$duration` | Time | `0.5s` | Length of the expand motion |
| `$scale` | Number | `1.18` | Target scale on hover / focus |

## Usage

```scss
@use 'path/to/expand-icon' as *;

.my-element {
  @include ease-expand-icon-mixin-sp(0.5s);
}
```

```html
<button type="button" class="my-element" aria-label="Settings">⚙</button>
```

## Accessibility

- Prefer a real `<button>` with an accessible name for icon-only controls
- Expand also applies on `:focus-visible`
- Under `prefers-reduced-motion: reduce`, scale motion is disabled and an outline fallback is used

## Files

```
submissions/scss/feature-expand-icon-mixin-sp/
├── _expand-icon.scss
└── README.md
```
