# Chip Focus Outline — Design Tokens

## What does this do?

Proposes replacing the hardcoded `2px` outline width and
`outline-offset: 2px` in the chip's `:focus-visible` state with
design tokens, matching the convention used by every other
component in the framework.

## How is it used?

This is a documentation-only change in shape — consumers don't
need to do anything different. Once the maintainer applies the
change, the focus ring will respect the existing tokens.

## Why is it useful?

Every other focus-visible rule in the framework uses design
tokens for outline width and offset. The chip component was the
only one with hardcoded values. Aligning it brings the framework
to full token coverage and lets consumers override the focus ring
width from a single source.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` in your browser and Tab into the chips to see
the focus ring. The visual is identical to the current behavior
but now uses tokens under the hood.

## Contribution Notes

- Two-line change in `components/chip.css`
- No behavior change
- The submission demo uses the proposed token-based rules
