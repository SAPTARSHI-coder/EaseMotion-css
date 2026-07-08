# Hash Modal Routing

## What does this do?

This adds a self-contained modal pattern that opens panels through URL hash links using only HTML and CSS.

## How is it used?

Link to a modal by matching the anchor `href` with the modal `id`:

```html
<a class="primary-action" href="#details-modal">Open details</a>

<section class="hash-modal" id="details-modal" role="dialog" aria-modal="true">
  <a class="modal-backdrop" href="#" aria-label="Close modal"></a>
  <div class="modal-window">
    <a class="icon-close" href="#" aria-label="Close modal">x</a>
    <h2>Modal title</h2>
    <p>Modal content goes here.</p>
  </div>
</section>
```

The CSS activates the modal with the `:target` selector:

```css
.hash-modal:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
```

## Why is it useful?

It fits EaseMotion CSS because it turns a common interface pattern into a lightweight, dependency-free motion component that works by opening the demo file directly in a browser.
