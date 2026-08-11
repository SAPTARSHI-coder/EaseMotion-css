# Copy-to-Clipboard Button with Checkmark Morph

## What does this do?
A small button that copies associated text to the clipboard on click, then
morphs its icon into a checkmark for ~1.5s as visual confirmation before
reverting.

## How is it used?
Place .copy-btn next to a code snippet with a data-copy="..."
attribute holding the text to copy. The accompanying script listens for
clicks, writes to the clipboard, and toggles a .copied class that drives
the icon morph transition.

## Why is it useful?
- The project's own docs page has multiple code blocks with no copy button
- Extremely common, expected micro-interaction in any documentation site
- Tiny footprint: a few lines of CSS + JS, no dependencies
- Directly improves the EaseMotion docs' own usability