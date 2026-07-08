# Copy to Clipboard Button

**What does this do?**
A button that copies text to the clipboard and shows animated visual feedback — the icon pops and a "Copied!" tooltip briefly appears above the button.

**How is it used?**
```html
<button class="copy-btn" data-copy-text="Hello World">
  <span class="copy-icon">📋</span>
  <span>Copy</span>
  <span class="copy-tooltip">Copied!</span>
</button>
```

**Why is it useful?**
Copy-to-clipboard buttons are extremely common (code snippets, API keys, share links, referral codes) but EaseMotion CSS doesn't yet have one. This is a small, self-contained, reusable pattern with a clean animated confirmation, respecting `prefers-reduced-motion` for accessibility.
