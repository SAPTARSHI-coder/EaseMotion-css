# Fix #3964: Fix #3964: ease-sr-only remove deprecated clip: rect()

`.ease-sr-only` uses deprecated `clip: rect()` property — dead weight that inflates CSS bundle and may be removed from future browser specs.
```css
.ease-sr-only { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip-path: inset(50%) !important; white-space: nowrap !important; border: 0 !important; }
```
