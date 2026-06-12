# View Transitions API Demo

## What does this do?

Demonstrates the CSS View Transitions API — a browser API that captures a screenshot of the old DOM state and morphs it into the new state with a smooth animation, using `document.startViewTransition()` and CSS `view-transition-name`.

## How is it used?

Assign a `view-transition-name` to elements that should animate independently, then wrap DOM changes in `startViewTransition()`:

```js
document.startViewTransition(function () {
  // Make your DOM changes here
  listView.hidden = true;
  detailView.hidden = false;
});
```

```css
.card {
  view-transition-name: card;
}

::view-transition-old(card) {
  animation: 0.3s ease-out both fade-out;
}

::view-transition-new(card) {
  animation: 0.3s ease-out both scale-in;
}
```

## Why is it useful?

Before the View Transitions API, animating between different DOM states (list → detail, tab switches, page navigations) required complex calculations, absolute positioning, or third-party animation libraries. This API makes state transitions declarative and smooth — the browser handles screenshot capture and morphing automatically. It aligns with EaseMotion CSS's zero-dependency, animation-first philosophy by making complex UI transitions a native CSS concern.
