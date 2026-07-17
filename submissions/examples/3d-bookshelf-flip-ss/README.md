# CSS-Only 3D Bookshelf Flip

> Submission for issue [#17645](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/17645)

## 1. What does this do?

A pure-CSS bookshelf component where hovering over any book cover smoothly rotates it in 3D space to reveal its spine and back cover — no JavaScript required.

## 2. How is it used?

Wrap each book with the required face structure (cover, spine, back) inside the bookshelf container:

```html
<div class="ease-3d-bookshelf-flip">
  <div class="ease-3d-bookshelf-flip__book">
    <div class="ease-3d-bookshelf-flip__inner">
      <div class="ease-3d-bookshelf-flip__face ease-3d-bookshelf-flip__cover">
        Book Title
      </div>
      <div class="ease-3d-bookshelf-flip__face ease-3d-bookshelf-flip__spine">
        Book Title
      </div>
      <div class="ease-3d-bookshelf-flip__face ease-3d-bookshelf-flip__back">
        Back cover description
      </div>
    </div>
  </div>
</div>
```

### Available color variants

Add a modifier class to `__book` to change the color theme:

| Modifier class                         | Color    |
| -------------------------------------- | -------- |
| *(default)*                            | Red      |
| `ease-3d-bookshelf-flip__book--blue`   | Blue     |
| `ease-3d-bookshelf-flip__book--green`  | Green    |
| `ease-3d-bookshelf-flip__book--gold`   | Gold     |

## 3. Why is it useful?

This component demonstrates several CSS-only techniques that fit EaseMotion CSS's philosophy of **delightful, JavaScript-free motion**:

- **3D perspective and `transform-style: preserve-3d`** — showcases how CSS alone can create realistic depth.
- **`backface-visibility: hidden`** — cleanly hides faces during rotation.
- **Smooth cubic-bezier easing** — produces a natural, weighty flip animation.
- **Accessibility-first** — respects `prefers-reduced-motion` and disables the animation for users who need it.
- **Practical use cases** — perfect for portfolios, library apps, product catalogs, or any UI that benefits from a tactile, page-like interaction.

The component is self-contained, requires zero JavaScript, and works in all modern browsers.