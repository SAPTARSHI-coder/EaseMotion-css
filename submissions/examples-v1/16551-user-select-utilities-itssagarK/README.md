# CSS User-Select Utilities (Issue #16551)

This submission introduces **user-select** utility classes for the **EaseMotion CSS** framework. These utilities provide declarative control over text-selection rules, improving user experience on interactive panels, buttons, and code widgets.

## 📋 Features & Classes

| Utility Class            | CSS Rule                        | Description                                                                                                          |
| :----------------------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------------- |
| `.ease-user-select-none` | `user-select: none !important;` | Disables text-selection on elements (buttons, drag-drop targets, headers).                                           |
| `.ease-user-select-text` | `user-select: text !important;` | Forces normal, granular text-selection inside containers.                                                            |
| `.ease-user-select-all`  | `user-select: all !important;`  | Automatically selects the entire block's text contents on a single click (best for API keys, tokens, code snippets). |
| `.ease-user-select-auto` | `user-select: auto !important;` | Restores standard browser-inherited text-selection logic.                                                            |

## 🛠️ Usage Example

To allow users to easily select and copy an entire API key block with a single click, add `.ease-user-select-all`:

```html
<div class="api-key-box ease-user-select-all">sk-proj-78349281a8c9b20b21a3</div>
```

## 🎨 Interactive Demo

The included [demo.html](demo.html) showcases:

1. **Disabled Text Selection Sandbox:** Demonstrates `.ease-user-select-none` preventing text highlight.
2. **One-Click Select Sandbox:** Showcases `.ease-user-select-all` instantly highlighting the complete card block.
3. **Fine-Grained Selection Sandbox:** Compares text selection across different configurations.
