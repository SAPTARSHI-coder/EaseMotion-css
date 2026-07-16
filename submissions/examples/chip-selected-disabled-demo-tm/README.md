# Chip Selected and Disabled Demo

## What does this do?
Self-contained demo of the chip component's selected and disabled
state styles. The chip in `components/chip.css` uses the CSS-only
checkbox pattern: a hidden checkbox is a sibling of the visible
label, and `:checked` / `:disabled` sibling selectors swap the
label's appearance. Linked to issue #5507.

## How is it used?
A chip group is a flex container of hidden checkboxes paired with
visible labels. The user sees a label that toggles on click:

    <div class="ease-chip-group">
      <input type="checkbox" id="tag-1" checked>
      <label class="ease-chip" for="tag-1">JavaScript</label>

      <input type="checkbox" id="tag-2">
      <label class="ease-chip" for="tag-2">CSS</label>

      <input type="checkbox" id="tag-3" disabled>
      <label class="ease-chip" for="tag-3">Beta</label>
    </div>

## Why is this useful?
The `:checked + .ease-chip` and `:disabled + .ease-chip` sibling
selectors are the entire pattern. Losing either of them would
silently break the chip component, so the smoke test in
`tests/smoke.test.js` should be asserting their presence.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see chips in their
default, selected, and disabled states. Click the unselected
chips to toggle them.

## Contribution Notes
- Linked to upstream issue #5507
- The proposed smoke test additions in #5507 are out of scope
  for this submission since `tests/` is a framework file that
  contributors cannot modify through PR
- Maintainers are encouraged to add the corresponding
  `expect(css).toContain(...)` assertions in
  `tests/smoke.test.js` directly
