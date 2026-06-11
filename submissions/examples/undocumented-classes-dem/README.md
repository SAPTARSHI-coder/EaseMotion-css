# Undocumented Classes Documentation Fix

**Fixes:** [#5026](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5026)  
**File affected:** `docs/index.html`

---

## Problem

The following classes are fully implemented in `core/animations.css`
but are completely absent from `docs/index.html`. Users who rely on
the documentation to discover classes will never find them.

| Class | Exists in CSS | In Docs |
|---|---|---|
| `ease-hover-shimmer` | ✅ | ❌ |
| `ease-hover-underline` | ✅ | ❌ |
| `ease-card-lift` | ✅ | ❌ |
| `ease-float` | ✅ | ❌ (in HTML example but not in table) |
| `ease-skeleton-shimmer` | ✅ | ❌ |
| `ease-skeleton-pulse` | ✅ | ❌ |
| `ease-skeleton-block` | ✅ | ❌ |

---

## Fix

Add the following rows and section to `docs/index.html`:

### 1. Hover Animations table — add 3 rows

```html
<tr>
  <td><code>ease-hover-shimmer</code></td>
  <td>Shimmer sweep slides across element on hover</td>
</tr>
<tr>
  <td><code>ease-hover-underline</code></td>
  <td>Animated underline grows from left on hover</td>
</tr>
<tr>
  <td><code>ease-card-lift</code></td>
  <td>Lifts element 8px with deep shadow on hover</td>
</tr>
```

### 2. Looping table — add 1 row

```html
<tr>
  <td><code>ease-float</code></td>
  <td>Smooth infinite floating up and down motion</td>
</tr>
```

### 3. New Skeleton / Loading section

```html
<h3 class="docs-h3">Skeleton / Loading</h3>
<table class="docs-table">
  <thead><tr><th>Class</th><th>Effect</th></tr></thead>
  <tbody>
    <tr>
      <td><code>ease-skeleton-shimmer</code></td>
      <td>Sliding shimmer gradient — standard skeleton loader</td>
    </tr>
    <tr>
      <td><code>ease-skeleton-pulse</code></td>
      <td>Fading pulse — alternative skeleton loader style</td>
    </tr>
    <tr>
      <td><code>ease-skeleton-block</code></td>
      <td>Base block shape with border-radius, combine with shimmer or pulse</td>
    </tr>
  </tbody>
</table>
<div class="docs-code">
  <span class="docs-code-lang">html</span>
  <pre><code>&lt;!-- Shimmer skeleton --&gt;
&lt;div class="ease-skeleton-shimmer ease-skeleton-block" style="height:18px;width:60%"&gt;&lt;/div&gt;
&lt;div class="ease-skeleton-shimmer ease-skeleton-block" style="height:12px;width:100%"&gt;&lt;/div&gt;

&lt;!-- Pulse skeleton --&gt;
&lt;div class="ease-skeleton-pulse ease-skeleton-block" style="height:18px;width:60%"&gt;&lt;/div&gt;</code></pre>
</div>
```

---

## Demo

Open `demo.html` in a browser to see all 7 missing classes working
live with descriptions and usage examples.

---

## Checklist

- [x] No new CSS classes added — only documenting existing ones
- [x] No breaking changes
- [x] Follows `ease-` naming convention (all classes already do)
- [x] Includes `demo.html`, `style.css`, `README.md`