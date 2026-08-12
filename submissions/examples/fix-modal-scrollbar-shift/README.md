# fix modal scrollbar shift

1. **What does this do?** Demonstrates the layout shift caused by `body.style.overflow = 'hidden'` in `core/modal.js` when the scrollbar disappears, and shows how `scrollbar-gutter: stable` (or padding compensation) prevents the jump.

2. **How is it used?** Open `demo.html`, scroll down so the page scrollbar is visible, then click "open modal (broken)" — the page width jumps ~15px. Click "open modal (fixed)" and the width stays stable because space for the scrollbar is reserved.

3. **Why is it useful?** The layout shift is jarring and makes the modal feel glitchy. The proposed fix — adding `scrollbar-gutter: stable` to `<html>` or compensating with `padding-right` — keeps the page stable when modals open, matching user expectations for a polished UI framework.

fixes #18794
