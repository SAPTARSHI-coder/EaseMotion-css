# Navbar Components Link Fix

## What does this do?

Fixes the **Components** button in the documentation navbar so it scrolls to the correct section when clicked.

## The problem

The header link pointed to `#components`, but the page had no element with `id="components"`. Clicking **Components** did nothing — the page stayed in place.

Other header links worked because their targets already existed:

| Link            | Target ID          | Status                      |
| --------------- | ------------------ | --------------------------- |
| Getting Started | `#getting-started` | Works                       |
| Utilities       | `#utilities`       | Works                       |
| Animations      | `#animations`      | Works                       |
| Components      | `#components`      | **Broken** (missing anchor) |

## The fix

1. **Added a Components section** with `id="components"` before the Buttons content.
2. **Closed a missing `}`** in the mobile `@media` CSS block (this caused a stylesheet parse error).

```html
<section id="components" class="docs-section">
  <h2 class="docs-h2">Components</h2>
  <p class="docs-p">
    Reusable UI building blocks — buttons, cards, scroll progress, and more.
  </p>
</section>
```

The header link now has a valid scroll target:

```html
<a href="#components">Components</a>
```

## How to test

1. Open `demo.html` in your browser.
2. Click **Components** in the top navbar.
3. The page should scroll to the Components section (above Buttons, Cards, and Scroll Progress).

## Files

- `demo.html` — documentation page with the navbar fix applied
- `style.css` — scroll-margin helper and notes on the CSS parse fix
- `README.md` — this file

## Why is it useful?

Anchor links only work when the destination `id` exists on the page. This is a common docs-site bug: the nav label is added, but the matching section anchor is forgotten. This submission shows the minimal fix — add the missing section, keep the existing `href` unchanged.
