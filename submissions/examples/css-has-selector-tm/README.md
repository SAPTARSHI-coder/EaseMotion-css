# CSS :has() Selector

## What does this do?
Demonstrates practical CSS `:has()` selector patterns — cards that adapt their layout based on content (image, tags, checkbox), live form validation without JavaScript, and interactive list styling — using EaseMotion CSS tokens.

## How is it used?
Add `.has-card` for adaptive cards, `.has-form` + `.has-field` for auto-validating forms, or `.has-list` for interactive lists. The `:has()` selectors are in `style.css` and respond to child elements automatically.

```html
<!-- Card adapts when it contains an image -->
<div class="has-card">
  <img src="..." alt="" />
  <div class="has-body">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>

<!-- Form validates via :has() — no JS needed -->
<form class="has-form">
  <div class="has-field">
    <input type="email" required />
    <span class="has-error">Valid email required</span>
  </div>
</form>
```

## Why is it useful?
The `:has()` selector lets CSS respond to a parent's children — enabling container-aware styling, live validation feedback, and interactive states without JavaScript. These patterns make UI components more self-aware and reduce the need for conditional class toggling.
