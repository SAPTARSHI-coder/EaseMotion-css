# Fix ease-modal Body Scroll Lock

## What does this do?
Adds `body.ease-modal-open` CSS class that sets `overflow: hidden` and
`position: fixed` (for iOS Safari) to prevent background scroll when
a modal is open. JS preserves the scroll position via `body.style.top`.

## How is it used?
```js
// Open
document.body.style.top = `-${window.scrollY}px`;
document.body.classList.add('ease-modal-open');
// Close
document.body.classList.remove('ease-modal-open');
document.body.style.top = '';
window.scrollTo(0, savedScrollY);
```

## Why is it useful?
Without scroll lock, background page content scrolls while the modal
is open, which is confusing UX. On iOS, `overflow: hidden` alone is
insufficient — `position: fixed` is required. Fixes: #35821
