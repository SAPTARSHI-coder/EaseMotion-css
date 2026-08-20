# Dynamic Accordion Table Row Expander - Dark Mode Variant

> A high-quality, modern, and visually stunning interactive accordion table component for data tables with smooth expansion animations and glassmorphism effects.

![Dark Mode](https://img.shields.io/badge/Theme-Dark%20Mode-0f1419?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square)
![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **✅ Modern Dark Mode Design** - Sleek, sophisticated dark theme with neon accents
- **✅ Glassmorphism Effects** - Frosted glass aesthetic with backdrop blur
- **✅ Smooth Animations** - Elegant transitions and slide-down animations
- **✅ Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **✅ Keyboard Navigation** - Full accessibility support with arrow keys and Enter
- **✅ Semantic HTML** - Clean, accessible HTML structure
- **✅ CSS Variables** - Easy customization with CSS custom properties
- **✅ No Dependencies** - Pure HTML, CSS, and JavaScript
- **✅ Production Ready** - Optimized and tested code
- **✅ Rich Content Support** - Display complex data in expandable sections

## 📋 Project Structure

```
ease-ui-dynamic-accordion-table-row-expander-for-data-tables-289/
├── demo.html          # Main HTML file with component markup
├── style.css          # Complete CSS with dark mode styling
├── script.js          # JavaScript functionality and API
└── README.md          # This file
```

## 🚀 Quick Start

### 1. **Download/Clone the Component**

```bash
git clone <repo-url>
cd ease-ui-dynamic-accordion-table-row-expander-for-data-tables-289
```

### 2. **Open in Browser**

Simply open `demo.html` in your web browser:

```bash
# On Windows (PowerShell)
.\demo.html

# Or use live server
npx live-server
```

### 3. **Integration into Your Project**

Copy the three files to your project:

```bash
cp demo.html your-project/
cp style.css your-project/
cp script.js your-project/
```

Link them in your HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your HTML content -->
    <script src="script.js"></script>
</body>
</html>
```

## 📖 Usage

### Basic Usage

The component initializes automatically when the page loads:

```html
<table class="accordion-table">
    <thead>
        <!-- Table headers -->
    </thead>
    <tbody>
        <!-- Table rows with expand buttons -->
        <tr class="table-row">
            <td class="expand-cell">
                <button class="expand-btn" aria-label="Expand row">
                    <span class="chevron-icon">›</span>
                </button>
            </td>
            <!-- Other columns -->
        </tr>
        <tr class="expandable-row">
            <td colspan="6">
                <div class="expandable-content">
                    <!-- Expandable content -->
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

### JavaScript API

Access the accordion table instance through `window.accordionTable`:

```javascript
// Expand a specific row (index 0)
accordionTable.expandRow(0);

// Collapse a specific row
accordionTable.collapseRow(0);

// Toggle a row
accordionTable.toggleRow(0);

// Expand all rows
accordionTable.expandAll();

// Collapse all rows
accordionTable.collapseAllRows();

// Destroy the accordion
accordionTable.destroy();
```

### Advanced Features

#### Filter/Search Table

```javascript
// Search for rows containing "Website"
filterTableRows("Website");
```

#### Sort Table

```javascript
// Sort by column index 2 (name) in ascending order
sortTableByColumn(2, 'asc');

// Sort in descending order
sortTableByColumn(2, 'desc');
```

#### Export Data

```javascript
// Export as JSON
const jsonData = exportTableAsJSON();
downloadFile(jsonData, 'table-data.json', 'application/json');

// Export as CSV
const csvData = exportTableAsCSV();
downloadFile(csvData, 'table-data.csv', 'text/csv');
```

## 🎨 Customization

### Color Scheme

Edit the CSS variables in `style.css`:

```css
:root {
    /* Modify these to change colors */
    --color-accent-primary: #00d4ff;      /* Cyan */
    --color-accent-secondary: #7c3aed;    /* Purple */
    --color-status-active: #10b981;       /* Green */
    --color-status-planning: #f59e0b;     /* Amber */
    --color-status-completed: #3b82f6;    /* Blue */
}
```

### Animation Speed

Change transition durations:

```css
:root {
    --transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Spacing

Adjust padding and margins:

```css
:root {
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
}
```

### Glassmorphism Intensity

Modify the backdrop blur effect:

```css
.table-wrapper {
    backdrop-filter: blur(20px);  /* Increase/decrease blur */
    background: rgba(255, 255, 255, 0.05);  /* Adjust transparency */
}
```

## ♿ Accessibility

The component includes full accessibility features:

- **Semantic HTML**: Proper table structure with `<thead>`, `<tbody>`
- **ARIA Labels**: `aria-label` and `aria-expanded` attributes
- **Keyboard Navigation**:
  - `↑ / ↓` - Navigate between rows
  - `Space / Enter` - Expand/collapse row
  - `Tab` - Focus on expand buttons
- **Screen Reader Support**: Descriptive labels and roles

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Opera | ✅ Full Support |
| IE 11 | ❌ Not Supported |

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚡ Performance

- **Zero Dependencies**: No external libraries required
- **Optimized CSS**: Minimal file size with efficient selectors
- **Smooth Animations**: 60 FPS on modern browsers
- **Lazy Loading Support**: Built-in lazy load capabilities
- **CSS Variables**: Efficient color and spacing management

## 🎯 Component Highlights

### Vibrant Neon Accents
- Cyan primary accent color
- Purple secondary accent
- Smooth color transitions

### Smooth Animations
- Slide-down expansion with ease-out timing
- Fade-in effects for content
- Hover state transitions
- 0.3s default animation duration

### Glassmorphism Effects
- Frosted glass appearance
- Backdrop blur (20px)
- Semi-transparent backgrounds
- Subtle borders and shadows

### Dark Mode Optimization
- OLED-friendly colors
- Reduced eye strain
- Professional aesthetic
- Consistent contrast ratios

## 🔧 Troubleshooting

### Animations not working?
- Ensure CSS file is properly linked
- Check browser support for `backdrop-filter`
- Verify JavaScript is enabled

### Expand buttons not responding?
- Check that JavaScript file is loaded
- Ensure class names match (`.expand-btn`, `.table-row`, etc.)
- Check browser console for errors

### Styling looks different?
- Clear browser cache
- Check for CSS conflicts with other stylesheets
- Verify CSS variables are properly set

## 📚 Code Examples

### Example 1: Initialize with Custom Settings

```javascript
const table = new AccordionTable('.accordion-table');

// Expand first row on load
table.expandRow(0);
```

### Example 2: Add Event Listeners

```javascript
const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log(`Row ${index} toggled`);
    });
});
```

### Example 3: Filter on Input

```html
<input type="text" id="searchInput" placeholder="Search...">

