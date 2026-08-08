# Error 404 Page

### What does this do?

It shows a centered 404 error page with a large gradient number, a heading, a short message, and two actions to go home or go back. The big number gently floats up and down.

### How is it used?

```html
<main class="notfound">
  <div class="nf-code" aria-hidden="true">404</div>
  <h1>Page not found</h1>
  <p>The page you are looking for was moved or removed.</p>
  <div class="nf-actions">
    <a class="nf-primary" href="#">Go home</a>
    <a class="nf-ghost" href="#">Go back</a>
  </div>
</main>
```

The number uses `background-clip: text` for the gradient fill and a float keyframe. The two actions pair a primary and a ghost button.

### Why is it useful?

Every site needs a friendly not found page. This presents a clean, centered error state with a gradient headline, clear copy, and paired actions, using only CSS. The float and hover transitions are removed under reduced motion.
