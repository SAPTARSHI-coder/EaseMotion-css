# Ghost Button Dark Mode Fix

## Description
This submission fixes an accessibility and text-contrast bug where the text on a ghost button (`.ease-btn-ghost`) remains light and becomes completely invisible when hovered over in dark mode environments.

## How to Use
Ensure your document body or wrapper has the `.dark-mode` class applied, alongside the core button styles:

```html
<body class="dark-mode">
    <button class="ease-btn ease-btn-ghost">Hover Me</button>
</body>