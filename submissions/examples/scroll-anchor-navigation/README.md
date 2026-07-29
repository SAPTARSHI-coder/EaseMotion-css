# Scroll Anchor Navigation

## What does this do?

Demonstrates offset-aware in-page navigation using `scroll-behavior: smooth`, `scroll-margin-top`, and sticky headers — including a side-by-side visual comparison of anchor targets with and without scroll offset handling.

## How is it used?

Open `demo.html` directly in any modern browser — no build step or server required.

```html
<link rel="stylesheet" href="style.css" />

<header class="san-header">…</header>

<div class="san-shell">
  <aside class="san-sidebar">
    <nav class="san-nav">
      <a class="san-nav__link" href="#san-intro">Introduction</a>
      <a class="san-nav__link" href="#san-scroll-margin">scroll-margin-top</a>
    </nav>
  </aside>

  <main class="san-main">
    <section class="san-section" id="san-intro">…</section>
    <section class="san-section" id="san-scroll-margin">…</section>
  </main>
</div>
```

Core CSS patterns:

```css
html {
  scroll-behavior: smooth;
}

.san-section {
  scroll-margin-top: var(--san-header-h);
}
```

Mini comparison panels use zero vs offset scroll margins:

```css
.san-demo-panel__section {
  scroll-margin-top: 0;
}

.san-demo-panel__section--offset {
  scroll-margin-top: var(--san-demo-sticky-h);
}
```

## Why is it useful?

EaseMotion CSS prioritizes polished, accessible motion and layout utilities. Documentation sites, marketing pages, and long-scroll demos frequently break when sticky headers cover anchor targets. This example teaches the CSS-native fix — no JavaScript scroll libraries — so contributors and maintainers can promote reliable navigation patterns into the framework.

---

## Overview

This submission is an educational documentation demo that shows how modern layouts combine:

- A **sticky top header** (72px)
- A **sidebar anchor navigation** rail
- **Long-scroll content sections**
- **Interactive comparison panels** illustrating header overlap

The page is self-contained (HTML + CSS only) and designed to be opened locally for immediate learning and testing.

## Purpose of scroll-margin

When a user clicks `#san-scroll-margin`, the browser scrolls that element to the top of the viewport. If a sticky header occupies the top 72px, the section heading lands underneath it.

`scroll-margin-top` adds virtual space above the scroll target without changing document flow. The browser stops scrolling earlier, leaving the heading visible below sticky chrome.

| Approach | Scope | Best for |
| --- | --- | --- |
| `scroll-margin-top` on sections | Per-target control | Mixed section sizes, nested scroll containers |
| `scroll-padding-top` on scroller | Global offset | Uniform header height across all anchors |

The comparison panels make this tangible: the left panel clips titles under an orange sticky bar; the right panel clears it.

## Smooth scrolling explanation

`scroll-behavior: smooth` on `html` animates scroll position changes triggered by:

- Sidebar and header anchor links
- URL hash navigation
- Keyboard focus moves that scroll elements into view

This creates a calmer documentation UX compared to instant jumps. The demo resets to `scroll-behavior: auto` when `prefers-reduced-motion: reduce` is enabled.

## Implementation details

### Layout structure

```
san-header (sticky, 72px)
└─ san-shell
   ├─ san-sidebar (sticky side nav)
   └─ san-main
      └─ san-section[id] (scroll-margin-top + :target highlight)
```

### Active section styling (CSS only)

Sidebar links highlight via `:has()` when a matching section is targeted:

```css
.san-shell:has(#san-intro:target) .san-nav__link[href="#san-intro"] {
  color: var(--san-accent);
  border-left-color: var(--san-accent);
}
```

Sections receive a card elevation treatment on `:target`.

### Sticky header overlap indicator

When any main section is targeted, a dashed orange overlay appears on the site header to visualize the overlap zone that `scroll-margin-top` compensates for.

### Comparison mini-panels

Each panel is its own scroll container (`height: 260px; overflow-y: auto`) with an internal sticky header. Anchor links inside demonstrate broken vs fixed behavior in isolation.

## Usage examples

1. Open `submissions/examples/scroll-anchor-navigation/demo.html`.
2. Click **Compare** in the header — scroll to the comparison section.
3. Inside the **Without offset** panel, click **Beta** and watch the heading hide under the orange bar.
4. Repeat in the **With offset** panel — the heading remains readable.
5. Use the sidebar **On this page** links to experience smooth scrolling with proper offsets across the full page.
6. Resize below 900px to verify horizontal nav chips and stacked layout.

## Browser support notes

| Feature | Support |
| --- | --- |
| `scroll-behavior: smooth` | Widely supported in modern browsers |
| `scroll-margin-top` | Chrome 69+, Firefox 68+, Safari 14.1+ |
| `scroll-padding-top` | Chrome 69+, Firefox 68+, Safari 11+ |
| `:has()` for active nav | Chrome 105+, Firefox 121+, Safari 15.4+ |

If `:has()` is unavailable, section `:target` highlighting still works; sidebar active states gracefully degrade to hover/focus styles only.

Always pair smooth scrolling with a reduced-motion fallback:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## Preview

Open [demo.html](./demo.html) directly in your browser.

## Tech Stack

- HTML5 (semantic landmarks, anchor IDs, skip link)
- CSS3 only (no JavaScript, no external CDNs, no frameworks)
