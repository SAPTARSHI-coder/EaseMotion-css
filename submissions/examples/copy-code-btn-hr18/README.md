# Copy Code Button (`copy-code-btn-hr18`)

A reusable Copy Code button for documentation code blocks, built for issue
[#48659](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/48659).

## What it does

Wraps any code block in a `.ease-code-block-hr18` container with a
`.ease-copy-btn-hr18` button pinned to its top-right corner. Clicking it
copies the block's text via the Clipboard API, swaps the icon from a
clipboard to a checkmark, changes the label to "Copied!", and reverts back
after ~1.8 seconds — no page reload, no per-block wiring required.

The demo shows it applied to three realistic documentation examples: an
`npm install` command, a CDN `<link>` tag, and a multi-line `import`
snippet.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap any code block in the component markup:

```html
<div class="ease-code-block-hr18">
  <pre><code>npm install easemotion-css</code></pre>
  <button type="button" class="ease-copy-btn-hr18" aria-label="Copy code">
    <svg class="ccb-icon-hr18 ccb-icon-copy-hr18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2"></rect>
      <path d="M5 15V5a2 2 0 0 1 2-2h10"></path>
    </svg>
    <svg class="ccb-icon-hr18 ccb-icon-check-hr18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span class="ccb-label-hr18">Copy</span>
  </button>
</div>
```

Add as many `.ease-code-block-hr18` elements to a page as you like — the
included script finds every instance automatically on load and wires up its
button, so a new code block only needs the markup above, not extra
JavaScript per instance.

## Accessibility notes

- The button always has a real `aria-label="Copy code"`, so it's announced
  correctly by screen readers even though its visible label text changes.
- A separate visually-hidden `role="status"` / `aria-live="polite"` region
  announces "Code copied to clipboard." (or a failure message) on every
  copy, independent of the button's own visual state change.
- Copying uses the async Clipboard API first, with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback for older or restricted browsers.
- The success state isn't color-only: the icon swaps from a clipboard glyph
  to a checkmark and the label text changes to "Copied!", so it reads
  correctly without relying on the green background alone.
- The button is a native `<button>`, so it's reachable and operable by
  keyboard (`Tab` + `Enter`/`Space`) with no extra scripting.

## Responsiveness

Code blocks scroll horizontally on narrow viewports rather than wrapping
awkwardly, and below `420px` the button collapses to icon-only (no "Copy" /
"Copied!" text) so it doesn't crowd the corner of a narrow code block.

## Why this fits EaseMotion CSS

It's exactly the kind of small, high-frequency-use component the framework
is meant to make trivial: pure CSS for the look, minimal vanilla JS for the
behavior, and a class-based API (`ease-code-block-hr18` /
`ease-copy-btn-hr18`) consistent with EaseMotion's existing naming
conventions. It directly improves the documentation experience described in
the issue, matching the one-click copy pattern used by Tailwind CSS,
shadcn/ui, and similar modern docs sites.

All classes and custom properties, and the folder itself, use a `-hr18`
suffix to avoid colliding with any other contributor's submission under
`submissions/examples/`.
