# Infinite Marquee / Ticker Animation (`ease-marquee-loop-dj`)

A CSS-only utility class that continuously scrolls content horizontally in an infinite loop, perfect for news tickers, announcements, logo carousels, and alerts.

## Features

- **Pure CSS**: Zero JavaScript required for the infinite loop.
- **Interactive**: Automatically pauses the animation when the user hovers over the content.
- **Accessible**: Fully respects `prefers-reduced-motion` (stops animation and allows standard horizontal scrolling).
- **Responsive**: Adapts to any container width on desktop, tablet, and mobile.

## Usage

Include `style.css` in your project. Add the `.ease-marquee-loop-dj` class to a wrapper element, and place your scrolling content **inside exactly one child element** (like a `<span>` or `<div>`).

```html
<div class="ease-marquee-loop-dj">
  <span>🚀 Big announcement goes here... Hover to pause!</span>
</div>
```

### Customizing Speed

The default animation duration is `20s`. You can easily speed it up or slow it down by overriding the `animation-duration` on the child element:

```css
/* Make it scroll faster (10 seconds) */
.my-fast-ticker > * {
  animation-duration: 10s !important;
}
```

## Demo

Open `demo.html` in your browser to see examples of a text-based news ticker and a badge/logo scroller in action.
