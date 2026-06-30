# Default & Checked Radio

## What does this do?

Demonstrates the `:default` and `:checked` pseudo-classes for radio buttons, highlighting which option is the default vs which is currently selected.

## How is it used?

Apply to form radio inputs to visually distinguish default selections from user-chosen selections:

    <input type="radio" class="radio-default" name="option" value="a" checked>
    <input type="radio" class="radio-default" name="option" value="b">

## Why is it useful?

Users often need to see both the pre-selected default and their active choice. This pattern makes form state clear at a glance, improving usability in settings, preferences, and multi-step forms.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
