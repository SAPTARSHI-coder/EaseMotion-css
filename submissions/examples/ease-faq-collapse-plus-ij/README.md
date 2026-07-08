# FAQ Collapse +

An accordion-style FAQ component where clicking a question expands its answer. The plus icon rotates 45° to form a cross (×), providing a clear open/closed affordance.

## Features

- Smooth max-height transition on answer reveal
- Plus-to-cross icon animation via CSS `transform: rotate(45deg)`
- Multiple items independently expandable
- Hover state on question headers

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--faq-duration` | `0.3s` | Transition duration |
| `--faq-header-bg` | `#ffffff` | Question header background |
| `--faq-hover-bg` | `#f1f5f9` | Header hover background |
| `--faq-text-color` | `#0f172a` | Text color |
| `--faq-border` | `#e2e8f0` | Item border color |
| `--faq-radius` | `12px` | Item border-radius |
| `--faq-icon-color` | `#6366f1` | Plus/minus icon color |

## Usage

Each `.faq-item` contains a `.faq-question` button and a `.faq-answer` div. The JS toggles the `.open` class on the parent `.faq-item`, which drives both the icon rotation and the max-height expansion.
