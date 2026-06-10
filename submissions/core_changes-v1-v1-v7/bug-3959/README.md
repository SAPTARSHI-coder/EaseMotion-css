# Fix #3959: Fix #3959: ease-kf-rotate and ease-kf-fade-* missing fill-mode

`@keyframes ease-kf-rotate` and ease-kf-fade-* do not set `animation-fill-mode: both`, causing visible jumps before animation starts.
```css
.ease-rotate { animation-fill-mode: both; }
.ease-fade-in { animation: ease-kf-fade-in 300ms var(--ease-ease) both; }
```
