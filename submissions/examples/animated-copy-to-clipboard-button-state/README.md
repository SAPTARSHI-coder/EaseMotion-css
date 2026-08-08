# ease-copy-btn

A copy-to-clipboard button with an animated "copied!" state for **EaseMotion CSS**.

## Usage

```html
<button class="copy-btn" onclick="
  navigator.clipboard.writeText('text to copy');
  this.classList.add('copy-btn-copied');
  setTimeout(() => this.classList.remove('copy-btn-copied'), 2000);
">
  <span class="copy-btn-icon copy-btn-icon-default">📋</span>
  <span class="copy-btn-icon copy-btn-icon-success">✔</span>
  <span class="copy-btn-label">Copy</span>
</button>