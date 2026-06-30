# Cross-Document Page Transition Fade (ease-page-transition-fade)

### 1. What does this do?

This component enables smooth fade transitions natively across separate, actual multi-page document navigations (cross-document view transitions) using pure CSS rules. Clicking links to separate pages triggers a full page fade-out of the old document and a fade-in of the new document.

### 2. How is it used?

Import the component stylesheet in both your source and target HTML pages:

```html
<link rel="stylesheet" href="./style.css" />
```

The stylesheet configures cross-document view transitions natively using the new CSS `@view-transition` at-rule, requiring no JS wrapper for standard page links to animate:

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both ease-fade-out;
}

::view-transition-new(root) {
  animation: 300ms cubic-bezier(0.4, 0, 0.2, 1) both ease-fade-in;
}
```

Simply structure standard anchor tag links leading to target pages:

```html
<a href="page2.html">Document Page B</a>
```

### 3. Why is it useful?

It removes the need to design single-page application (SPA) routers just to get animated page transitions. Multi-page projects (like static websites, Hugo blogs, or standard MPA backends) can now enjoy native-app-quality visual transitions with single lines of CSS. If a browser does not support cross-document transitions, it automatically falls back to default immediate page loading without throwing errors. It also respects the `prefers-reduced-motion: reduce` preference by shortening animation durations to a lightweight, zero-motion crossfade.
