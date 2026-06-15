# Marquee Accessibility Guidance — Issue #9470

**Fixes:** #9470

## What does this do?

Provides three working accessible marquee patterns covering every common
use case, with the correct ARIA attributes for each.

`ease-marquee.css` has an Accessibility section but it only addresses
focus styling. There is no guidance on the HTML attributes that screen
reader users require. This submission demonstrates the correct patterns
so the maintainer can integrate the guidance into the component docs and
CSS comments.

## The three patterns

### Pattern A — Decorative (logos, brand strips)

Use when the scrolling content is purely decorative or duplicated elsewhere:

```html
<div class="ease-marquee" aria-hidden="true">
  <div class="ease-marquee-track">
    <img src="react.svg" alt="" />
  </div>
</div>
```

`aria-hidden="true"` removes the element from the accessibility tree.
Screen readers skip it entirely.

### Pattern B — Informational (partner logos, feature highlights)

Use when the content is informational but not a live feed:

```html
<section
  class="ease-marquee"
  aria-label="Our technology partners"
  aria-roledescription="scrolling banner"
>
  <div class="ease-marquee-track" aria-live="off">
    <img src="react.svg" alt="React" />
  </div>
</section>
```

Screen readers announce the content once on page load and ignore
scroll updates.

### Pattern C — Live ticker (news, announcements)

Use when content is a live feed that must be communicated to all users:

```html
<section
  class="ease-marquee"
  aria-label="Live announcements"
  aria-roledescription="scrolling ticker"
>
  <div
    class="ease-marquee-track"
    role="log"
    aria-live="polite"
    aria-atomic="false"
  >
    <span>Breaking news item</span>
  </div>
</section>
```

Screen readers announce each new item politely when the user is idle.

## Why this matters

Without these attributes:
- Screen readers announce the marquee as a generic unlabelled `div`
- Live tickers may read every item on every scroll cycle (noise) or
  nothing at all (silent failure)
- The content is indistinguishable from any other `div` in the page
  accessibility tree

## Demo

The demo shows all three patterns working with real `.ease-marquee`
markup. Verify with a screen reader (NVDA, VoiceOver, JAWS) or the
browser Accessibility Tree in DevTools to confirm how each pattern
is announced.
