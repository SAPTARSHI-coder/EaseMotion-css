# Dynamic Text Entrance and Typography Stagger Modifiers

### What does this do?

This feature adds a specialized utility suite purely for animating typography. It introduces fluid text-reveal mechanisms from behind an invisible overflow clip mask (`.em-text-reveal`) and precise inline stagger delays (`.em-stagger-1` through `.em-stagger-5`).

### How is it used?

Attach the classes directly to text elements or wrappers. For example, to create a slide-up reveal, wrap the target in an element with `overflow: hidden`:

```html
<div style="overflow: hidden;">
  <h1 class="em-animated em-text-reveal">Welcome to EaseMotion CSS</h1>
</div>

<p class="em-animated em-fade-in em-stagger-1">
  Animations made incredibly simple.
</p>
<p class="em-animated em-fade-in em-stagger-2">
  Pure utility-first layout controls.
</p>
```

### Why is it useful?

This expands the utility of EaseMotion CSS into high-end editorial and interface typography layouts:

- **Human-Readable:** It introduces intuitive naming standards that directly represent typographic movement.
- **Animation-First:** It relies exclusively on performance-optimized CSS properties (`transform`, `opacity`, `clip-path`) to avoid triggering browser layout repaints.
- **Composable:** Developers can attach these classes directly to raw headings or text elements without altering existing layout grids, paddings, or margins.
