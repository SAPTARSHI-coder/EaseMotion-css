# ease-drag-note-pin-board-sap

A corkboard with freely draggable sticky notes that can be repositioned anywhere within the board.

## Usage
Include `style.css`, add `.board-note` elements with inline `top`/`left` positions inside `.pin-board-sap`.

## Notes
- Drag offset is calculated once at `mousedown` (cursor position minus current element position) so the note doesn't "jump" to align with the cursor when drag starts.
- Dragged note gets a deeper shadow and raised `z-index`, visually lifting it above other notes.
- Respects `prefers-reduced-motion`: shadow transition is disabled; free-drag positioning is unaffected as direct input.