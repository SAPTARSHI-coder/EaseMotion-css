# Animated Copy-Confirmation Button Collection

## What does this do?
A set of four reusable, CSS-driven confirmation animations for any "copy" button — icon morph, scale-pulse, label crossfade, and a ripple-style ring burst — that work on any copy target (code, email, link, coupon) rather than being tied to code blocks specifically.

## How is it used?

```html
<button class="ease-copy-btn ease-copy-morph" data-copy-text="hello@example.com">
  <span class="ease-copy-icon">
    <span class="ease-check-stroke">
      <svg viewBox="0 0 14 14"><path d="M2 7.5 L5.5 11 L12 3" /></svg>
    </span>
  </span>
  Copy email
</button>

<button class="ease-copy-btn ease-copy-pulse" data-copy-text="EASEMOTION25">
  Copy coupon code
</button>

<button class="ease-copy-btn ease-copy-label-swap" data-copy-text="https://easemotion.css/docs">
  <span class="ease-copy-label">
    <span class="label-default">Copy link</span>
    <span class="label-copied">Copied!</span>
  </span>
</button>

<button class="ease-copy-btn ease-copy-ring" data-copy-text="npm install easemotion-css">
  Copy install command
</button>
```

One shared JS handler drives every variant — it's the only JavaScript in
this collection, and it's the same ~10 lines regardless of which
animation class is applied:

```js
document.querySelectorAll('.ease-copy-btn').forEach((button) => {
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(button.dataset.copyText || '');
    button.classList.remove('is-copied');
    void button.offsetWidth; // restart animation on rapid repeat clicks
    button.classList.add('is-copied');
    setTimeout(() => button.classList.remove('is-copied'), 1500);
  });
});
```

## Why is it useful?
EaseMotion CSS already has a copy-to-clipboard button tied specifically to
code blocks, but most real apps need to copy all sorts of things — emails,
referral links, coupon codes, API keys — and end up rebuilding the same
confirmation feedback each time. This collection separates the
*confirmation animation* from the *copy target* entirely: drop
`ease-copy-btn` plus any one variant class onto any button, toggle a single
`.is-copied` state, and the rest is pure CSS (clip-path/stroke morph,
scale-pulse, crossfade, ripple burst). That keeps it dependency-free and
composable with EaseMotion CSS's animation-first philosophy, and it can sit
alongside the existing code-block copy button rather than replacing it.

## Tech Stack
- HTML (with a tiny inline SVG checkmark for the morph variant)
- CSS only for every confirmation animation (`transition`, `@keyframes`,
  `stroke-dashoffset` morph, `clip-path`-free checkmark draw-in)
- ~10 lines of shared JS — the clipboard call and state-class toggle,
  identical across all four variants, not specific to any one of them

## Preview
Open `demo.html` directly in your browser — no build step, no server,
no external dependencies. Click each button to see its confirmation
animation play.

## Note on naming
Submitted as `copy-confirmation-collection-tk` (suffixed per the repo's
naming-collision policy in `CONTRIBUTING.md`) since a code-block-specific
copy button already exists (`copy-to-clipboard`, `copy-to-clipboard-btn`,
etc.). This collection is scoped to confirmation *animations* that work on
any button, so it complements rather than duplicates that prior art.