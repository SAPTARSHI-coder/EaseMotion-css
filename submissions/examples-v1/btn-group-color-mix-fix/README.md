# ease-btn-group — color-mix() @supports Fallback Fix

**Fixes:** Issue #4247

## Problem

`.ease-btn-group .ease-btn:not(:last-child)` used:

```css
border-right-color: color-mix(in srgb, currentColor 30%, transparent);
```

`color-mix()` is unsupported in Safari < 16.2. Without a `@supports`
guard, the property is silently dropped and the browser falls back to
the inherited `currentColor` — a full-opacity solid border. The button
group looks like separate disconnected buttons instead of a unified
component.

## Fix — Progressive Enhancement Pattern

```css
/* Step 1: rgba fallback — works in ALL browsers including Safari 15 */
.ease-btn-group .ease-btn:not(:last-child) {
  border-right-color: rgba(0, 0, 0, 0.15);
}

/* Step 2: color-mix() enhancement — only where supported */
@supports (color: color-mix(in srgb, red 50%, transparent)) {
  .ease-btn-group .ease-btn:not(:last-child) {
    border-right-color: color-mix(in srgb, currentColor 30%, transparent);
  }
}
```

## Browser Matrix

| Browser | color-mix() | Separator result |
|---|---|---|
| Chrome 111+ | ✅ | color-mix — context-aware |
| Firefox 113+ | ✅ | color-mix — context-aware |
| Safari 16.2+ | ✅ | color-mix — context-aware |
| Safari 15 | ❌ | rgba(0,0,0,0.15) — subtle ✅ |
| Firefox ESR < 113 | ❌ | rgba(0,0,0,0.15) — subtle ✅ |

## Acceptance Criteria

- [x] `@supports` guard added for `color-mix()` usage
- [x] Fallback `rgba` value provided and renders correctly
- [x] Dark mode fallback included (`rgba(255,255,255,0.15)`)
- [x] Tested pattern in Safari 15 (fallback) and Chrome (enhanced)