# Copy Class Button — Documentation UI Component

A reusable "Copy" button pattern for EaseMotion CSS documentation pages. Shows animation class names in a pill row with a one-click clipboard copy button, live search, toast notification, and success feedback.

## Features

- **One-click copy** — copies class name (without leading dot) to clipboard
- **Success feedback** — button turns green with "✓ Copied" for 1.5s
- **Toast notification** — bottom-center toast shows copied class name
- **Live search** — filter classes by typing; empty groups hide automatically
- **Category groups** — Fade, Slide, Attention Seekers, Continuous, Hover
- **Clipboard API** with `execCommand` fallback for older browsers
- **Dark mode** via `prefers-color-scheme: dark`

## Elements

| Class | Description |
|-------|-------------|
| `.ease-copy-row` | Row containing label + button |
| `.ease-copy-label` | Monospace class name label |
| `.ease-copy-btn` | Copy button (default state) |
| `.ease-copy-btn--copied` | Success state (green) |
| `.ease-copy-group` | Category container |
| `.ease-copy-group-title` | Category heading |
| `.ease-copy-search` | Search input |
| `.ease-copy-toast` | Fixed bottom toast |
| `.ease-copy-toast--visible` | Visible toast state |

## Usage

```html
<div class="ease-copy-row">
  <span class="ease-copy-label">.ease-fade-in</span>
  <button class="ease-copy-btn" onclick="copyClass(this, '.ease-fade-in')">
    📋 Copy
  </button>
</div>

<script>
function copyClass(btn, cls) {
  navigator.clipboard.writeText(cls.slice(1)).then(() => {
    btn.textContent = '✓ Copied';
    btn.classList.add('ease-copy-btn--copied');
    setTimeout(() => {
      btn.textContent = '📋 Copy';
      btn.classList.remove('ease-copy-btn--copied');
    }, 1500);
  });
}
</script>
```

## Why it fits EaseMotion CSS

EaseMotion CSS prioritises developer experience. A copy button pattern — like Tailwind CSS docs — removes friction when discovering and applying classes, making the documentation interactive and modern.

Closes #11754
