# CSS Pulsing Live Badge

## What does this do?

A pure CSS LIVE badge with a continuously pulsing status indicator.

## How is it used?

Include the HTML structure and link the accompanying `style.css` file.

```html
<div
    class="live-badge"
    role="status"
    aria-label="Live"
>
    <span class="live-dot" aria-hidden="true"></span>
    <span class="live-text">LIVE</span>
</div>