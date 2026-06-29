# Content Visibility Utilities (`ease-content-visibility-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the highly performant `content-visibility` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct control over browser rendering performance. By using `content-visibility`, the browser can skip rendering work (layout and painting) for elements until they approach the viewport, significantly speeding up initial page load times on complex pages.
Included classes:
- `.content-visibility-auto` (Skips rendering until the element is near the viewport)
- `.content-visibility-hidden` (Completely skips rendering and prevents access to contents)
- `.content-visibility-visible` (Default behavior, renders normally)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to large sections of your page (like blog comments, off-screen article content, or hidden sidebars):

```html
<!-- The browser skips rendering this heavy section until the user scrolls near it -->
<section class="content-visibility-auto">
  <!-- Heavy DOM tree, images, etc. -->
</section>
```

*Tip: When using `.content-visibility-auto`, it is highly recommended to pair it with `contain-intrinsic-size` in your CSS to give the browser a placeholder height, preventing the scrollbar from jumping erratically.*

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-content-visibility-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16424
