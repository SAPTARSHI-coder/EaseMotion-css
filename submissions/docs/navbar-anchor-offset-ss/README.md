# Navbar Anchor Offset Fix

## What does this do?
This demonstrates how to prevent section headings from being hidden beneath a sticky or fixed navigation bar during anchor navigation by using the CSS `scroll-margin-top` property.

## How is it used?
```html
<section id="animations" class="doc-section">
  ...
</section>
```

```css
.doc-section {
  scroll-margin-top: 90px;
}
```

## Why is it useful?
When users navigate using anchor links (such as `#animations` or `#buttons`), sticky navigation bars can cover the target section heading. Applying `scroll-margin-top` ensures the heading remains fully visible, improving navigation, readability, and accessibility with a simple CSS solution.