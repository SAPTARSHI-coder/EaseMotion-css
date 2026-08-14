# Footer & Sidebar Fallback Color Fix — Issue #8567

Fixes incorrect fallback color `#111` for `--ease-color-neutral-900` in footer and sidebar components. The correct fallback should be `#0f172a` (the actual variable value).

## The Fix

**Before** (`components/footer.css` line 10, `components/sidebar.css` line 18):
```css
background: var(--ease-color-neutral-900, #111);
```

**After**:
```css
background: var(--ease-color-neutral-900, #0f172a);
```

## Comparison

| Token | Fallback (Before) | Actual Value | Fallback (After) |
|-------|-------------------|--------------|------------------|
| `--ease-color-neutral-900` | `#111` (pure near-black) | `#0f172a` (navy-slate) | `#0f172a` (navy-slate) |

## Files

- `style.css` — footer and sidebar with corrected fallback `#0f172a`
- `demo.html` — side-by-side comparison with swatches, footer preview
- `README.md` — this file
