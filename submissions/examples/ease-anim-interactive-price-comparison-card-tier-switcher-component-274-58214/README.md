# Interactive Price Comparison Card Tier Switcher Component (Cyberpunk Theme)

A modern, visually stunning pricing component featuring an interactive tier switcher with cyberpunk aesthetics, smooth animations, and glassmorphism effects.

## 🌟 Features

### Design & Aesthetics
- **Cyberpunk Color Palette**: Vibrant neon colors (cyan, magenta, purple) with glowing effects
- **Glassmorphism Effect**: Modern frosted glass appearance with backdrop blur
- **Neon Accents**: Corner brackets, glowing borders, and animated grid background
- **Floating Orbs**: Animated atmospheric elements for depth
- **Gradient Overlays**: Dynamic color gradients across titles and buttons
- **Smooth Transitions**: 0.2s - 0.6s cubic-bezier animations for fluid interactions

### Interactive Components
- **Tier Switcher**: Toggle between monthly and annual billing
- **Dynamic Pricing**: Prices update instantly with smooth animations
- **Animated Buttons**: CTA buttons with ripple effects and hover states
- **Feature Lists**: Included/excluded features with visual indicators
- **Popular Badge**: Highlights the recommended professional plan
- **Corner Accents**: Animated corner brackets on cards

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Flexible grid layout that adapts to screen size
- Touch-friendly button sizes and spacing
- Optimized typography scaling with `clamp()`

### Performance & Accessibility
- CSS custom properties for easy customization
- Reduced motion support for accessibility
- Keyboard navigation (Arrow keys for tier switching)
- Focus visible states for interactive elements
- Hardware-accelerated animations

## 📁 File Structure

```
ease-anim-interactive-price-comparison-card-tier-switcher-component-274/
├── demo.html       # Semantic HTML structure
├── style.css       # Complete cyberpunk styling
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🚀 Installation & Usage

### Quick Start

1. **Download the files** from the submission folder
2. **Open `demo.html`** in your browser
3. **Interact with the tier switcher** to see prices update
4. **Click CTA buttons** to test interactions

### Integration Steps

#### Option 1: Standalone Implementation
Simply copy all three files (`demo.html`, `style.css`, `script.js`) into your project and open the HTML file.

```bash
# Copy the entire component folder to your project
cp -r ease-anim-interactive-price-comparison-card-tier-switcher-component-274/ your-project/
```

#### Option 2: Modular Import
Extract styles and scripts separately:

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your pricing card HTML here -->
    <script src="script.js"></script>
</body>
```

#### Option 3: Customization
Modify CSS custom properties to match your brand:

```css
:root {
    --neon-cyan: #00d9ff;      /* Primary accent */
    --neon-magenta: #ff006e;   /* Secondary accent */
    --dark-bg: #0a0e27;        /* Background color */
    --text-primary: #e0e0e0;   /* Main text color */
    /* ... more variables ... */
}
```

## 🎨 Customization Guide

### Colors
Modify the CSS custom properties in the `:root` selector:

```css
:root {
    --neon-cyan: #00d9ff;        /* Change primary color */
    --neon-magenta: #ff006e;     /* Change accent color */
    --dark-bg: #0a0e27;          /* Change background */
    --dark-card: #1a1f3a;        /* Change card background */
    --text-primary: #e0e0e0;     /* Change text color */
}
```

### Typography
Update font sizing in the component headers:

```css
.neon-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem); /* min, preferred, max */
}
```

### Animation Speed
Adjust transition timing variables:

```css
:root {
    --transition-fast: 0.2s ease-out;
    --transition-normal: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.6s ease-in-out;
}
```

### Price Data
Update prices in `script.js`:

```javascript
const priceData = {
    starter: {
        monthly: '29',
        annual: '299'
    },
    professional: {
        monthly: '79',
        annual: '758'
    },
    enterprise: {
        monthly: '199',
        annual: '1990'
    }
};
```

## 🔧 JavaScript Functionality

### Tier Switching
```javascript
// Automatically updates all prices when user toggles billing period
document.getElementById('annually').addEventListener('change', updatePrices);
```

