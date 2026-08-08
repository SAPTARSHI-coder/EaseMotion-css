# Native Image Lazy Loading Architecture

## What does this do?
Proposes a vital frontend performance and Core Web Vitals refactor to globally enforce native HTML5 image lazy loading (`loading="lazy"`) and asynchronous decoding across all documentation pages and demo submissions within the repository.

## How is it used?
Maintainers and core contributors must systematically audit all HTML files—specifically targeting the entire `docs/` folder and all `submissions/examples/*/demo.html` files. 

Currently, the framework's documentation and demo pages haphazardly load hundreds of heavy `.png` images and `.gif` animations simultaneously on initial page load:
```html
<!-- ❌ BAD: Completely destroys initial page load performance (LCP) -->
<img src="heavy-demo.gif" alt="Component Demo">
```

This must be structurally refactored. Every single `<img>` tag that exists "below the fold" must be updated to explicitly include the `loading="lazy"` and `decoding="async"` attributes, along with explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS):
```html
<!-- ✅ GOOD: Perfect native performance optimization -->
<img 
  src="heavy-demo.gif" 
  alt="Component Demo" 
  loading="lazy" 
  decoding="async"
  width="800"
  height="600"
>
```

## Why is it useful?
Currently, the entire repository completely lacks `loading="lazy"` declarations. If a user visits the main EaseMotion documentation site, the browser attempts to aggressively download every single heavy component demo GIF on the entire page all at once, long before the page even finishes rendering. This completely destroys the site's initial Largest Contentful Paint (LCP) score, severely drains mobile user bandwidth, and causes massive rendering bottlenecks. By globally enforcing native `loading="lazy"`, the browser intelligently defers downloading off-screen images until the user actually scrolls near them. Combined with `decoding="async"`, this guarantees that image processing never blocks the main JavaScript thread, instantly solving the repository's severe page load performance issues without requiring developers to install bloated external JavaScript lazy-loading libraries.
