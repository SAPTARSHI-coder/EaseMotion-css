# Keep Performance Doc inside Docs Layout (`keep-performance-in-docs-ksk`)

1. What does this do?  
Showcases the integration of the Performance Guide markdown document directly into the core `docs/index.html` single-page navigation layout.

2. How is it used?  
The maintainer can copy the section structure `<section id="performance">` from this demo into `docs/index.html` right before the `#contributing` section, update the sidebar anchor to `#performance`, and append the style rules from `style.css` to `docs/docs.css`.

3. Why is it useful?  
It maintains user layout persistence (preventing users from dropping out of the sidebar navigation frame when clicking the Performance Guide) and ensures style and UX coherence across all document views.

---
*Created for GSSoC-26 — Resolves #44519.*

## Required Core Changes

### 1. Update Sidebar Link (`docs/index.html`)
Change the raw file reference to a hash anchor link:
```diff
- <li><a href="PERFORMANCE.md">Performance Guide</a></li>
+ <li><a href="#performance">Performance Guide</a></li>
```

### 2. Embed Section Content (`docs/index.html`)
Insert the HTML-converted content of `PERFORMANCE.md` inside a new `<section id="performance">` element:
```html
<hr class="docs-divider" />
<section id="performance" class="docs-section">
  <!-- Content here -->
</section>
```

### 3. Add List & Block Styles (`docs/docs.css`)
Append the following styles to support ordered/unordered lists and block elements inside `.docs-content`:
```css
.docs-content ul,
.docs-content ol {
  color: var(--page-text-muted, #8b949e);
  line-height: 1.75;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
.docs-content ul { list-style-type: disc; }
.docs-content ol { list-style-type: decimal; }
.docs-content li { margin-bottom: 0.4rem; }
```