### Button Interactions
```javascript
// CTA buttons provide visual feedback
- Ripple effect on click
- Text feedback ("✓ Message Sent!")
- Auto-reset after 2 seconds
```

### Keyboard Navigation
```javascript
// Arrow keys navigate between plans
ArrowLeft  → Switch to Monthly
ArrowRight → Switch to Annual
```

### Animation Triggers
```javascript
// Intersection Observer for lazy animations
// Features animate in as user scrolls
// Smooth entrance animations on page load
```

## 🎯 Key Interaction Flows

### Monthly to Annual Switch
1. User clicks "Annually" toggle
2. Slider background animates to right
3. Prices fade and scale smoothly
4. Button pulse animation plays
5. All text updates instantly

### Plan Selection
1. User hovers over card
2. Card lifts up with shadow
3. Border glows with plan's color
4. Corner accents become visible
5. User clicks CTA button
6. Ripple effect emanates from click point
7. Button confirms action with checkmark
8. Button returns to original state

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 not supported (uses CSS Grid, Custom Properties)

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- 3-column grid layout
- Full spacing and typography
- All hover effects active

### Tablet (769px - 1023px)
- 2-3 column adaptive grid
- Adjusted spacing
- Touch-optimized buttons

### Mobile (480px - 768px)
- 1-column stacked layout
- Reduced padding and margins
- Optimized font sizes

### Small Mobile (< 480px)
- Compact card spacing
- Minimal padding
- Responsive typography with clamp()

## ♿ Accessibility Features

- **Keyboard Support**: Tab navigation, Arrow key plan switching
- **Focus Indicators**: Visible outline on focused elements
- **Semantic HTML**: Proper heading hierarchy and label associations
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Color Contrast**: WCAG AA compliant text contrast ratios
- **Alternative Text**: Meaningful icon and badge descriptions

## ⚡ Performance Optimizations

- CSS Grid and Flexbox for layout
- Hardware-accelerated transforms (translate, scale)
- Efficient keyframe animations
- Lazy-loaded animations with Intersection Observer
- No JavaScript libraries required (vanilla JS)
- Minimal paint and layout thrashing

## 🐛 Known Limitations

- Transforms on individual cards may affect stacking context
- Animations disabled in high motion sensitivity mode
- Grid background is decorative (not scaled for very large screens)

## 🔄 Animation Details

### Grid Background
- Horizontal lines pulse at 0.6s intervals
- Vertical lines pulse with offset delays
- Creates animated cyberpunk grid effect

### Floating Orbs
- Three orbs float independently at 20-30s cycles
- Subtle blur and low opacity create depth
- Non-interactive (pointer-events: none)

### Title Flicker
- Neon flicker effect on main title
- Simulates vintage neon sign effect
- 3s animation cycle

### Card Hover
- Elevation: -10px translateY
- Border color matches plan color
- Glow effect appears around card

### Price Update
- Scale and fade animation on number change
- Smooth transition between monthly/annual values

## 📝 Code Quality

- Clean, semantic HTML5 structure
- DRY CSS with custom properties
- Vanilla JavaScript (no dependencies)
- Comprehensive comments and documentation
- Modular component design

## 🚀 Future Enhancements

- Add comparison table toggle
- Implement live chat integration
- Add animated feature comparison
- Payment gateway integration
- Real-time price calculation
- Multi-language support

## 📄 License

This component is part of the EaseMotion CSS library.

## 👨‍💻 Author

**Archana Nair** (@Archana7224)  
GSSoC '26 Contributor - EaseMotion CSS Animation Library

## 🤝 Contributing

Found a bug or want to improve this component? Create an issue or submit a pull request!

## 📚 Related Components

- Plasma Modal
- Crystallize Toggle Switch
- Orbit Toggle Switch
- Elastic Calendar

## 📞 Support

For questions or issues, please refer to the main EaseMotion CSS repository.

---

**Built with ❤️ for modern web design.**  
**Cyberpunk aesthetics meet functional UI principles.**