# Label Edit Inline

Click a label to switch to inline edit mode. Save on blur or Enter, cancel on Escape. Smooth scale + opacity transitions between display and edit states.

## Features

- Inline editable labels with click-to-edit interaction
- Smooth scale + opacity transition between display and input
- Save on blur or Enter key; cancel on Escape
- Focus border highlight via `--lei-editing` custom property

## Usage

Set `--lei-editing` to `1` on `.lei-row` to switch to edit mode. The display label fades out while the input fades in. The JS manages click-to-edit, blur-save, and keyboard events.
