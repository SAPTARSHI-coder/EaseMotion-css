## Background-Origin Utility

**What does this do?**  
Utility classes for the CSS `background-origin` property, controlling where the background-position reference point is calculated.

**How is it used?**  
Add `bg-origin-border`, `bg-origin-padding`, or `bg-origin-content` to any element:

```html
<div class="box bg-origin-content">Background starts at content edge</div>
```

**Why is it useful?**  
Elements with visible borders or padding often need background positioning relative to different box edges. These utilities give developers precise control over background rendering, particularly useful for decorative borders, gradient overlays, and precise background alignment.
