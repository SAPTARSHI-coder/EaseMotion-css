# Non-Blocking Font Loading Fix

### What does this do?

Removes the render-blocking `@import url(...)` for Google Fonts from `core/base.css`
and replaces it with the recommended `<link rel="preconnect">` pattern, eliminating a
measurable First Contentful Paint (FCP) delay on every page that uses the framework.

### The problem

`core/base.css` line 6 currently reads:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

CSS `@import` inside a stylesheet is **synchronously render-blocking**: the browser
cannot paint anything until this remote file is fully downloaded and parsed. Google
Lighthouse flags this pattern under "Eliminate render-blocking resources."

### The fix (two steps for the maintainer)

**Step 1 — Remove from `core/base.css`:**

Delete line 6 entirely:
```css
/* REMOVE this line from core/base.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

The `--ease-font-sans` token already includes `system-ui, -apple-system, sans-serif`
as fallbacks, so the framework degrades gracefully without Inter.

**Step 2 — Add to `docs/index.html` and all example `<head>` blocks:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### How is it used?

The `demo.html` in this submission demonstrates both the broken pattern and the fixed
pattern side-by-side so the performance difference is visible in DevTools Network tab.
Users who want Inter in their own projects should add the `<link>` tags to their HTML
`<head>` — this is documented in the README update included here.

### Why is it useful?

EaseMotion CSS is a zero-dependency, link-one-file framework. Every millisecond of
unnecessary render-blocking load time undermines that promise. Removing the CSS
`@import` and delegating font loading to the HTML layer means the framework's CSS
itself is no longer a bottleneck — users only pay the font cost if they opt in.
