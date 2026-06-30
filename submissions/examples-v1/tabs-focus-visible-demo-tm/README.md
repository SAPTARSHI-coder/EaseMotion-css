# Tabs Focus-Visible Demo

## What does this do?
Self-contained demo of the keyboard-accessible tabs pattern
defined in `components/tabs.css`. Linked to issue #5509 which
proposed smoke-test coverage for the `:focus-visible` rule chain
that surfaces an outline on the visible `.ease-tab-label`.

## How is it used?
The tab group is composed of hidden radio inputs followed by
a tablist and tab panels. The pattern uses CSS sibling selectors
to switch the active state:

    <div class="ease-tabs">
      <input class="ease-tab-input" type="radio" name="tabs" id="tab-1" checked>
      <input class="ease-tab-input" type="radio" name="tabs" id="tab-2">
      <div class="ease-tabs-nav">
        <label class="ease-tab-label" for="tab-1">Tab 1</label>
        <label class="ease-tab-label" for="tab-2">Tab 2</label>
        <div class="ease-tab-underline"></div>
      </div>
      <div class="ease-tabs-content">
        <div class="ease-tab-panel">Content for tab 1</div>
        <div class="ease-tab-panel">Content for tab 2</div>
      </div>
    </div>

## Why is this useful?
The `:focus-visible` rule chain on hidden inputs makes the
visible label show an outline when the user navigates with
the keyboard. This is a real accessibility feature that the
smoke test in `tests/smoke.test.js` should be asserting.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and use Tab to
navigate between the tab labels — you should see the focus
outline appear on the active label.

## Contribution Notes
- Linked to upstream issue #5509
- The proposed smoke test additions in #5509 are out of scope
  for this submission since `tests/` is a framework file that
  contributors cannot modify through PR
- Maintainers are encouraged to add the corresponding
  `expect(css).toContain(...)` assertion in
  `tests/smoke.test.js` directly
