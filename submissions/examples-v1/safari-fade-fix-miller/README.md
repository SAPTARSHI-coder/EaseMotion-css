# Safari Fade-in Flicker Fix

## What's fixed
`ease-fade-in`, `ease-slide-up`, `ease-slide-down`, `ease-zoom-in`, and `ease-fade-out` flickered or flashed white on Safari (macOS) and all iOS browsers due to missing `-webkit-` prefixes and no GPU compositing hints.

## The fix (3 parts)

### 1. `-webkit-` prefixed `@keyframes`
```css
@-webkit-keyframes ease-kf-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes ease-kf-fade-in { ... }
```

### 2. GPU compositing hint — forces Safari onto compositor thread
```css
.ease-fade-in {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
```

### 3. Backface-visibility fix — prevents iOS flicker
```css
.ease-fade-in {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
```

## Affected classes fixed
- `ease-fade-in`
- `ease-fade-out`
- `ease-slide-up`
- `ease-slide-down`
- `ease-zoom-in`

## Browser support after fix
| Browser | Status |
|---|---|
| Chrome / Firefox / Edge | ✓ No change |
| Safari macOS 14 and below | ✓ Fixed |
| Safari iOS 15 and below | ✓ Fixed |
| Chrome iOS / Firefox iOS | ✓ Fixed |

## prefers-reduced-motion
Both `-webkit-animation` and `animation` are disabled under `prefers-reduced-motion: reduce`. Zero regression.

## Zero JavaScript. Zero breaking changes.
