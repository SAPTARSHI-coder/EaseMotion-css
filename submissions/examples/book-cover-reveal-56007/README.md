# Interactive 3D Book Cover Reveal

## What does this do?
A 3D interactive book component. When hovered, the front cover rotates open along its left edge (using `transform-origin: left;` and `rotateY`), revealing the "pages" or content underneath in a smooth 3D perspective.

## How is it used?
```html
<div class="ease-book-container">
    <div class="ease-book">
        <div class="ease-book-page">
            <!-- Content on the page -->
        </div>
        <div class="ease-book-cover">
            <!-- Cover design -->
        </div>
    </div>
</div>
```

## Why does it fit EaseMotion CSS?
It relies perfectly on CSS `preserve-3d`, `rotateY`, and `transform-origin` to deliver an incredibly tactile and organic 3D interaction without the need for JavaScript or canvas rendering. Great for case studies, documentation previews, or ebook covers.

## Tech Stack
- HTML
- CSS (No JavaScript)
