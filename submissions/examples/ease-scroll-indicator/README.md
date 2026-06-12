# ease-scroll-indicator — Reading Progress Bar

## What does this do?

A thin horizontal progress bar fixed at the top of the viewport that fills from 0% to 100% as the user scrolls through the page. Commonly used on blog posts, documentation, and long-form content to show reading progress.

## Features

- **CSS-only** in modern browsers via `animation-timeline: scroll()`
- **JS fallback** for broader compatibility
- **Gradient** fill by default (primary → secondary)
- **Solid** colour variant: `.ease-scroll-indicator--solid`
- **3 sizes**: thin (2px), default (4px), thick (6px)
- **Custom colour** via `--ease-scroll-color` CSS variable
- **Hidden** when content fits within viewport (no scrollbar)
- **Dark mode**: adapts automatically
- **Reduced motion**: shows static full-width bar

## Variants

| Variant            | Class                               | Description                  |
| ------------------ | ----------------------------------- | ---------------------------- |
| Gradient (default) | _(none)_                            | Primary → secondary gradient |
| Solid              | `.ease-scroll-indicator--solid`     | Solid primary colour         |
| Thin               | `.ease-scroll-indicator--thin`      | 2px height                   |
| Thick              | `.ease-scroll-indicator--thick`     | 6px height                   |
| Custom colour      | `style="--ease-scroll-color: #..."` | Any custom colour            |

## How is it used?

```html
<div class="ease-scroll-indicator" id="scroll-bar"></div>
```

JS fallback:

```js
var bar = document.getElementById("scroll-bar");
document.addEventListener(
  "scroll",
  function () {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    bar.style.width = scrolled + "%";
    bar.classList.toggle("ease-scroll-indicator--hidden", scrolled < 0.5);
  },
  { passive: true }
);
```

## Why is it useful?

Reading progress bars improve user experience on content-heavy pages by giving readers a clear sense of how much content remains. This is a common UX pattern on blogs, documentation sites, and long-form articles.

## Tech Stack

- HTML
- CSS (`animation-timeline: scroll()`, transitions, custom properties)
- JavaScript (fallback scroll tracking, hidden state)

## Browser Support

- **CSS-only**: Chrome 115+, Edge 115+, Opera 101+
- **JS fallback**: all browsers

## Preview

Open `demo.html` directly in your browser and scroll down to see the progress bar fill from left to right.

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-scroll-indicator__*`)
- Uses `var(--ease-primary)` and `var(--ease-secondary)` for the gradient
- Highest z-index token (`--ease-z-toast`) ensures it renders above all content
- Maintainer may adjust naming before merging
