# Ease Copy Action

## What does this do?

A compact copy action control with a copy icon, label, and visual copied state.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="copy-item">
    <div class="copy-content">
        <span class="copy-icon">▣</span>
        <span class="copy-text">npm install easemotion</span>
    </div>

    <button class="copy-button" aria-label="Copy command">
        <span class="button-icon">⧉</span>
        <span>Copy</span>
    </button>
</div>
```

### Copied state

Add the `copied` class to display the copied state:

```html
<div class="copy-item copied">
    ...
</div>
```

### Features

- Copy icon
- Action label
- Copied state
- Hover animation
- Active interaction
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Copy actions are commonly used for code snippets, URLs, IDs, commands, configuration values, and other content that users frequently need to copy.

This component provides a clean and reusable copy control with clear visual feedback while following the animation-first philosophy of EaseMotion CSS.