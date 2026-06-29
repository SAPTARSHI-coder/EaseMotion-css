# Modern CSS Scroll-Driven Animation Utilities (`ease-scroll-driven-animations-proposal`)

This proposal introduces modern utility classes to tie animations to the user's scroll progress, completely eliminating the need for JavaScript libraries like GSAP or `IntersectionObserver`. Targeted for integration into `core/animations.css`.

## 📌 Feature Overview

CSS Scroll-Driven Animations are a powerful new native feature that allows developers to link CSS animations directly to scroll progress or element visibility in the viewport.

Included classes:
- `.em-scroll-timeline`: Links an animation to the scroll progress of the nearest scrollable ancestor (e.g., the root document). Great for reading progress bars.
- `.em-scroll-view`: Links an animation to the element's intersection with the scrollport. Great for fade-in or scale-up effects as elements scroll into view.

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. *Note: Requires a modern browser with Scroll-Driven Animations support (Chrome 115+, Edge 115+).*

Apply the utilities alongside standard CSS animations:

```html
<!-- A progress bar that fills up as the user scrolls the page -->
<div class="em-progress-bar em-scroll-timeline"></div>

<!-- A card that fades and scales up as it enters the viewport -->
<div class="em-fade-in em-scale-up em-scroll-view"></div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-scroll-driven-animations-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these utilities to the core stylesheet.*

## 🔗 Related Issue
Closes Issue #13395
