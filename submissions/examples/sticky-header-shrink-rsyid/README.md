# Sticky Header Shrink-on-Scroll Effect

A sticky navbar/header that shrinks (reduced height/logo scale) and adds a shadow once the user scrolls past a small threshold. This is a very common pattern (Stripe, Linear, etc.) and isn't covered by the current navbar component or any existing submission.

## Features

- 🔥 **Sticky Header**: Remains fixed at top as you scroll
- 📏 **Shrink-on-Scroll**: Reduces height, logo size, and padding smoothly
- ✨ **Shadow on Scroll**: Adds a soft shadow for depth when scrolled
- 🎨 **Customizable**: CSS variables for easy theming
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- ♿ **Accessible**: Semantic HTML5 with proper structure
- 🌟 **Smooth Animations**: Cubic-bezier transitions for premium feel
- 🔧 **Lightweight JS**: Small, simple JavaScript for universal support

## Folder Structure

```
submissions/examples/sticky-header-shrink-rsyid/
├── demo.html      # Standalone demo page with full content
├── style.css      # Production-ready styles with CSS variables
├── script.js      # Lightweight JS for universal support
└── README.md      # This file
```

## Usage Instructions

### Basic Usage

1. **Copy the HTML**: Use the header structure from `demo.html`
2. **Link the CSS**: Include `style.css` in your project
3. **Add the JS**: Include `script.js` for universal browser support

### Customization

Modify the CSS variables in `:root` to customize the effect:

```css
:root {
    /* Header Colors */
    --em-header-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --em-header-bg-shrink: rgba(255, 255, 255, 0.98);
    
    /* Dimensions */
    --em-header-height: 100px;
    --em-header-height-shrink: 64px;
    
    /* Logo & Text */
    --em-header-logo-size: 2.25rem;
    --em-header-logo-size-shrink: 1.75rem;
}
```

## Where this fits

- **Track**: `submissions/examples/`
- **Submit as**: `sticky-header-shrink-rsyid`

## Why it's useful

Extremely common real-world pattern, currently missing from the navbar component and the examples library. Fits the animation-first philosophy — it's motion tied directly to user scroll behavior!

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

Works across all modern browsers with the included JavaScript!
