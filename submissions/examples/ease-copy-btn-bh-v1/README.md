# ease-copy-btn Copy-to-Clipboard Button with Checkmark Feedback

## What does this do?

A button component that copies adjacent text or code to the clipboard on click, then morphs its icon from a "copy" glyph into a checkmark for ~1.5s as confirmation before reverting — a delightful micro-interaction.

## How is it used?

```html
<div class="ease-code-block">
  <button class="ease-copy-btn" data-copy="npm install easemotion-css">
    <span class="ease-icon-copy">⧉</span>
    <span class="ease-icon-check">✓</span>
  </button>
  <code>npm install easemotion-css</code>
</div>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-copy-btn` | The copy button trigger |
| `.ease-icon-copy` | Copy icon (shown by default) |
| `.ease-icon-check` | Check icon (shown after copy) |
| `.ease-code-block` | Container for code + button |

## Why is it useful?

Copy buttons are everywhere in docs, code blocks, and API keys. This small micro-interaction provides immediate visual feedback that the copy succeeded:

- ✅ Immediate feedback with checkmark animation
- ✅ No alert/notification needed
- ✅ Clean, minimal design
- ✅ Works with keyboard (Tab + Enter)
- ✅ Integrates seamlessly with code blocks
