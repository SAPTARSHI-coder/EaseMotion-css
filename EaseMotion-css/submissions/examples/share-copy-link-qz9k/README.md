# Share / Copy Link

## What does this do?

A share control with two buttons: "Copy" always copies the URL to the
clipboard, and "Share" opens the OS-native share sheet (`navigator.share`)
where available, falling back to the same copy behaviour where it isn't —
so one component covers mobile share sheets and desktop copy-link without
any markup-level feature detection.

## How is it used?

```html
<input id="scl-url" value="https://example.com/..." readonly />
<button onclick="sclCopy(this)">
  <span class="scl-btn-label">Copy</span>
  <span class="scl-btn-copied" aria-hidden="true">Copied</span>
</button>
<button onclick="sclNativeShare(this)">Share</button>
```

`sclCopy` tries `navigator.clipboard.writeText` first and falls back to a
`select()` + `execCommand('copy')` pair on the (temporarily writable) URL
input for non-secure contexts. `sclNativeShare` calls `navigator.share` when
present and otherwise just calls `sclCopy`.

## Why is it useful?

`navigator.share` and the async Clipboard API have non-overlapping browser
support in different directions — share is common on mobile, absent on most
desktop browsers; clipboard write needs a secure context. A share button
that only calls `navigator.share` silently does nothing on unsupported
browsers unless it also falls back to copy, and a copy button that only uses
the async Clipboard API breaks over plain HTTP or in older WebViews unless
it also falls back to `execCommand`. Layering both fallbacks means the
control degrades gracefully at every tier instead of failing outright on
any one browser/context combination.

Stacking "Copy" and "Copied" label text in the same grid cell (rather than
swapping `textContent`) keeps the button's width constant across the state
change, so neighbouring buttons in the row don't visibly shift when the
label's character count changes.
