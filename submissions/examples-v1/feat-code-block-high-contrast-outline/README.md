# Code-Block High Contrast Outlines

## Description
This PR adds transparent `outline` properties with dynamic `outline-offset` to the `code-block` component. Transparent outlines are invisible during standard viewing but automatically convert into solid, visible borders when a user enables Windows High Contrast Mode, greatly improving accessibility boundaries without affecting default visual design.

## Usage
Include the component as usual. The outline will handle its own visibility state natively based on the user's OS settings.

## Changes
- `style.css`: 60+ lines of code adding transparent outlines and dynamic offsets.
- `demo.html`: Demo testing outline visibility.
- `README.md`: Describes fix.
\nFixes #53698\n