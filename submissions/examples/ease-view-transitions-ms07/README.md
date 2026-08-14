# Native Cross-Document View Transitions

A multi-page demo showing how a clicked product image can smoothly morph —
position, size, and shape — into the hero image on the *next page*,
across two completely separate HTML documents, using nothing but the
browser-native View Transitions API. **Zero JavaScript, zero SPA router.**

## ✨ Features

- **Pure CSS / HTML** — no JS, no router, no animation library
- **Cross-document morphing** — a single `@view-transition { navigation: auto; }`
  rule per page is all it takes to animate a real, full-page navigation
- **Shared-element morph** — matching `view-transition-name` values on the
  gallery thumbnail and the detail-page hero image tell the browser
  exactly which two elements to interpolate between
- **Automatic reverse transitions** — clicking "Back to all products" morphs
  the hero image back down into its gallery position, with no extra code
- **Customizable timing** — per-element transition duration/easing tuned
  via `::view-transition-group()`
- **Dark mode compatible** — full palette swap via `prefers-color-scheme: dark`
- **Progressively enhanced** — browsers without support simply navigate
  normally, with no broken layout or missing content
- **Accessible** — `prefers-reduced-motion` disables the morph animation
  entirely, falling back to an instant page swap

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Gallery / index page listing all products |
| `product-aurora.html` | Detail page for "Aurora Headphones" |
| `product-halo.html` | Detail page for "Halo Smartwatch" |
| `product-nova.html` | Detail page for "Nova Speaker" |
| `style.css` | Shared styling, layout, and view-transition tuning |
| `README.md` | This file |

> This is a genuinely **multi-page** demo — open `demo.html` in a local
> server (not `file://`, see [Testing](#-testing-locally) below) and click
> through to see the cross-document morph in action.

## 🚀 How it works

### 1. Opt in to native navigation transitions

Each page includes this rule in its `<head>`:

```css
@view-transition {
  navigation: auto;
}
```

That's the *entire* trigger. It tells the browser: "when the user
navigates away from this page (same-origin, same-tab), capture a snapshot,
and when the new page loads, animate between the two instead of just
swapping them."

### 2. Name the elements that should morph into each other

On the gallery page, the thumbnail gets a `view-transition-name`:

```html
<img
  class="em-product-thumb"
  style="view-transition-name: em-vt-aurora;"
  src="..." alt="Aurora wireless headphones in matte white">
```

On the product's detail page, the **hero image** gets the *same* name:

```html
<img
  class="em-product-hero"
  style="view-transition-name: em-vt-aurora;"
  src="..." alt="Aurora wireless headphones in matte white">
```

Because both elements share `em-vt-aurora`, the browser automatically
calculates a smooth interpolation of position, size, and border-radius
between the two — a real geometric morph, not a cross-fade — with zero
JavaScript.

### 3. (Optional) Tune the animation

By default the browser applies a reasonable cross-fade/resize animation.
`style.css` overrides the duration and easing per group so the product
image morphs with a slightly springier curve than the rest of the page:

```css
::view-transition-group(em-vt-aurora),
::view-transition-group(em-vt-halo),
::view-transition-group(em-vt-nova) {
  animation-duration: 0.6s;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## 🧪 Testing locally

Cross-document view transitions require the pages to be served over
`http://` or `https://` (not opened directly via `file://`). Any static
server works:

```bash
# from inside submissions/examples/ease-view-transitions/
python3 -m http.server 8000
# then open http://localhost:8000/demo.html
```

Use a browser with support for cross-document view transitions (Chrome or
Edge 126+, behind no flag as of this writing). In unsupported browsers,
links still navigate normally — the demo simply loses the morph animation,
nothing breaks.

## 🎛️ CSS Custom Properties

```css
:root {
  --em-bg-1: #f3f4fb;         /* page background gradient start */
  --em-bg-2: #fbf3f8;         /* page background gradient end */
  --em-surface: #ffffff;      /* card / panel background */
  --em-text: #1b1c26;         /* primary text color */
  --em-text-dim: #5c5f6d;     /* muted text color */
  --em-border: rgba(20,20,30,0.08); /* card border color */

  --em-accent-1: #7c5cff;     /* primary accent */
  --em-accent-2: #22d3ee;     /* secondary accent */

  --em-radius: 18px;          /* card corner radius */
  --em-shadow: 0 10px 30px rgba(20,20,40,0.12); /* card drop shadow */

  --em-dur: 0.5s;             /* default view-transition duration */
  --em-ease: cubic-bezier(0.4, 0, 0.2, 1); /* default view-transition easing */
}
```

Dark mode automatically overrides the palette inside a
`prefers-color-scheme: dark` block — no separate dark-mode class needed.

## 🧩 Key Classes & Pseudo-elements

| Selector | Purpose |
|---|---|
| `.em-gallery-grid` / `.em-product-card` | Gallery layout and thumbnail cards |
| `.em-product-detail` / `.em-product-hero` | Detail-page layout and hero image |
| `view-transition-name` (inline style) | Links a gallery thumbnail to its detail-page hero — **the actual mechanism that drives the morph** |
| `::view-transition-group(*)` | Targets every transitioning element; sets default timing |
| `::view-transition-group(em-vt-aurora)` etc. | Targets one specific named element's transition |
| `::view-transition-old(root)` / `::view-transition-new(root)` | The outgoing/incoming full-page snapshots (everything *not* individually named) |

## ♿ Accessibility Notes

- Under `prefers-reduced-motion: reduce`, all view-transition animations
  (`::view-transition-group`, `::view-transition-old`,
  `::view-transition-new`) are explicitly disabled, so navigation becomes
  an instant swap rather than an animated morph.
- Every image includes descriptive `alt` text.
- The "Back to all products" link and product cards are standard, fully
  keyboard-focusable anchor elements with visible `:focus-visible` styles.
- Because this feature is a *progressive enhancement* on top of normal
  `<a href>` navigation, it degrades gracefully: unsupported browsers,
  assistive technology, and users with JavaScript disabled all get a
  fully functional (if less animated) experience.

## ⚡ Performance Notes

- The morph is computed and composited entirely by the browser's own
  rendering pipeline — there is no JavaScript animation loop, no virtual
  DOM diffing, and no client-side router to ship or parse.
- Because it works across full page navigations, each page can be a
  plain, independently-cacheable static HTML file — there's no SPA bundle
  to download up front.

## 🌐 Browser Support

Cross-document View Transitions (`@view-transition { navigation: auto; }`)
are a bleeding-edge API, currently supported in Chromium-based browsers
(Chrome/Edge 126+). Same-document view transitions
(`document.startViewTransition()`) have broader support but require JS and
are out of scope for this pure-CSS demo. In browsers without support,
links behave as ordinary navigations with no animation — there is no
broken state to handle.