# CSS HTTP Method Badge

## 1. Feature Overview
A clean, minimal, developer-focused component providing reusable badges for common HTTP methods. Designed specifically for API documentation and developer tools within the EaseMotion CSS showcase.

## 2. Supported Methods
This component provides distinct styling for:
- GET
- POST
- PUT
- DELETE

## 3. Features
- Pure HTML/CSS
- No JavaScript
- Responsive layout using CSS Grid
- Method-specific visual styling (colors and CSS shapes)
- Smooth CSS hover and focus interactions for active badges
- Keyboard focus support where applicable
- `prefers-reduced-motion` support
- Semantic markup targeting interactive (`<a>`, `<button>`) vs non-interactive (`<span>`) elements
- CSS custom properties for easy theme integration
- No external dependencies, fonts, or images

## 4. Usage

To create an interactive badge (e.g. for a clickable filter or documentation link):
```html
<a href="#" class="method-badge method-get">GET</a>
<a href="#" class="method-badge method-post">POST</a>
<a href="#" class="method-badge method-put">PUT</a>
<a href="#" class="method-badge method-delete">DELETE</a>
```

To create a static, non-interactive badge (e.g. next to an API endpoint):
```html
<span class="method-badge method-get">GET</span>
```
*Note: `span` tags are deliberately styled without hover states to avoid pretending to be interactive buttons.*

## 5. CSS Custom Properties

| Variable | Purpose |
| --- | --- |
| `--badge-bg` | Main showcase background |
| `--badge-surface` | Badge surface background |
| `--badge-text` | Badge text color |
| `--badge-muted` | Secondary text color |
| `--badge-border` | Badge border color |
| `--badge-radius` | Border radius |
| `--badge-shadow` | Container and active badge shadow |
| `--badge-transition` | Animation timing |

*(Method specific colors are also stored in variables like `--color-get`, `--color-post`, etc.)*

## 6. Accessibility
- **Visible Names**: Method names are always visible.
- **Sufficient Contrast**: Background and text colors have been chosen for readability against dark surfaces.
- **Not Color-Only**: Each badge method features a distinct CSS shape next to the text (Circle for GET, Square for POST, Triangle for PUT, Diamond for DELETE) to ensure they are visually distinguishable without relying solely on color.
- **Focus States**: Interactive elements (`<a>`, `<button>`) receive a high-contrast `outline` when focused via keyboard navigation.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`, jumping animations instantly to their end state to prevent discomfort for sensitive users.

## 7. Responsive Behavior
The component utilizes CSS Grid and `minmax()` functions to naturally wrap badges on smaller screens. It gracefully falls back from a 4-column layout down to 2 columns on tablets, and 1 column on mobile, completely preventing horizontal scrolling.

## 8. Browser Compatibility
Designed for modern evergreen browsers (Chrome, Firefox, Safari, Edge), utilizing features like CSS Grid, custom properties, and `clip-path`.
