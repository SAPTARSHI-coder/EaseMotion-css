# Knowledge Base Experience Center

## What does this do?

An ultra-premium, enterprise-grade documentation portal that showcases sticky sidebar navigation, animated search, structured API content, activity feeds, and CSS-only micro-interactions for knowledge base experiences.

## How is it used?

Open `demo.html` directly in any modern browser — no build step or server required.

```html
<link rel="stylesheet" href="style.css" />

<header class="kb-topbar">
  <div class="kb-search">
    <input class="kb-search__input" type="search" placeholder="Search guides…" />
  </div>
</header>

<div class="kb-shell">
  <aside class="kb-sidebar">
    <nav class="kb-nav">
      <details class="kb-nav__group" open>
        <summary>Getting Started</summary>
        <ul>
          <li><a class="kb-nav__link kb-nav__link--active" href="#overview">Overview</a></li>
        </ul>
      </details>
    </nav>
  </aside>

  <main class="kb-main">
    <article class="kb-article">
      <section class="kb-callout kb-callout--info">…</section>
      <div class="kb-codeblock"><pre><code>…</code></pre></div>
    </article>
  </main>

  <aside class="kb-activity">…</aside>
</div>

<aside class="kb-helpfulness">
  <input type="radio" name="helpful" id="helpful-yes" />
  <label for="helpful-yes" class="kb-vote kb-vote--yes">Yes</label>
</aside>
```

Key class prefixes use `kb-` (Knowledge Base) and map to layout regions (`kb-topbar`, `kb-sidebar`, `kb-main`, `kb-activity`, `kb-helpfulness`) and content primitives (`kb-callout`, `kb-codeblock`, `kb-table`, `kb-timeline`, `kb-accordion`).

## Why is it useful?

EaseMotion CSS emphasizes readable motion, polished UI patterns, and zero-dependency styling. This submission demonstrates how documentation portals can feel production-ready using pure CSS — expanding search focus states, glass surfaces, scroll-driven progress, nested navigation, and feedback widgets — patterns the maintainer can later standardize into reusable `ease-*` utilities.

---

## Overview

Phase 38 delivers a **Knowledge Base Experience Center**: a developer-docs-style portal with three-column desktop layout (navigation, article, activity), a glass top bar with premium search, and a floating helpfulness panel. The demo reads like an enterprise SaaS documentation site while remaining fully self-contained.

## Features

| Area | Highlights |
| --- | --- |
| **Top bar** | Sticky glass header, brand mark, version badges, keyboard-friendly search |
| **Sidebar** | Sticky scroll, nested `<details>` sections, active link indicators, reading progress |
| **Article** | Hero metadata, info/warning/success callouts, YAML/HTTP/JSON code blocks, API table, SDK cards, changelog timeline, FAQ accordions |
| **Activity panel** | Live feed, pulsing status badge, hover micro-interactions, stat cards |
| **Helpfulness** | Floating glass widget with CSS-only vote states and thank-you reveal |
| **Mobile** | Checkbox-driven off-canvas sidebar, overlay dismiss, hamburger animation |

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  kb-topbar (sticky) — brand · kb-search · badges            │
├──────────────┬──────────────────────────────┬───────────────┤
│ kb-sidebar   │ kb-main / kb-article         │ kb-activity   │
│ (sticky nav) │ documentation content        │ update feed   │
│              │                              │               │
└──────────────┴──────────────────────────────┴───────────────┘
                                      kb-helpfulness (fixed)
```

- **Desktop (>1180px):** three-column grid with sticky sidebar and activity rail.
- **Tablet (900–1180px):** activity panel hidden; two-column nav + article.
- **Mobile (<900px):** slide-in sidebar via `#kb-nav-toggle` checkbox; overlay close target.

## CSS Highlights

- **Gradients** — page background radials, hero title text, timeline spine, progress bars
- **Glassmorphism** — top bar, sidebar, activity panel, helpfulness widget (`backdrop-filter`)
- **Layered shadows** — cards, code blocks, floating widget depth
- **Animated borders** — gradient mask ring on `.kb-codeblock`
- **Transitions & transforms** — nav hover slide, card lift, callout elevation
- **Scroll effects** — scroll-driven `.kb-read-progress` bar (`animation-timeline: scroll()`)
- **Grid & flex** — responsive shell, card grid, activity stats, callout layout
- **`:focus-within`** — expanding search bar with glow on focus
- **`:has()`** — helpfulness thank-you message and unselected vote dimming

## Responsiveness Notes

- Sidebar becomes a fixed drawer under 900px; no horizontal overflow on tables via `.kb-table-wrap`.
- Typography scales with `clamp()` on the main heading.
- Cards stack to a single column under 560px.
- Top bar hides secondary badges and keyboard hint on narrow viewports.
- `prefers-reduced-motion: reduce` disables animations and keeps the progress bar visible.

## Animation Showcase

| Element | Technique |
| --- | --- |
| Search input | Width expansion + glow on `:focus-within` |
| Sidebar links | `translateX` hover + active indicator glow |
| Reading progress (top) | Scroll-linked scale animation |
| Sidebar progress bar | Shimmer brightness keyframes |
| Activity badge | Pulsing dot (`kb-pulse`) |
| Helpfulness widget | Entrance float + vote selection feedback |
| Mobile menu | Hamburger morph via checkbox `:checked` siblings |
| Accordions | Rotating `+` icon on `[open]` |

## Usage Instructions

1. Navigate to `submissions/examples/knowledge-base-bv/`.
2. Open `demo.html` in Chrome, Firefox, Safari, or Edge.
3. **Search:** Tab to the search field and type — watch the bar expand and glow.
4. **Navigation:** Scroll the article; observe the top reading progress bar (in supporting browsers).
5. **Sidebar:** Hover links for motion; collapse/expand section groups via `<details>`.
6. **Mobile:** Resize below 900px, tap the menu button, use the overlay to close.
7. **Feedback:** Click Yes/No in the floating helpfulness panel — no JavaScript required.
8. **Customize:** Edit CSS custom properties in `:root` (`--kb-accent`, `--kb-sidebar-width`, etc.) to retheme.

## Preview

Open [demo.html](./demo.html) directly in your browser.

## Tech Stack

- HTML5 (semantic landmarks, `<details>` accordions, checkbox mobile nav)
- CSS3 only (no JavaScript, no external CDNs, no frameworks)
