# JSON Tree Viewer

A JSON data viewer that renders data as an expandable/collapsible tree with syntax coloring, indentation guide lines, and smooth height transitions.

## Overview

The component takes a JavaScript object and renders it as an interactive tree. Keys are highlighted in purple, strings in green, numbers in amber, booleans in indigo, and null values in gray. Nested objects and arrays can be toggled open/closed with an animated arrow rotation and max-height transition.

## Features

| Feature | Description |
|---|---|
| Expand/collapse | Click on any object or array header to toggle its children |
| Expand/Collapse All | Toolbar buttons toggle every node at once |
| Syntax coloring | Keys, strings, numbers, booleans, and null each have distinct colors |
| Indentation lines | Vertical guide lines connect nested levels |
| Smooth animation | Max-height transition on content reveal; arrow rotates 90&deg; on expand |
| Monospace rendering | Displays in a code-friendly monospace font family |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--jtv-duration` | `0.25s` | Animation duration for expand/collapse |
| `--jtv-key-color` | `#881391` | Object key text color |
| `--jtv-string-color` | `#059669` | String value text color |
| `--jtv-number-color` | `#d97706` | Number value text color |
| `--jtv-bool-color` | `#6366f1` | Boolean value text color |
| `--jtv-bg` | `#ffffff` | Tree container background |
| `--jtv-radius` | `0.5rem` | Container border radius |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="tree-container" id="treeContainer"></div>

<script>
  // Pass any JavaScript object to createTree()
  const data = { /* your JSON data */ };
  document.getElementById("treeContainer").appendChild(createTree(data));
</script>
```

Include the JavaScript `createTree` function from `demo.html` to render the tree. The tree supports objects, arrays, strings, numbers, booleans, and null values.
