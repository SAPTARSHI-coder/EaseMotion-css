## hyphens-text-layout-tm-mp

**What does this do?**
Provides three utility classes to control CSS hyphenation behaviour — none, manual (soft-hyphen hints only), and automatic — with vendor-prefix fallbacks for broad browser support.

**How is it used?**
```html
<p class="hyphens-none" lang="en">...</p>    <!-- no word breaking -->
<p class="hyphens-manual" lang="en">Inter&shy;nation&shy;al&shy;iz&shy;ation</p>  <!-- break only at &shy; -->
<p class="hyphens-auto" lang="en">...</p>    <!-- browser inserts hyphens automatically -->
```

> **Note:** `lang` attribute is required on the element (or an ancestor) for `hyphens: auto` to work correctly — the browser uses the language to pick the right hyphenation dictionary.

**Why is it useful?**
Long words in narrow containers (cards, sidebars, mobile viewports) frequently break layouts. These utilities give developers precise, readable control over hyphenation with a single class, consistent with EaseMotion CSS's human-readable, utility-first philosophy.
