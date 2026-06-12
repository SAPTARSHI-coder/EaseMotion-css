# Bug Fix #4452: `.ease-btn-loading` Spinner Invisible

## What does this do?

Fixes the invisible loading spinner on `.ease-btn-loading` buttons in `components/buttons.css`.

The current core uses `color: transparent !important` on the loading state while the `::after` spinner border uses `currentColor`, making the spinner fully transparent.

## How is it used?

No HTML changes required. Apply the CSS patch from this submission to `components/buttons.css`:

```css
/* Per variant — add spinner color token */
.ease-btn-primary {
  --ease-btn-spinner-color: #ffffff;
}
.ease-btn-success {
  --ease-btn-spinner-color: #ffffff;
}
.ease-btn-danger {
  --ease-btn-spinner-color: #ffffff;
}
.ease-btn-outline {
  --ease-btn-spinner-color: var(--ease-color-primary, #6c63ff);
}
.ease-btn-ghost {
  --ease-btn-spinner-color: var(--ease-color-neutral-700, #334155);
}
.ease-btn-link {
  --ease-btn-spinner-color: var(--ease-color-primary, #6c63ff);
}

/* Replace loading state rules */
.ease-btn-loading {
  pointer-events: none;
  position: relative;
  font-size: 0;
  line-height: 0;
}

.ease-btn-loading::after {
  border: 2px solid var(--ease-btn-spinner-color, currentColor);
  /* ...rest unchanged */
}
```

```html
<button class="ease-btn ease-btn-primary ease-btn-loading">Saving…</button>
```

Open `demo.html` to compare **broken** (current core behavior) vs **fixed** (this submission).

## Why is it useful?

Loading buttons are used during async actions (form submit, API calls). An invisible spinner gives users no feedback and breaks the documented `.ease-btn-loading` component API across all button variants.

## Maintainer integration

| Target file              | Action                                    |
| ------------------------ | ----------------------------------------- |
| `components/buttons.css` | Apply patch in `core-patch/buttons.css`   |
| `tests/smoke.test.js`    | Apply patch in `core-patch/smoke.test.js` |
| `easemotion.min.css`     | Run `npm run build` after merging         |

## Tech Stack

- Pure CSS fix (no JavaScript)

**Issue:** #4452  
**Labels:** bug, components, GSSoC-26
