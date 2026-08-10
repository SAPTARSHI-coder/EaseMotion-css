# Fix #57713: Hover Glow - Firefox & Safari Fallback

## What does this do?

Fixes the `.ease-hover-glow` hover effect that was disappearing on Firefox and Safari browsers without CSS Color Module Level 4 `color-mix()` support by properly separating the rgba fallback from the modern color-mix override using `@supports`.

## How is it used?

```html
<button class="ease-hover-glow">Hover for Glow</button>
```

## Why is it useful?

**The Problem:**
- Original code declared `filter` twice in the same rule
- Second declaration overwrote the first
- Browsers without `color-mix()` lost both filter definitions
- Result: glow effect disappeared on Firefox and Safari

**The Solution:**
- Use `@supports` rule for feature detection
- Base rule provides rgba fallback (works everywhere)
- `@supports` block overrides with color-mix (modern browsers only)

**Impact:**
- Glow effect now works on Firefox and Safari
- Modern browsers get dynamic primary color glow via color-mix
- Proper progressive enhancement

## Changes Required

In `core/animations.css`:

```css
/* Before: Duplicate filter breaks fallback */
.ease-hover-glow:hover {
  filter: drop-shadow(...rgba());
  filter: drop-shadow(...color-mix()); /* Overwrites! */
}

/* After: Proper fallback with @supports */
.ease-hover-glow:hover {
  filter: drop-shadow(...rgba());
}

@supports (color: color-mix(in srgb, blue, red)) {
  .ease-hover-glow:hover {
    filter: drop-shadow(...color-mix());
  }
}
```

## Browser Support

| Browser | Before | After |
|---------|--------|-------|
| Firefox | ❌ Broken | ✅ Works |
| Safari 14–16 | ❌ Broken | ✅ Works |
| Chrome/Edge 111+ | ✅ Enhanced | ✅ Enhanced |

Closes #57713
