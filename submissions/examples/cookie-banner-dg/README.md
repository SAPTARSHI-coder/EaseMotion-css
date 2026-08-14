# Cookie Consent Banner (Slide-Up)

## What does this do?

A bottom-fixed cookie consent banner that slides up into view on page load and
slides back down when the user accepts or declines, remembering that choice in
`localStorage` so it doesn't reappear on repeat visits.

## How is it used?

```html
<div class="cookie-banner" id="cookieBanner">
  <p>
    We use cookies to improve your experience.
    <a href="/privacy">Learn more</a>
  </p>
  <div class="cookie-banner-actions">
    <button id="declineCookies" class="cookie-btn cookie-btn-secondary">Decline</button>
    <button id="acceptCookies" class="cookie-btn cookie-btn-primary">Accept</button>
  </div>
</div>
```

Add the `is-visible` class (via JS, after a short delay on page load) to trigger
the slide-up entrance. Add `is-hidden` on accept/decline to slide it back down.
See `demo.html` for the full working example, including the small amount of
persistence logic (~30 lines, framework-agnostic vanilla JS).

## Why is this useful?

Cookie/consent banners are a near-universal requirement for public-facing
sites, and they're a natural fit for EaseMotion's animation-first philosophy —
this combines a clean entrance/exit transition with a tiny bit of real-world
state logic (remembering the user's choice), showing EaseMotion can power
functional UI, not just decorative effects. It's self-contained, has no
external dependencies, and degrades gracefully:

- Respects `prefers-reduced-motion` (fades instead of sliding for users who
  request reduced motion).
- Falls back safely if `localStorage` is unavailable (e.g. private browsing) —
  the banner just reappears on the next load instead of throwing.
- Responsive: stacks vertically on narrow viewports.

## Notes for maintainer

- Demo includes a "Reset stored consent" button purely so reviewers can
  re-trigger the banner without clearing devtools storage manually — happy to
  remove it if you'd rather the demo only show the real component.
- Open to adjusting the easing/duration, or swapping `cubic-bezier(0.16, 1, 0.3, 1)`
  for whichever standard easing token EaseMotion settles on for entrance
  animations.
- Used the `-dg` suffix on the folder name per the naming rules in
  CONTRIBUTING.md to avoid collisions with any similar submissions.
