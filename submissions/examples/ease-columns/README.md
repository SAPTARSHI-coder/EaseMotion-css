# Ease Columns 📰

Utility classes for creating multi-column text layouts and simple masonry grids.

## What it does
The `ease-columns` utilities leverage the native CSS `columns` property to automatically flow content into multiple vertical columns, exactly like a newspaper. It handles the math for you and ensures that child elements don't awkwardly break in half across column boundaries.

## How to use it
Apply the base column class to a container, and optionally add a gap utility class to control the spacing between the columns.

### 1. Newspaper Text Layout
Perfect for long blocks of text.
```html
<div class="ease-columns-2 ease-column-gap-6">
    <p>San Francisco, CA — The web development community is buzzing today following the latest release of modern CSS specifications, promising to eliminate the need for heavy JavaScript in complex animations. Developers have long relied on external libraries to handle physics-based interactions, but new native capabilities are changing the landscape.</p>
    <p>Industry experts suggest that utilizing native CSS not only drastically improves site performance but also reduces the cognitive load on engineering teams. "When you can achieve a fluid, hardware-accelerated morphing state purely in the stylesheet, it feels like magic," said one prominent open-source maintainer.</p>
    <p>This shift is particularly evident in emerging libraries like EaseMotion CSS, which focus heavily on providing production-ready utility classes. By leaning into properties like cubic-bezier timing functions and the will-change attribute, these frameworks are pushing the boundaries of what is possible in the browser without writing a single line of script.</p>
</div>
```

### 2. Simple Masonry Grid
Perfect for image galleries or card layouts where items have varying heights.
```html
<div class="ease-columns-3 ease-column-gap-4">
    <img src="img1.jpg" alt="Gallery item">
    <img src="img2.jpg" alt="Gallery item">
    <img src="img3.jpg" alt="Gallery item">
</div>
```

### Available Classes
* **Columns:** `.ease-columns-2`, `.ease-columns-3`
* **Gaps:** `.ease-column-gap-1`, `.ease-column-gap-2`, `.ease-column-gap-4`, `.ease-column-gap-6`, `.ease-column-gap-8`

## Why it fits EaseMotion CSS
* **Zero Dependencies:** No heavy JavaScript grid libraries are required for basic masonry layouts.
* **Performant:** Uses native browser rendering to reflow text and elements efficiently.
* **Clean Typography:** Enhances readability for text-heavy pages without complex HTML restructuring.