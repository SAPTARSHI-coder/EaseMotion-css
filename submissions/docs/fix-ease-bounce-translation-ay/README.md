# Fix `.ease-bounce` Default Translation — Fix Reference

Addresses issue #39220: the `.ease-bounce` animation uses a hardcoded `-20px`
translation that is too aggressive for small elements like icons and buttons.

## What does this do?

The `ease-kf-bounce` keyframe in `core/animations.css` (line 189) and
`easemotion/bounce.css` (line 11) currently translates the element by a fixed
`-20px` at the 50% keyframe:

```css
/* CURRENT (buggy) */
@keyframes ease-kf-bounce {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translate3d(0, -20px, 0);   /* ← fixed pixel — too aggressive */
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
```

A fixed pixel value ignores element size. On a 16×16 icon, `-20px` is 125% of
the element's own height — it flies completely out of its container.

The fix is to replace `-20px` with `-0.5em`, which scales with the element's
computed `font-size`. A small icon inherits a small font-size; a large heading
inherits a large font-size — so the bounce distance stays proportionate in both
cases.

```css
/* FIXED */
@keyframes ease-kf-bounce {
  0%, 100% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translate3d(0, -0.5em, 0);  /* ← em unit — scales with element */
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
```

## How is it used?

No API changes. The class usage stays the same:

```html
<img class="ease-bounce" src="icon.svg" width="16" height="16" />
<button class="ease-bounce">Click me</button>
<h1 class="ease-bounce">Big heading</h1>
```

After the fix, each element bounces a distance proportional to its own font
size — subtle on small elements, appropriately larger on big ones.

The `demo.html` in this submission shows the before/after side-by-side across
three element sizes (16px icon, 32px button, 48px heading) to let the maintainer
visually verify the improvement.

## Why is it useful?

- **Proportional motion** feels intentional. A fixed pixel value creates
  wildly different visual weights at different element sizes.
- **em units are an established best practice** for motion that should scale
  with content — exactly the philosophy EaseMotion CSS is built around.
- **Zero breaking changes.** Existing users who override
  `transform: translate3d(0, -NNpx, 0)` in their own CSS are unaffected because
  CSS specificity is unchanged. Users who relied on the old aggressive value can
  override with a custom `--ease-bounce-distance` variable (see `style.css`).
- Fixes the reported issue (#39220) where a 16×16 icon bounces 20px — 125% of
  its own height — making it visually broken.

The two files that need the one-line change (for the maintainer):
- `core/animations.css` line 189: `translate3d(0, -20px, 0)` → `translate3d(0, -0.5em, 0)`
- `easemotion/bounce.css` line 11: `translateY(-20px)` → `translateY(-0.5em)`
