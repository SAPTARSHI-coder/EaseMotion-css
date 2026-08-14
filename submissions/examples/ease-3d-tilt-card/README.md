# Pure CSS 3D Parallax Tilt Card

A highly requested, premium interactive card component. As the user moves their mouse over the card, the card tilts smoothly in 3D space tracking their cursor.

### Usage
The HTML structure involves a 3x3 invisible grid wrapper placed *over* the actual card content.

```html
<div class="ease-tilt-wrapper">
    <!-- Top Row Invisible Hover Catchers -->
    <div class="ease-tilt-grid-cell tilt-top-left"></div>
    <div class="ease-tilt-grid-cell tilt-top-center"></div>
    <div class="ease-tilt-grid-cell tilt-top-right"></div>
    
    <!-- (Include Mid and Bottom rows as well) -->
    
    <!-- The Actual Card -->
    <div class="ease-tilt-card">
        <div class="ease-tilt-card-inner">
            <h2>Hover Me</h2>
        </div>
    </div>
</div>
```

### Why is it useful?
Cards that tilt in 3D space to track the user's mouse are a staple of premium SaaS design. Historically, this is almost exclusively achieved using heavy JavaScript libraries (like `vanilla-tilt.js`) which constantly calculate mouse coordinates and re-render the DOM.

This submission implements a brilliant, highly advanced pure CSS alternative. By overlaying the card with an invisible 3x3 grid of `div` elements, we can catch the hover events. We then use the CSS sibling selector (`~`) to apply specific `transform: rotateX() rotateY()` values to the underlying card based on *exactly* which grid square is currently being hovered. This provides a stunning 3D tracking effect with absolutely zero JavaScript overhead.
