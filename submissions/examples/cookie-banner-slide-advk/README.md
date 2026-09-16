# Consent Banner

## What does this do?

A cookie consent notice that slides up from the bottom, with accept and reject
given identical visual weight.

## How is it used?

```html
<div class="cnb" role="region" aria-label="Cookie consent">
  <p class="cnb-t">Explanation of what is collected.</p>
  <div class="cnb-acts">
    <button class="cnb-b cnb-b--ghost" type="button">Reject</button>
    <button class="cnb-b" type="button">Accept</button>
  </div>
</div>
```

## Why is it useful?

Consent banners are usually built as modal overlays that block the page and trap
focus until a choice is made. That is both hostile and legally questionable in
jurisdictions requiring consent to be freely given — and it breaks the page for
anyone using a screen reader, who lands in a dialog before hearing what the site
is.

This banner is a non-modal `role="region"`. It sits above the content without an
overlay, so the page stays readable and scrollable and focus order continues
naturally to the banner rather than being forced into it.

The `min-width: 6rem` on both buttons is the deliberate design decision. Dark
patterns in this space work by making "Accept" a prominent button and "Reject" a
faint text link, so the choices are not equally available. Giving both the same
geometry — differing only in fill versus outline — keeps the choice genuine.

The 400ms entrance delay lets the page paint first, so the banner is understood
as an addition to a page the user can already see, rather than the first thing
that appears.
