# Scroll-Trigger Reveal (`scroll-trigger-reveal-hr18`)

A standalone, dependency-free scroll-triggered reveal utility, built in
response to issue
[#49580](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/49580).

## A note on scope — please read before reviewing

Issue #49580 asks for a plugin at `easemotion/plugins/scroll-trigger.js`
that imports `parse()` and `compile()` from an existing `parser.js` /
`compiler.js` / `runtime.js` engine, reusing an `em=""` attribute DSL and a
`VISION.md` roadmap it says already lists this plugin.

I looked for that engine, those files, and the `em=""` syntax across the
repository (its README's own file tree, the live demo site, every other
open issue) and couldn't find any trace of them — everything in this
project today is plain CSS utility classes (`ease-fade-in`,
`ease-hover-grow`, etc.), not an attribute-driven JS engine with a
parser/compiler/runtime pipeline. Since I can't verify those files exist,
I didn't want to submit a "plugin" with imports that point at nothing —
that would look like a real contribution without being one.

So this submission builds toward the issue's actual **goal** — described
in its own "why" section as collapsing the ~15 duplicated, one-off
IntersectionObserver scroll-reveal demos in `submissions/examples/` into
one reusable, composable primitive — as a genuinely standalone utility
instead. It doesn't import from or depend on any core engine file. If the
engine described in the issue does exist somewhere I didn't find, this can
be adapted into a real plugin for it; until then, it stands on its own.

## What it does

A single script, `scroll-trigger-hr18.js`, watches any element carrying a
`data-ease-scroll` attribute and applies an animation class to it only once
it crosses a visibility threshold, instead of on page load. The grammar
deliberately echoes the spirit of the issue's proposed `em-scroll`
modifiers, without depending on anything the issue's DSL would require:

```
data-ease-scroll="<animation-class> [threshold-<0-1>] [once|repeat] [delay-<ms>]"
```

- **`<animation-class>`** (required, first token) — the class to apply on reveal
- **`threshold-<0-1>`** (default `0.2`) — how much of the element must be visible before it fires
- **`once` / `repeat`** (default `once`) — `repeat` re-triggers every time the element re-enters view
- **`delay-<ms>`** (default `0`) — delay before the class is applied after crossing the threshold

The demo page is a full scrollable article — hero text, a staggered
feature grid, a quote block, alternating left/right stat rows, and a
`repeat`-mode call-to-action you can scroll away from and back to — so
every modifier is visible in a realistic layout, not an isolated snippet.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a local `style.css` and a local
`scroll-trigger-hr18.js`; no build step, package manager, or external CDN.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div data-ease-scroll="ease-slide-up-hr18 threshold-0.3 once delay-100">
  Reveals once, 30% into view, after a 100ms delay.
</div>

<div data-ease-scroll="ease-fade-in-hr18 threshold-0.5 repeat">
  Fades in and out every time it crosses the 50% threshold.
</div>

<script src="scroll-trigger-hr18.js"></script>
```

Five ready-made animation classes ship in `style.css`:
`ease-fade-in-hr18`, `ease-slide-up-hr18`, `ease-slide-in-left-hr18`,
`ease-slide-in-right-hr18`, `ease-zoom-in-hr18` — or point
`data-ease-scroll` at any animation class of your own; the script doesn't
care which class name it's given.

## Accessibility notes

- The script checks `prefers-reduced-motion` directly and reveals every
  element immediately, with no animation and no `IntersectionObserver`
  churn, when the user has that preference set.
- `style.css` independently backs this up with its own
  `@media (prefers-reduced-motion: reduce)` rule, so content is never
  stuck invisible even if the script fails to load for some reason.
- Elements aren't hidden with `visibility: hidden` or `display: none` —
  only `opacity: 0` — so they remain in the accessibility tree and don't
  disrupt tab order while off-screen.
- There's a graceful fallback for environments without
  `IntersectionObserver`: everything reveals immediately rather than
  staying permanently hidden.

## Why this fits EaseMotion CSS

It directly serves the motivation in the original issue — one composable,
reusable scroll-reveal primitive instead of N copy-pasted
`IntersectionObserver` implementations — using plain, dependency-free
JavaScript and CSS, consistent with the framework's zero-dependency
philosophy, while being honest about not depending on internal files this
submission couldn't verify exist.

All classes, the `data-ease-scroll` attribute name, and the folder itself
use a `-hr18` suffix to avoid colliding with any other contributor's
submission under `submissions/examples/`.
