# Mobile Grid Degradation Patch (-pr)

This submission provides a CSS architectural patch to fix the responsive grid collision on intermediate mobile devices.

## What does this do?
It introduces an intermediate media query (`max-width: 639px`) to gracefully degrade multi-column grids (like 3 or 4 columns) into 2 columns on large phones and small tablets, before they ultimately collapse into 1 column on screens below 480px.

## How is it used?
It seamlessly enhances the existing `.ease-grid-cols-3` and `.ease-grid-cols-4` core utilities. Developers do not need to change their HTML; the grid just becomes smarter!

## Why is it useful?
Currently, in `core/utilities.css`, any screen smaller than 480px drops to 1 column, but a screen at 500px will attempt to squish 4 columns into the viewport, causing severe text overflow and clipping. This patch provides the missing stepping stone for a truly fluid responsive design, ready for the maintainer to merge into the core `utilities.css`.
