# Smooth Theme Transition (Circular Reveal)

## What does this do?

Provides a smooth, fluid theme transition utility using circular `clip-path` reveals (expanding for Sun/Light mode, contracting for Moon/Dark mode) when toggling colors instead of instant snaps.

## How is it used?

1. Apply the transition styling and keyframes to the viewport root.
2. Set click coordinate variables `--clip-x` and `--clip-y` on the document root before changing the theme.
3. Use the CSS variables to customize the speed and easing of the sweep:

```css
:root {
  --theme-transition-duration: 0.6s;
  --theme-transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

4. Change the theme attribute (e.g. `data-theme="dark"`) inside the `document.startViewTransition()` callback:

```javascript
const rect = toggleButton.getBoundingClientRect();
const x = rect.left + rect.width / 2;
const y = rect.top + rect.height / 2;

document.documentElement.style.setProperty("--clip-x", `${x}px`);
document.documentElement.style.setProperty("--clip-y", `${y}px`);
document.documentElement.setAttribute("data-transition-theme", "dark");

document
  .startViewTransition(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  })
  .finished.finally(() => {
    document.documentElement.removeAttribute("data-transition-theme");
  });
```

## Why is it useful?

EaseMotion CSS is built around fluid design motion. Toggling themes with an instant, rigid snap breaks the illusion of a smooth, physical UI. A circular reveal centered on the clicked sun/moon button provides a natural, physics-informed layout transition that makes interfaces feel alive and tactile.

## Tech Stack

- HTML
- CSS (custom properties, keyframes, clip-path, View Transitions API)
- JS (to capture click coordinates)

## Preview

Open `demo.html` directly in your browser to test the interactive dashboard.

## Contribution Notes

- Class naming was handled by the contributor (`dg`)
- Maintainer will rename to ease-\* convention before merging
