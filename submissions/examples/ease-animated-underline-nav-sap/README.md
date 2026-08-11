# ease-animated-underline-nav-sap

Navigation links with an underline that grows in from one side on hover, and shrinks back out to the opposite side on mouse leave.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <nav class="underline-nav-sap">
     <a href="#" class="active">Home</a>
     <a href="#">Products</a>
   </nav>
```

## Customization
- Underline color/thickness on `::after`.
- `.active` class: marks the current page link with a permanently visible underline.
- Transition duration/easing.

## Notes
- The "grow in, shrink out to the other side" effect comes from swapping `transform-origin` between `right` (default/hidden) and `left` (hover/active) — the underline always scales from the side it's currently animating toward, rather than always centering.
- Pure CSS `transform: scaleX()` is used instead of animating `width`, which is more performant since it avoids layout recalculation.
- Respects `prefers-reduced-motion`: underline appears/disappears instantly instead of scaling in/out.