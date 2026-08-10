# CSS Nutrition Label (#70930)

Pure CSS standard FDA-style Nutrition Facts label component styled with precise border weights, indented nutrient hierarchies, and responsive typography without JavaScript.

## Features
- **FDA Standard Compliance Styling:** Features authentic multi-weight border dividers (`divider-lg`, `divider-md`, `divider-sm`) and bold typography hierarchy.
- **Indented Nutrient Subcategories:** Multi-level flexbox layouts handling sub-nutrients (e.g., Saturated Fat, Added Sugars) with appropriate margin offsets.
- **Pure CSS Solution:** Zero JavaScript required for layout, alignment, or interactive state transitions.
- **Accessible Layout:** Uses semantic HTML `<article>` layout, screen reader friendly `aria-label` declarations, and `prefers-reduced-motion` compliance.

## Structure
- `style.css` - Component variables, divider line classes, typography sizing, and focus ring definitions.
- `demo.html` - Interactive demo displaying a standard FDA 2016-compliant Nutrition Facts panel.
