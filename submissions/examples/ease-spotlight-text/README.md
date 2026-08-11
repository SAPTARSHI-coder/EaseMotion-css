# Pure CSS Spotlight Reveal Text

A highly premium dark-mode effect commonly seen on high-end tech landing pages (like Vercel or Linear). The text remains dark and barely visible until the user hovers over the container, at which point a glowing "spotlight" illuminates the text directly underneath their cursor.

### Usage
The HTML structure involves a 3x3 invisible grid wrapper placed *over* the text container.

```html
<div class="ease-spotlight-wrapper">
    <!-- Top Row Invisible Hover Catchers (z-index: 2) -->
    <div class="ease-spotlight-grid-cell spot-top-left"></div>
    <div class="ease-spotlight-grid-cell spot-top-center"></div>
    <div class="ease-spotlight-grid-cell spot-top-right"></div>
    
    <!-- (Include Mid and Bottom rows as well) -->
    
    <!-- The Text Container (z-index: 1) -->
    <div class="ease-spotlight-text-container">
        <h1 class="ease-spotlight-text">Spotlight Text</h1>
    </div>
</div>
```

### Why is it useful?
Historically, achieving this effect required JavaScript to attach a `mousemove` event listener to the container. The JS would constantly calculate the exact X/Y coordinates of the cursor and apply them to inline CSS variables to shift a background gradient. This constant DOM manipulation causes noticeable lag on low-end devices.

This submission implements a brilliant pure CSS alternative. By overlaying the container with an invisible 3x3 grid of `div` elements, we can catch the general area of the hover event. We then use the CSS sibling selector (`~`) to shift the `background-position` of a `radial-gradient` that has been clipped to the text using `-webkit-background-clip: text`. This provides a stunning spotlight tracking effect with zero JavaScript overhead, perfectly embodying the EaseMotion CSS philosophy.
