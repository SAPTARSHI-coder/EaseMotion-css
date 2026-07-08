# Tooltip — Multiline Line-Break Support

## What does this do?
Adds `.ease-tooltip-multiline` — a tooltip variant that respects
embedded `\n` characters in the `data-tooltip` attribute and
renders them as line breaks.

## How is it used?
Apply the modifier and use `\n` inside `data-tooltip`:

    <span class="ease-tooltip ease-tooltip-multiline"
          data-tooltip="Line one\nLine two\nLine three">
      Hover me
    </span>

## Why is it useful?
The default tooltip uses `white-space: nowrap`, which truncates
any line break. Multi-line tooltips are common for keyboard
shortcut hints, glossary definitions, and feature explanations.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` and hover the demo button to see multi-line
content.

## Contribution Notes
- Pure CSS addition using `white-space: pre-line`
- Combines with the existing `data-width="wide"` variant for
  longer text
