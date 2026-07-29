# Themed Scrollbar

## What does this add?

A thin, styled scrollbar that matches the EaseMotion color system, controlled entirely through a single CSS custom property: `--ease-scrollbar-color`.

## How does a developer use it?

```html
<div class="ease-scroll" style="--ease-scrollbar-color:#6c63ff;">
  <!-- long scrollable content -->
</div>
```

```css
.ease-scroll{
  --ease-scrollbar-color: #6c63ff;   /* thumb color */
  --ease-scrollbar-track: #1e293b;   /* track color */
  --ease-scrollbar-width: 8px;       /* thumb width */

  scrollbar-width: thin;
  scrollbar-color: var(--ease-scrollbar-color) var(--ease-scrollbar-track);
}

.ease-scroll::-webkit-scrollbar{
  width: var(--ease-scrollbar-width);
}
.ease-scroll::-webkit-scrollbar-track{
  background: var(--ease-scrollbar-track);
  border-radius: 999px;
}
.ease-scroll::-webkit-scrollbar-thumb{
  background-color: var(--ease-scrollbar-color);
  border-radius: 999px;
}
```

Override `--ease-scrollbar-color` on any element (inline, in a class, or via JS with `style.setProperty`) to retheme that scroll container — e.g. set it to `var(--ease-color-danger)` for an error panel, or `var(--ease-color-success)` for a confirmation panel, matching whatever EaseMotion status color already applies to that section.

## Why does it fit EaseMotion CSS?

EaseMotion is built around a small set of CSS variables driving consistent visual language across components. Scrollbars are one of the last "raw browser" UI pieces left unstyled in most projects, and they're jarring when they don't match a themed dark UI. This brings them into the same token-driven system — one variable to retheme, with full support for both WebKit/Blink (`::-webkit-scrollbar`) and Firefox (`scrollbar-color`).

## Files

- demo.html
- style.css

## Usage

Open `demo.html`, scroll inside the panel, and click the color swatches to see `--ease-scrollbar-color` update the scrollbar live in supporting browsers.

## Browser Support

- Chrome (`::-webkit-scrollbar`)
- Edge (`::-webkit-scrollbar`)
- Safari (`::-webkit-scrollbar`)
- Firefox (`scrollbar-color` / `scrollbar-width`) — thumb/track color supported, but Firefox does not support `::-webkit-scrollbar` styling such as custom border-radius on the thumb.
