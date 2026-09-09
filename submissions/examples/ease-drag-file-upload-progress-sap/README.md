# ease-drag-file-upload-progress-sap

A drag-and-drop upload zone that spawns a per-file progress bar row for each dropped file.

## Notes
- Each dropped file gets its own independent progress simulation and DOM row, so multiple simultaneous uploads track separately.
- Click-to-upload fallback included alongside drag-and-drop for non-drag interactions.
- Respects `prefers-reduced-motion`: drop-zone highlight and fill-width transitions are disabled; the underlying progress values still update correctly.