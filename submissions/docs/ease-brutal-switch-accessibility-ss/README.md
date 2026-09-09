# Brutalism Segmented Switch Control - Accessibility Setup

## Overview

The **Brutalism Segmented Switch Control** (`.ease-switch-brutal`) implements the WAI-ARIA
[Radio Group pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/): a `role="radiogroup"` container holding
`role="radio"` segment buttons, with a roving `tabindex` and Arrow Key navigation driven by a small script. This
guide documents exactly what is required to wire that up correctly, and what depends on the included script versus
what is plain CSS.

This complements the existing guides for the same component:
- `submissions/docs/ease-brutalist-switch-ss/` — base markup and variants
- `submissions/docs/ease-brutal-switch-theming-ss/` — CSS custom property theming
- `submissions/docs/ease-brutal-switch-responsive-ss/` — responsive breakpoint layout

## HTML Structure

```html
<div class="ease-switch-brutal" role="radiogroup" aria-label="Billing Cycle">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Monthly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Quarterly</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Annual</button>
</div>
```

Required for correct initial state:

- The container needs `role="radiogroup"` and a descriptive `aria-label` (there is no visible `<label>` element for
  a radiogroup, so `aria-label` is the only accessible name source).
- Every segment is a real `<button type="button">` with `role="radio"`, never a `<div>` or `<span>` — native
  buttons get keyboard focusability and Space/Enter activation for free.
- Exactly **one** segment starts with `is-active`, `aria-checked="true"`, and `tabindex="0"`. Every other segment
  starts with `aria-checked="false"` and `tabindex="-1"`. This is the "roving tabindex" pattern: only one segment
  is ever in the Tab order at a time.

## Class Reference

| CSS Selector | Description |
| :--- | :--- |
| `.ease-switch-brutal` | Main segmented switch container with hard 3px border and drop shadow. |
| `.ease-switch-btn` | Individual segment button. |
| `.ease-switch-btn.is-active` | Selected segment state; kept in sync with `aria-checked="true"` by the script. |
| `.ease-switch-brutal-sm` / `.ease-switch-brutal-lg` | Size variants; do not affect accessibility behavior. |
| `.ease-switch-vertical` | Stacks segments vertically. Arrow key mapping is unchanged (`ArrowUp`/`ArrowDown` behave the same as `ArrowLeft`/`ArrowRight`). |
| `.sr-only` | Introduced in this demo only, to attach extra instructions via `aria-describedby` without visible duplicate text (see `demo.html`). Not part of the switch component itself. |

### Custom CSS Property Overrides

Overriding these tokens changes appearance only — they have no effect on ARIA state or keyboard behavior:

- `--brutal-accent`: selected segment background (default `#facc15`)
- `--brutal-border`: border/outline color (default `#000000`)
- `--brutal-shadow`: drop shadow color (default `#000000`)
- `--brutal-border-width`: border thickness (default `3px`)
- `--brutal-shadow-offset`: shadow distance (default `4px`)

## The Script Is Required

Unlike the visual styling, the interactive behavior (state updates, roving tabindex, Arrow Key handling) is **not**
CSS-only — it comes from the roving-tabindex script shown in `demo.html`. If you copy the markup and stylesheet
without also including that script, the buttons will render correctly but:

- Clicking a segment will not change `is-active` / `aria-checked` / `tabindex`.
- Arrow keys will do nothing.
- Only the segment that already has `tabindex="0"` in your markup will be reachable with Tab.

## Keyboard Navigation

| Key | Behavior |
| :--- | :--- |
| `Tab` / `Shift+Tab` | Moves focus into or out of the group. Only the active segment (`tabindex="0"`) is stopped on. |
| `ArrowRight` / `ArrowDown` | Selects and moves focus to the next segment, wrapping from the last segment to the first. |
| `ArrowLeft` / `ArrowUp` | Selects and moves focus to the previous segment, wrapping from the first segment to the last. |
| `Space` / `Enter` | Selects the focused segment. This works automatically because segments are real `<button>` elements — pressing Space or Enter on a focused button fires the same `click` event as a mouse click, with no extra key handling required. |
| `Click` | Selects the clicked segment directly, regardless of current focus. |

