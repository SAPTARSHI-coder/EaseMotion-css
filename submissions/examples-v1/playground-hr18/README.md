# Motion Bench — EaseMotion Playground (`playground-hr18`)

An interactive, self-contained playground for previewing and tuning EaseMotion-style
animations directly in the browser, built for issue [#48519](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/48519)
(resolves [#47379](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47379)).

## What it does

- A live preview box animates according to whatever settings you dial in — no page
  reload, no build step.
- An easing-curve trace redraws in real time next to the preview, so you can *see*
  the timing function you picked instead of just reading its name.
- A generated CSS snippet (a portable `@keyframes` block plus the `animation`
  shorthand) updates alongside the preview and can be copied with one click.

## What you can control

| Control | Notes |
|---|---|
| Duration | 100ms – 3000ms |
| Delay | 0ms – 1500ms |
| Easing function | `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, an overshooting "back" curve, or a fully custom `cubic-bezier()` (four numeric inputs) |
| Rotation | -360deg – 360deg |
| Scale | 0.1 – 2.5 |
| Start / end color | native color pickers |
| Direction | `normal`, `reverse`, `alternate`, `alternate-reverse` |
| Iteration count | 1 – 10, or an "infinite loop" checkbox |

## How it's built

- **`demo.html`** — markup, controls, and vanilla JS. No framework, no bundler,
  no CDN script tags — open the file directly in a browser and it works.
- **`style.css`** — all visual styling, driven by CSS custom properties so the
  whole UI can be re-themed from one place. Every animatable setting (duration,
  easing, rotation, scale, colors, etc.) is also passed to the preview element as
  a CSS custom property, which is what actually drives the `@keyframes` animation.
- **`README.md`** — this file.

### Live preview

Every control fires on `input`/`change`, which updates the custom properties on
the root element and forces the preview's animation to restart (`animation: none`
→ reflow → `animation: ''`), so changes are reflected immediately rather than on
the next natural animation cycle.

### Copy to clipboard

The **Copy CSS** button first tries the async Clipboard API
(`navigator.clipboard.writeText`). If that's unavailable or rejected (older
browsers, insecure context, permission denial), it falls back to a hidden
`<textarea>` + `document.execCommand('copy')`. Either way, success or failure is
announced through an `aria-live="polite"` status region so the outcome is
communicated without relying on sight alone.

### Responsive layout

The two-column layout (preview on the left, controls + output on the right)
collapses to a single column below a `700px` viewport width via one media query
in `style.css`.

### Dark mode

Dark styling lives entirely in a `[data-theme="dark"]` override block that
reassigns the same set of custom properties used by the light (default) theme.
The toggle button in the header simply flips `data-theme` on the root element —
no duplicated markup or JS branching for colors.

### Reduced motion

A `prefers-reduced-motion: reduce` media query collapses the preview animation
to a near-instant single frame, so the playground doesn't force motion on people
who've asked their system not to show it.

## Why these choices

The brief asked for something that "loads directly in any browser with no build
tooling or external CDN dependency," so everything — markup, styles, and
behavior — is plain HTML/CSS/vanilla JS in two files. Custom properties were the
natural mechanism for both the theming requirement and the "tune live" requirement,
since the same property (say, `--rotation`) can drive both the preview's
`@keyframes` and, once read back out, the generated CSS text shown in the output
panel. All new markup, classes, and the folder itself use a `-hr18` suffix (or
`playground-hr18` for the container) to avoid colliding with any other
contributor's submission in `submissions/examples/`.
