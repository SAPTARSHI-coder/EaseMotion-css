# Animated Clipboard Copy Button (`animated-clipboard-copy-button-ksk`)

1. What does this do?  
An animated Copy-to-Clipboard button component. When clicked, it copies the target text snippet using the native web Clipboard API (`navigator.clipboard.writeText`), plays a spring checkmark icon pop + background ripple animation, changes label text to "Copied!", and automatically resets back to the idle state after 2.5 seconds.

2. How is it used?  
Include the `.copy-btn` in your code snippet headers. Bind a simple click listener:

```javascript
const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText('text to copy');
  copyBtn.classList.add('copied');
  setTimeout(() => copyBtn.classList.remove('copied'), 2500);
});
```

Customize styling and theme variables:
```css
.copy-btn {
  --copy-duration:        0.35s;
  --copy-spring:          cubic-bezier(0.34, 1.56, 0.64, 1);
  --copy-success-bg:      #10b981;
}
```

3. Why is it useful?  
Essential for documentation portals, developer dashboards, design systems, and code playgrounds. Provides immediate visual and tactile feedback while ensuring full keyboard accessibility (`tabindex="0"`, `aria-label`).

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #52417.*
