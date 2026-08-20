# CSS Running Text Marquee

## Description
A pure CSS vertically running text marquee component designed for news tickers, announcements, and live updates. Created for Issue #70162.

## Features
- **Pure CSS:** No JavaScript required for the scrolling logic.
- **Accessible:** Includes semantic HTML and ARIA hidden duplications to prevent screen-reader stuttering.
- **Smooth Animation:** Infinite vertical scrolling loop with no visible jumps.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` to halt the marquee and provide a static list of items for accessibility.

## Usage
Wrap your text items in the `.ease-marquee-content` container.

```html
<div class="ease-marquee-container">
    <div class="ease-marquee-content">
        <div class="ease-marquee-item">News Item 1</div>
        <div class="ease-marquee-item">News Item 2</div>
    </div>
</div>
```
