# ⚡ Fix ease-typewriter Cursor Sync with Multiple Instances

Isolates typewriter cursor phases for multi-instance rendering harmony.

## ✨ What it does
Prevents typewriter cursors from going out of visual phase synchronization when multiple elements start animating on the same dashboard view at staggered delays.

## 🚀 How to Use
```html
<p class="ease-typewriter-sync" style="--chars: 16; --delay: 0s;">First typewriter</p>
<p class="ease-typewriter-sync" style="--chars: 17; --delay: 1.5s;">Second typewriter</p>