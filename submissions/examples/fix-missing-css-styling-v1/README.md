# Fix: Missing CSS Styling — Issue #1553

## What does this do?

Fixes the EaseMotion CSS documentation website rendering without any styles.
The site was displaying with default browser styling — no layout, no colors,
no typography — making it completely unusable.

## Root Cause

The original `docs/index.html` loads stylesheets from jsDelivr CDN using
SRI (Subresource Integrity) hashes:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css"
  integrity="sha384-u4alaiV9voo/7cfhvrlsJM1LxczXThaPZZd0qYJ9uU..."
  crossorigin="anonymous"
/>
```

SRI works by computing the hash of the downloaded file and comparing it
to the `integrity` value. If they don't match — the browser **blocks the
file from loading entirely** with no visible error to the user.

When the CDN package was updated, the file contents changed but the
`integrity` hashes in `docs/index.html` were not updated. This caused
every single CSS file to be silently blocked by the browser.

## The Fix

Remove the outdated `integrity` attributes from all CDN stylesheet links
in `docs/index.html`:

**Before (broken):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css"
  integrity="sha384-u4alaiV9voo..."
  crossorigin="anonymous"
/>
```

**After (fixed):**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css"
/>
```

Apply this to all 6 CDN stylesheet links in `docs/index.html` (lines 13–18).

## How to integrate into docs/index.html

Replace lines 13–18 in `docs/index.html` with:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/variables.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/base.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/utilities.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/components/buttons.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/components/cards.css"
/>
```

## Files

| File        | Purpose                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| `style.css` | Fallback CSS variables and base styles — ensures the page renders correctly even when the CDN is unavailable |
| `demo.html` | Full working demo of the docs page with all styles loading correctly                                         |
| `README.md` | This file                                                                                                    |

## Tech Stack

- HTML
- CSS (CSS custom properties)
- Vanilla JavaScript (theme toggle, scroll progress, copy buttons)

## Preview

Open `demo.html` directly in your browser — no server needed.
The page should render with full layout, sidebar, typography, and working
theme toggle (dark/light mode).
