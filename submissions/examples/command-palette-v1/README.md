# Command Palette

## What does this do?
A command palette modal with search input and categorized command list items with keyboard shortcut hints — pure CSS `:target`.

## How is it used?
Link to the palette ID to open:

    <a href="#cmd-palette" class="btn">Open Palette</a>

Define the palette overlay:

    <div id="cmd-palette" class="cmd-overlay">
      <div class="cmd-palette" role="dialog">...</div>
    </div>

Commands are grouped by `cmd-group` sections with `cmd-item` entries.

## Why is it useful?
Provides a familiar command-palette UX (like VS Code or GitHub) using only CSS — great for dashboards, admin panels, and power-user interfaces.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
