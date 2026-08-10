# CSS Skew-Active Badge

A striking, modern badge component featuring dynamic skewing transitions on hover and active states, perfect for creative portfolios, categories, tags, and status indicators.

## Features
- **Pure CSS:** Completely powered by CSS with no JavaScript required.
- **Skew Transformations:** Uses `transform: skew()` creatively. The outer badge container is skewed, while the inner text content is inverse-skewed to remain perfectly readable.
- **Dynamic States:** 
  - **Hover:** Increases the skew angle and adds an offset drop-shadow for a 3D pop effect.
  - **Active:** Completely un-skews the badge into a rounded rectangle and slightly scales it up.
- **Variants:** Includes base styling for interactive links and various colored status indicators (New, Pro, Update).
- **Responsive & Accessible:** Fluid scaling for mobile devices and full `prefers-reduced-motion` support that gracefully removes transforms and animations for sensitive users.

## Usage
1. Include `style.css` in your document head.
2. Structure your HTML according to `demo.html`.
3. **Important:** Ensure that the text inside the `.badge` is always wrapped in a `<span class="badge-content">` tag. This inner span is responsible for counter-acting the skew transformation.

## CSS Custom Properties
The colors seamlessly adapt to light and dark modes via a media query, but can be customized in the `:root`:
```css
:root {
    --bg-color: #f8fafc;       /* Page Background */
    --text-color: #0f172a;     /* Page Text */
    --badge-bg: #e2e8f0;       /* Default badge background */
    --badge-text: #475569;     /* Default badge text */
    
    --active-bg: #3b82f6;      /* Active state background */
    --active-text: #ffffff;    /* Active state text */
    
    --new-bg: #10b981;         /* "New" status color */
    --pro-bg: #8b5cf6;         /* "Pro" status color */
    --update-bg: #f59e0b;      /* "Update" status color */
}
```
