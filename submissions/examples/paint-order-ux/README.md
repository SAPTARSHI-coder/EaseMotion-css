# Paint Order UX

## What does this do?

Demonstrates the `paint-order` CSS property for controlling the drawing order of text fill and stroke. Makes outlined/ stroked text look clean by rendering the stroke behind the fill.

## How is it used?

```css
.po-stroke-behind {
  paint-order: stroke fill;
}
.po-normal {
  paint-order: normal;
}
```

```html
<span class="po-stroke-behind po-text-lg">Outlined Text</span>
```

## Why is it useful?

Without `paint-order`, text with a thick stroke appears jagged or bloated because the stroke draws on top of the fill. Changing the paint order to `stroke fill` places the stroke behind the fill, creating clean outlined text for headings, logos, and decorative typography.
