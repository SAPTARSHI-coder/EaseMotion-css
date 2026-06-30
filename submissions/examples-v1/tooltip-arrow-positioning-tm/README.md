# Tooltip — Arrow Positioning Variants

## What does this do?
Adds explicit `data-arrow="start"`, `data-arrow="center"`, and
`data-arrow="end"` attributes that control which edge of the
tooltip the arrow anchors to.

## How is it used?
Apply alongside `.ease-tooltip`:

    <span class="ease-tooltip" data-tooltip="Anchored left" data-position="top" data-arrow="start">
      Top, arrow at start
    </span>

## Why is it useful?
The default tooltip centers the arrow under the trigger. When a
tooltip is wider than its trigger (e.g. a small icon), centering
makes the tooltip look misaligned. Anchoring the arrow to the
start (left) or end (right) of the trigger gives designers more
control.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see the three anchor positions.

## Contribution Notes
- Pure CSS addition
- Falls back to the existing centered behavior if `data-arrow`
  is not set