<script>
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        filterTableRows(e.target.value);
    });
</script>
```

### Example 4: Export on Button Click

```html
<button id="exportBtn">Export as CSV</button>

<script>
    document.getElementById('exportBtn').addEventListener('click', () => {
        const csvData = exportTableAsCSV();
        downloadFile(csvData, 'table-data.csv', 'text/csv');
    });
</script>
```

## 🎓 Learning Resources

### CSS Concepts Used
- **CSS Grid**: Layout system for responsive design
- **CSS Variables**: Custom properties for easy customization
- **Backdrop Filter**: Glassmorphism effects
- **CSS Animations**: Keyframe-based animations
- **Flexbox**: Alignment and spacing

### JavaScript Concepts Used
- **DOM Manipulation**: Selecting and modifying elements
- **Event Listeners**: Click and keyboard events
- **Class Management**: Toggle active states
- **Intersection Observer**: Performance optimization
- **Array Methods**: Sorting and filtering data

## 🏆 Best Practices Implemented

✅ **Semantic HTML** - Proper table structure
✅ **Clean CSS Architecture** - Organized with comments
✅ **ES6+ JavaScript** - Modern syntax and classes
✅ **Accessibility First** - WCAG compliance
✅ **Mobile Responsive** - Mobile-first approach
✅ **Performance** - Optimized animations and selectors
✅ **Code Documentation** - Comments and examples
✅ **DRY Principle** - No code duplication

## 📄 License

This component is part of the **EaseMotion CSS** library and is available under the **MIT License**.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:
1. Open an issue on GitHub
2. Submit a pull request
3. Share your improvements

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review code examples
- Examine the demo.html for usage patterns

## 🎉 Credits

Created as part of **GSSoC 2026** (GirlScript Summer of Code) for the **EaseMotion CSS** project.

---

**Made with ❤️ for modern web development**
