# CSS-Only Toggle Switch

## What does this do?
An accessible, animated toggle switch using the checkbox hack with smooth sliding thumb transitions.

## How is it used?
Wrap a hidden checkbox inside a label:

    <label class="toggle">
      <input class="toggle-input" type="checkbox">
      <span class="toggle-track">
        <span class="toggle-thumb"></span>
      </span>
    </label>

Size modifiers: `toggle--sm`, `toggle--lg`.

## Why is it useful?
A common settings UI pattern that works entirely with CSS — no JavaScript, fully accessible, and themeable.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
