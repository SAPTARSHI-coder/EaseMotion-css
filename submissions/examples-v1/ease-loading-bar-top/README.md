# Top-of-Page Loading Bar

## What does this add?

A thin progress bar pinned to the very top of the page that animates its width from 0% to 100% during a loading state, then fades out on completion — the classic YouTube/GitHub "page is loading" pattern.

## How is it used?

```html
<div class="ease-loading-bar" id="loadingBar"></div>
```

```js
// Start loading
loadingBar.classList.add("is-loading"); // animates width 0% → ~92%

// When the real request/navigation finishes
loadingBar.classList.add("is-complete"); // snaps to 100%, then fades out
```

The bar climbs to ~92% while `is-loading` (so it never looks "done" before it actually is), then `is-complete` snaps it to 100% and fades it out — matching how YouTube/GitHub's bars behave.

### Gradient option

```html
<div class="ease-loading-bar ease-loading-bar--gradient"></div>
```

```css
.ease-loading-bar {
  --ease-loading-bar-color: #6c63ff; /* solid color */
  --ease-loading-bar-gradient: linear-gradient(
    90deg,
    #6c63ff,
    #ec4899,
    #f59e0b
  );
  --ease-loading-bar-height: 3px;
}
```

## Why does it fit EaseMotion CSS?

Top loading bars are one of the most recognizable loading patterns on the web, and they're almost always hand-rolled per project. This gives EaseMotion a single drop-in element with both solid and gradient variants, controlled entirely through CSS variables, with no layout shift since it's `position:fixed`.

## Files

- demo.html
- style.css

## Usage

Open `demo.html`, pick Solid or Gradient, then click "Simulate Page Load" to watch the bar animate across the top of the page and fade out on completion.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

Respects `prefers-reduced-motion: reduce` — the bar still appears/disappears, just without the width-climb and snap animation.
