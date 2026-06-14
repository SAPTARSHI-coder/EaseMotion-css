# EaseFooter Component — EaseMotion CSS

A modern, highly performant component stylesheet that defines a complete layout system for application footers. It encapsulates layout structure inside a custom `@layer` block to allow clean integration without stylesheet conflicts.

## Key Technical Features

* **CSS `@layer` Architecture**: Safely isolated inside `easemotion-components` to prevent style leakage or unexpected overrides.
* **Zero-Dependency Vector Icons**: Uses CSS `-webkit-mask` / `mask` matching rules on standard markup anchors (`href*="github.com"`) to serve clean SVG icons directly through inline data strings.
* **Fluid Responsive Layout**: Automatically changes configuration from multi-column grids to stack structures on sub-`640px` viewports without modifying HTML markup elements.
* **Accessible Motion Rules**: Detects `prefers-reduced-motion: reduce` system environmental properties to immediately disable transitions and bounce actions.

## Integration Structure

To display alternative icons, simply map the explicit structural anchor paths inside your HTML templates:

```html
<div class="ease-footer-social">
  <a href="[https://github.com/your-repo](https://github.com/your-repo)" aria-label="GitHub"></a>
  
  <a href="[https://yourcustomlink.org](https://yourcustomlink.org)" aria-label="Website"></a>
</div>
