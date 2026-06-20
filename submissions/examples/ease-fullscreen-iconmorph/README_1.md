# Fullscreen Icon Morph

## What does this do?

A fullscreen toggle button whose icon smoothly morphs between an "expand" state (corner brackets pointing outward) and a "collapse" state (corner brackets pulled inward with a slight rotate/scale), triggered purely by toggling a state class.

## How is it used?

```html
<button class="fs-toggle" type="button" aria-label="Toggle fullscreen">
  <svg class="fs-toggle-icon" viewBox="0 0 24 24" fill="none">
    <path class="fs-path" d="M4,9 L4,4 L9,4 M15,4 L20,4 L20,9 M20,15 L20,20 L15,20 M9,20 L4,20 L4,15" />
  </svg>
</button>
```

```js
// add/remove this class to morph the icon
btn.classList.toggle("is-fullscreen");
```

The icon is a single `<path>` containing all four corner brackets. The "expand" and "collapse" shapes are written with the same command structure (`M,L,L` per bracket), so the browser can interpolate point-by-point between them. Toggling `.is-fullscreen` changes the CSS `d` property on that path, giving a real SVG shape morph (not a transform or icon-swap trick), plus a subtle rotation on the SVG itself.

**Browser note:** animating the CSS `d` property requires Chrome/Edge, Firefox 86+, and Safari 16.4+. Older browsers will simply show the end-state shape without the smooth transition (no layout break, just no animation).

## Why is it useful?

Fullscreen toggles are one of the most common controls in video/media players, image viewers, and embedded widgets. Most implementations just swap a static icon, which feels abrupt. This gives EaseMotion CSS a ready-made, dependency-free morph animation for that exact, very common interaction — driven entirely by a single state class, so it drops straight into any player UI.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and click the fullscreen icon in the player controls to see it morph between expand and collapse states.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
