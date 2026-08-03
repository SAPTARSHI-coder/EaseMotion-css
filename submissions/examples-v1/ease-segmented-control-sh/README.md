# Segmented Control

A reusable segmented control (the iOS-settings-style toggle) with a sliding
highlight that animates between segments. Pure CSS — zero JavaScript.

## What it does

- **Sliding highlight.** A single `.highlight` element moves under the
  active segment using `transform: translateX(...)`, driven by
  `:checked ~` sibling selectors off hidden (but focusable) radio inputs.
- **Four variants demonstrated:**
  - Two-option pill toggle (List / Grid — matches the original issue's
    HTML snippet)
  - Multi-option (4-segment) pill toggle (Day / Week / Month / Year)
  - Flat/underline two-option (Light / Dark)
  - Flat/underline multi-option (All / Active / Done)
- **Free keyboard support.** Each control is a native radio group, so Tab
  and the arrow keys move between segments automatically.
- **Exposed custom properties** for full customization:
  - `--segctl-highlight-bg` — highlight color/shape fill
  - `--segctl-highlight-shadow` — highlight drop shadow (set to `none` for flat)
  - `--segctl-radius` — corner radius (pill vs. square vs. anything between)
  - `--segctl-duration` / `--segctl-easing` — slide timing and curve
  - `--segctl-padding-x` / `--segctl-padding-y` — segment padding
  - `--segctl-font-weight-active` / `--segctl-font-weight-inactive` — active vs. resting weight
  - `--segctl-track-bg`, `--segctl-text-color`, `--segctl-text-color-active`

## Files

- `demo.html` — markup only, no JavaScript
- `style.css` — all styling and all interaction logic
- `README.md` — this file

## Running it

Open `demo.html` in any modern browser. No server, build step, or
dependencies beyond a Google Fonts stylesheet link.

## Using the component in your own markup

The base markup is exactly the two-input shape from the original feature
request, plus one addition — a `.highlight` span — which is what actually
slides:

```html
<div class="ease-segmented-control" style="--segctl-count: 2;">
  <input type="radio" name="seg" id="seg1" checked />
  <label for="seg1">List</label>
  <input type="radio" name="seg" id="seg2" />
  <label for="seg2">Grid</label>
  <span class="highlight"></span>
</div>
```

To add more segments, add more radio/label pairs (all sharing the same
`name`) and update `--segctl-count` to match. You'll also need one small
CSS rule per segment mapping its `:checked` state to a `translateX`
position and an active-label color — see the four examples in `style.css`
for the pattern (each one is two short rule blocks).

For the flat/underline look instead of the pill, add the
`ease-segmented-control--underline` modifier class:

```html
<div class="ease-segmented-control ease-segmented-control--underline" style="--segctl-count: 2;">
  ...
</div>
```

To restyle any instance, override the custom properties on that specific
container:

```css
.my-toggle {
  --segctl-highlight-bg: #14182a;
  --segctl-text-color-active: #ffffff;
  --segctl-radius: 8px;
  --segctl-duration: 200ms;
}
```

## Design notes

The visual style leans into the "familiar mobile settings toggle" framing
from the feature request: a soft grey track, a white pill with a subtle
shadow that looks like it's floating just above the track, and Inter as a
clean, neutral UI typeface. The underline variant strips that down to a
flatter, more understated look for contexts like filter chips or tab bars.

## Accessibility

- Radio inputs stay in the DOM, focusable and screen-reader-visible, just
  visually hidden via a standard clip technique — this is what gives Tab
  and arrow-key navigation for free.
- A visible focus ring appears on the highlight when its corresponding
  radio has keyboard focus (`:focus-visible`).
- Label text has sufficient contrast against both the track and the
  highlight in both variants.
- Respects `prefers-reduced-motion` by collapsing the slide/color
  transitions to effectively instant.
- Fully responsive: segment padding and font size scale down at narrow
  widths.

## Known limitations

- Segment count and position are driven by one small hardcoded CSS rule
  per segment (mapping a specific `id` to a `translateX` percentage and an
  active-label color) — the standard trade-off for a no-JavaScript,
  radio-driven component. Each example in this demo shows the pattern so
  it's easy to copy for a new instance.
- `--segctl-count` must be set to match the actual number of segments in
  that instance (used to size the highlight and the underline width); it
  isn't inferred automatically since there's no JavaScript to count children.
