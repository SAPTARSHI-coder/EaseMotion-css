# Dim Alert (`feature-dim-alert-mixin-ag`)

## What it does

`.dim-alert-mixin-ag` is a beginner-friendly CSS effect that applies a
smooth, looping "dim" pulse to an alert or loading indicator. It fades
the element's opacity down and back up on a continuous cycle, gently
drawing the user's attention without being jarring.

## How to use it

1. Link `style.css` in your page.
2. Add the `dim-alert-mixin-ag` class to any alert/loading element, along
   with the appropriate ARIA role so assistive technology announces it:

   ```html
   <div class="dim-alert-mixin-ag" role="status" aria-live="polite">
     Loading your content, please wait&hellip;
   </div>
   ```

   For a more urgent message (e.g. an error banner), use `role="alert"`
   with `aria-live="assertive"` instead of `role="status"`.

3. Open `demo.html` to see it in action.

## Why it's useful

- **Simple to drop in** — a single class name, no JavaScript required.
- **Accessible by default** — automatically respects
  `prefers-reduced-motion: reduce` by swapping the looping animation for
  a static dimmed state, so motion-sensitive users aren't affected.
- **Non-intrusive** — only `opacity` is animated, so it composes cleanly
  with existing layout and color styles without causing reflow or
  layout shift. 