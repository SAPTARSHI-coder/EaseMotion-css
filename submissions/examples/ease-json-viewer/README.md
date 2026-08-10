# ease-json-viewer

A small vanilla JavaScript example component that renders an interactive collapsible JSON tree with toolbar controls, path copy support, and pretty-print output.

## Features

- Collapsible nested JSON tree
- Copy JSON path by clicking a key
- Expand all / collapse all toolbar controls
- Copy raw JSON string to clipboard
- Pretty print JSON output in a visible code block
- Dark developer-style UI with animated node expansion

## Files

- `demo.html` — example page with the component markup and toolbar
- `style.css` — styling for the JSON viewer and toast notifications
- `script.js` — interactive tree renderer and toolbar behavior

## Usage

1. Open `demo.html` in a browser.
2. Click keys to copy the full JSON path for that value.
3. Use toolbar buttons to expand/collapse all nodes, copy the JSON payload, or toggle pretty print.

## Customization

- Replace `jsonData` in `script.js` with any JSON object to render a different payload.
- Update `style.css` to adjust colors, spacing, or typography.
- Enhance `script.js` to support search, filtering, or inline editing.

## Accessibility

- Tree container uses `role="tree"` and nodes use `role="treeitem"`.
- Buttons expose accessible labels for copy and toggle actions.
- Toast uses `aria-live="polite"` for copy status updates.
