# ease-copy-confirm

Button that morphs its label into a checkmark + "Copied!" confirmation on click.

## Usage

```html
<button class="ease-copy-btn" onclick="copyIt(this)">
  <span class="icon-copy">📋 Copy</span>
  <span class="icon-check">✅ Copied!</span>
</button>
```

```js
function copyIt(btn) {
  navigator.clipboard.writeText('text to copy');
  btn.classList.add('copied');
  setTimeout(() => btn.classList.remove('copied'), 2000);
}
```

## Notes

- Confirmation reverts to the copy icon after 2s (adjust the `setTimeout` delay as needed).
- Uses `navigator.clipboard.writeText`, which requires a secure context (HTTPS or localhost).

## Browser support

All modern browsers; clipboard API requires HTTPS.