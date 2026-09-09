# Pointer Events None (`ease-pointer-events-none`)

A demonstration of the `pointer-events: none` CSS utility, which tells the browser to completely ignore mouse/touch interactions on an element, letting clicks "pass through" to the elements underneath.

## 🚀 Features & EaseMotion Showcase

- **SVG Icon Bug Fixes**: When placing `<svg>` or `<img>` icons inside a `<button>`, clicking the icon directly often sets the `event.target` to the SVG instead of the button, breaking JavaScript event delegation. Adding `pointer-events: none` to the icon ensures the button receives 100% of the clicks natively.
- **Click-Through Overlays**: Want to add an animated gradient, a particle effect, or a floating vignette over your application? You can place it in a higher `z-index`, give it `pointer-events: none`, and the user can still interact with the application underneath it as if it wasn't there.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a click-through ghost element:
```html
<div class="ease-pointer-none">
  I am a ghost overlay!
</div>
