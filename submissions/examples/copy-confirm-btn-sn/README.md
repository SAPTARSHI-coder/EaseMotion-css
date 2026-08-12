# Copy Button with Feedback

## Summary
Animated copy button with crossfade "Copied!" confirmation.

## JS
```js
function copy(btn, text) {
  navigator.clipboard.writeText(text);
  btn.classList.add('ease-copied');
  setTimeout(() => btn.classList.remove('ease-copied'), 2000);
}
```