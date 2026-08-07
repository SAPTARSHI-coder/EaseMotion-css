# Ease Cookie Consent

## What does this do?
A cookie consent banner with two **switchable layouts** (bottom banner and
floating card, each with a matching entrance animation) and an
**accordion-style granular preferences panel** for per-category cookie
toggles, instead of a single static layout with only accept/reject.

## How is it different from a typical cookie-consent utility?
- Two distinct layout variants (`--bottom`, `--floating`) with different,
  purpose-matched entrance animations (slide-up vs. float-in).
- "Manage Preferences" expands an accordion panel with individual toggles
  for Analytics, Marketing, and Personalization (Essential is always on),
  rather than a binary accept-all/reject-all choice.
- Includes a dark mode toggle to demonstrate the banner adapting to theme.
- Dismissal uses a fade + slide-out transition rather than instantly
  disappearing.

## How is it used?
\`\`\`html
<div class="ease-cookie-consent ease-cookie-consent--bottom">
  <div class="ease-cookie-consent__main">
    <p class="ease-cookie-consent__text">We use cookies...</p>
    <div class="ease-cookie-consent__actions">
      <button class="btn btn--ghost">Manage Preferences</button>
      <button class="btn btn--outline">Reject All</button>
      <button class="btn btn--primary">Accept All</button>
    </div>
  </div>
  <div class="ease-cookie-consent__prefs">
    <!-- category toggles -->
  </div>
</div>
\`\`\`

See `demo.html` for the small JS driving the layout switch, accordion
toggle, and dismissal (all animation styling itself is in `style.css`).

## Why is this useful?
Cookie banners are near-universal on modern websites, and offering
granular consent plus flexible placement (bottom vs. floating) reflects
real-world compliance patterns — a practical, broadly reusable example for
EaseMotion CSS.