`ArrowUp`/`ArrowDown` and `ArrowLeft`/`ArrowRight` both work in every layout, including `.ease-switch-vertical` — the
script does not distinguish orientation.

## Focus & Visual Indicators

Focus styling uses `:focus-visible`, not `:focus`:

```css
.ease-switch-btn:focus-visible {
  outline: 3px solid #000000;
  outline-offset: 2px;
}
```

This means the outline ring appears for keyboard/assistive-technology focus, but not when a segment is focused via
mouse click — avoiding a visible ring after every pointer interaction while still giving keyboard users a clear
indicator.

## High-Contrast Mode

`@media (forced-colors: active)` rules ensure the switch stays legible under Windows High Contrast Mode / forced
colors, using system color keywords instead of the brutalist hard-coded palette:

```css
@media (forced-colors: active) {
  .ease-brutal-card,
  .ease-switch-brutal {
    border: 3px solid CanvasText;
  }
  .ease-switch-btn.is-active {
    border: 2px solid Highlight;
    background: Highlight;
    color: HighlightText;
  }
}
```

## Screen Reader Considerations

- `role="radiogroup"` + `aria-label` gives the group an accessible name announced before its members.
- Each segment's `role="radio"` + `aria-checked` is announced as a standard radio button state ("selected" /
  "not selected"), so screen reader users hear the same semantics as a native radio group.
- The DOM order of the buttons is the same as the visual/tab order in every layout variant (including
  `.ease-switch-vertical`), so there is no mismatch between what is announced and what is focused.
- Extra instructions (e.g. "use the arrow keys to change this value") can be attached with `aria-describedby`
  pointing at a `.sr-only` element, as shown in `demo.html`, instead of duplicating visible text.

## Common Mistakes

- Using `<div>`/`<span>` instead of `<button>` for segments — this removes native keyboard focusability and
  Space/Enter activation, and none of it is currently reimplemented for non-button elements.
- Omitting `aria-label` on the `role="radiogroup"` container — the group has no other accessible name source.
- Leaving more than one segment with `tabindex="0"`, or all segments at `tabindex="-1"` — breaks the roving
  tabindex pattern and either creates multiple Tab stops or none.
- Copying the markup/CSS without the script — see "The Script Is Required" above.

## Testing the Accessibility Setup

1. Open `demo.html` directly in a browser (no server or build step needed).
2. **Keyboard only:** Tab to a switch, confirm only one segment receives focus. Use Arrow keys to move through
   segments and confirm the visual selection, `aria-checked`, and focus all move together. Confirm Space/Enter also
   select the focused segment.
3. **Focus visibility:** Click a segment with the mouse (no outline should appear), then Tab away and back with the
   keyboard (outline should appear).
4. **Screen reader:** With a screen reader running, confirm the group's `aria-label` is announced, and that moving
   between segments announces each one's label and its selected/not-selected state.
5. **High-contrast mode:** Enable a Windows high-contrast theme (or emulate `forced-colors: active` in your
   browser's DevTools rendering tab) and confirm the border and active segment remain visible using system colors.

## Usage Example

```html
<link rel="stylesheet" href="style.css">

<div class="ease-switch-brutal" role="radiogroup" aria-label="View Mode">
  <button type="button" class="ease-switch-btn is-active" role="radio" aria-checked="true" tabindex="0">Editor</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Split</button>
  <button type="button" class="ease-switch-btn" role="radio" aria-checked="false" tabindex="-1">Preview</button>
</div>
<!-- include the roving-tabindex script from demo.html -->
```

## Browser / Testing Notes

- Uses standard `:focus-visible` and `@media (forced-colors: active)`; both are supported in current Chromium,
  Firefox, and Safari.
- `demo.html` has no external dependencies, CDNs, or build step — it opens directly in any modern browser.
- Verified manually: keyboard-only navigation, focus-visible behavior, and DOM/tab order in a desktop browser.
  Screen reader output and OS-level high-contrast rendering were reviewed against the documented ARIA
  attributes and `forced-colors` CSS rather than captured from a live screen reader session in this environment.

## Files

- `demo.html` — standalone example with a horizontal and a vertical switch, and screen-reader-only instructions.
- `style.css` — base switch styles, focus-visible and forced-colors rules, and the demo's `.sr-only` utility.
- `README.md` — this guide.
