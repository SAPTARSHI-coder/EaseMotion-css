# Ease Thread Comment Viewer

A threaded/nested comment viewer with animated collapse and expand for replies.

## What does this do?
Displays a discussion thread with top-level comments and nested replies. Clicking "Hide replies" / "Show replies" smoothly collapses or expands the reply thread with an animated height and opacity transition.

## How is it used?
Open `demo.html` and click "Hide replies (2)" under the first comment to collapse its thread, then click again to expand it.

```html
<div class="ease-thread-comment">
  <div class="ease-thread-avatar">A</div>
  <div class="ease-thread-body">
    <p class="ease-thread-text">Comment text</p>
    <button class="ease-thread-toggle-btn" data-target="thread-1">Hide replies (2)</button>
    <div class="ease-thread-replies" id="thread-1">
      <!-- nested reply comments -->
    </div>
  </div>
</div>
```

## Why is it useful?
A common pattern for forums, social apps, and comment sections needing threaded discussions with clean, lightweight, dependency-free collapse/expand animation — fits EaseMotion's animation-first philosophy.
