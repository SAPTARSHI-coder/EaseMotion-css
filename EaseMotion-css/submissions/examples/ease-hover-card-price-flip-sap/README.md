# ease-hover-card-price-flip-sap

**Level: Advanced**

A pricing card that flips on the X-axis on hover to reveal an annual/discount price on the back.

## Usage

```html
<div class="price-flip-sap">
  <div class="price-flip-inner-sap">
    <div class="price-face-sap front">$29/mo</div>
    <div class="price-face-sap back">$290/yr</div>
  </div>
</div>
```

## Notes

- Uses `rotateX` instead of `rotateY` for a top-to-bottom flip, distinct from a standard left-right flip card.
- `backface-visibility: hidden` on both faces is required to prevent the back face showing through during rotation.

## Browser support

All modern browsers.