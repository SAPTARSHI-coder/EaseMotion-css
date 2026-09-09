# ease-drag-panel-collapse-resize-sap

A sidebar panel that collapses to zero width on double-clicking its resize handle, animating its width/padding shut.

## Notes
- Double-click is used as a common "collapse" affordance separate from a single-click drag-to-resize (not implemented here, but the handle is styled ready for it).
- `white-space: nowrap` prevents sidebar text from wrapping awkwardly as it narrows during collapse.
- Respects `prefers-reduced-motion`: width/padding collapse transition removed, toggling becomes instant.