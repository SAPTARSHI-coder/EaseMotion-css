# cheatsheet-cursor-fix

Documentation submission that corrects phantom cursor utility entries in `docs/cheatsheet.html` so the cheatsheet only lists classes actually defined in `core/utilities.css`.

## Phantom Classes Found

| Class | Listed in cheatsheet | Defined in `core/utilities.css` |
| --- | --- | --- |
| `ease-cursor-crosshair` | Yes — `docs/cheatsheet.html` line 143 | **No** |
| `ease-cursor-grab` | Yes — `docs/cheatsheet.html` line 144 | **No** |

Evidence from `core/utilities.css` (lines 343–345): only `.ease-cursor-pointer`, `.ease-cursor-default`, and `.ease-cursor-not-allowed` are shipped. Users copying `ease-cursor-crosshair` or `ease-cursor-grab` from the cheatsheet see no effect.

## Shipped Cursor Utilities

| Class | CSS Property | Value | Notes |
| --- | --- | --- | --- |
| `.ease-cursor-pointer` | `cursor` | `pointer` | Use on links, buttons, and interactive controls |
| `.ease-cursor-default` | `cursor` | `default` | Resets pointer inheritance on nested elements |
| `.ease-cursor-not-allowed` | `cursor` | `not-allowed` | Use on disabled buttons and blocked actions |

## Maintainer Decision Required

**Option A — Remove phantom entries (recommended for docs accuracy)**

Delete `ease-cursor-crosshair` and `ease-cursor-grab` from the cheatsheet data array in `docs/cheatsheet.html`. Replace the cursor section with the corrected fragment in `cursor-section-corrected.html`, which documents only the three shipped classes.

**Option B — Add missing classes to core**

Integrate the suggested implementations from the commented-out proposal block in `cursor-section-corrected.html` into `core/utilities.css`, then update the cheatsheet to include the new classes with accurate descriptions. At minimum, Option B would add `crosshair` and `grab`; the proposal block also sketches `grabbing`, `zoom-in`, `zoom-out`, `col-resize`, `row-resize`, and `text` for a fuller cursor utility set.

## Integration note

The HTML fragment in `cursor-section-corrected.html` is intended to replace the current cursor utilities section in `docs/cheatsheet.html` once approved by the maintainer. Contributors cannot edit `docs/` directly while the documentation freeze is in effect.
