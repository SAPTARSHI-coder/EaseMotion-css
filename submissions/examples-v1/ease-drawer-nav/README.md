# Slide-In Drawer Navigation Component

## What does this do?

A pure CSS animated slide-in side drawer navigation panel with multiple variants (left/right slide, push-content, overlay) that requires zero JavaScript.

## How is it used?

### Basic Usage (Left Drawer)

```html
<!-- 1. Hidden checkbox toggle -->
<input type="checkbox" id="drawer-toggle" class="drawer-toggle" />

<!-- 2. Drawer content -->
<div class="drawer-nav drawer-left">
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</div>

<!-- 3. Overlay backdrop (closes drawer when clicked) -->
<label for="drawer-toggle" class="drawer-overlay"></label>

<!-- 4. Trigger button -->
<label for="drawer-toggle" class="drawer-trigger-btn">☰ Menu</label>
```

### Variants

#### Right-Side Drawer
```html
<input type="checkbox" id="drawer-right" class="drawer-toggle" />
<div class="drawer-nav drawer-right">
  <!-- Navigation content -->
</div>
<label for="drawer-right" class="drawer-overlay"></label>
```

#### Push Content Variant
```html
<input type="checkbox" id="drawer-push" class="drawer-toggle" />

<div class="drawer-wrapper">
  <div class="drawer-nav drawer-left drawer-push">
    <!-- Navigation content -->
  </div>
  
  <div class="drawer-push-content">
    <!-- Main page content that will be pushed aside -->
  </div>
</div>

<label for="drawer-push" class="drawer-overlay"></label>
```

### Available Classes

| Class | Description |
|-------|-------------|
| `.drawer-toggle` | Hidden checkbox input that controls drawer state |
| `.drawer-nav` | Base drawer container (required) |
| `.drawer-left` | Slides drawer from the left side |
| `.drawer-right` | Slides drawer from the right side |
| `.drawer-push` | Pushes main content aside instead of overlaying |
| `.drawer-overlay` | Semi-transparent backdrop overlay |
| `.drawer-narrow` | 240px width variant |
| `.drawer-wide` | 400px width variant |
| `.drawer-full` | Full viewport width |
| `.drawer-fast` | 200ms animation duration |
| `.drawer-slow` | 600ms animation duration |
| `.drawer-dark` | Dark theme gradient |
| `.drawer-light` | Light theme gradient |
| `.drawer-glass` | Glassmorphism effect |
| `.drawer-bounce` | Bouncy animation timing |
| `.drawer-smooth` | Smooth ease animation |
| `.drawer-snap` | Snappy animation timing |

### Customization with CSS Variables

```css
:root {
  --drawer-width: 320px;              /* Panel width */
  --drawer-duration: 400ms;            /* Animation duration */
  --drawer-bg: linear-gradient(...);   /* Background gradient */
  --drawer-overlay-bg: rgba(0,0,0,0.5); /* Overlay color */
  --drawer-overlay-blur: 4px;          /* Backdrop blur amount */
  --drawer-z-index: 1000;              /* Stacking order */
}
```

### Examples

**Mobile Navigation Menu**
```html
<input type="checkbox" id="mobile-menu" class="drawer-toggle" />
<div class="drawer-nav drawer-left drawer-fast">
  <!-- Nav items -->
</div>
<label for="mobile-menu" class="drawer-overlay"></label>
<label for="mobile-menu" class="menu-button">☰</label>
```

**Shopping Cart Drawer**
```html
<input type="checkbox" id="cart" class="drawer-toggle" />
<div class="drawer-nav drawer-right drawer-narrow">
  <!-- Cart items -->
</div>
<label for="cart" class="drawer-overlay"></label>
```

**Settings Panel with Push Effect**
```html
<input type="checkbox" id="settings" class="drawer-toggle" />
<div class="drawer-wrapper">
  <div class="drawer-nav drawer-left drawer-push drawer-glass">
    <!-- Settings options -->
  </div>
  <div class="drawer-push-content">
    <!-- Main dashboard content -->
  </div>
</div>
```

## Why is it useful?

### Fits EaseMotion CSS Philosophy

1. **Human-readable class names** — `.drawer-left`, `.drawer-push`, `.drawer-fast` describe exactly what they do
2. **Animation-first** — Built with smooth, polished animations as the core feature
3. **Zero JavaScript** — Uses pure CSS checkbox hack technique for state management
4. **Composable** — Mix and match variants (`drawer-left drawer-fast drawer-glass`)
5. **Responsive** — Automatically adapts to mobile screens

### Universal Use Cases

- **Mobile navigation menus** — The most common responsive pattern
- **Shopping cart drawers** — E-commerce slide-in carts
- **Notification panels** — Side panels for alerts and updates
- **Filter panels** — Product filtering in e-commerce sites
- **Settings drawers** — Application configuration panels
- **User profile menus** — Account information and actions
- **Multi-level navigation** — Nested menu structures
- **Chat interfaces** — Slide-in messaging panels

### Key Benefits

✅ **No JavaScript required** — Pure CSS implementation using checkbox hack  
✅ **Accessibility-ready** — Keyboard navigation support, reduced motion respect  
✅ **Performance optimized** — Hardware-accelerated transforms  
✅ **Mobile-first** — Responsive breakpoints included  
✅ **Customizable** — CSS variables for easy theming  
✅ **Multiple variants** — Left, right, push-content, overlay options  
✅ **Theme support** — Dark, light, glass variations included  
✅ **Print-friendly** — Hidden in print media automatically  

### Integration with EaseMotion CSS

Complements existing components:
- Works seamlessly with `.ease-navbar-glass`
- Compatible with `.ease-btn` components for triggers
- Pairs with `.ease-card` for drawer content
- Integrates with `.ease-fade-in` animations
- Supports EaseMotion utility classes

### Why This Matters

Near-universal pattern across modern web apps and mobile sites. Every responsive website needs a drawer/hamburger menu solution. This implementation provides a production-ready, accessible, performant solution that requires zero JavaScript while offering maximum flexibility through composable classes — exactly aligned with EaseMotion's philosophy.

The checkbox hack technique is battle-tested, widely supported, and eliminates JavaScript bundle size concerns while maintaining full functionality.

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ⚠️ IE 11 (basic functionality, no backdrop-filter)

## Accessibility Features

- ✅ Keyboard navigable (label elements are focusable)
- ✅ `prefers-reduced-motion` support
- ✅ Focus visible states
- ✅ Semantic HTML structure
- ✅ ARIA attributes can be added as needed
- ✅ Print media handling

## Performance Notes

- Uses `transform` for animations (GPU-accelerated)
- `visibility` toggling prevents off-screen interactions
- Optimized for 60fps animations
- No JavaScript event listeners
- Minimal repaints and reflows

## Credits

Submitted by: [Your Name]  
Issue: #513  
Contribution Track: Standard (HTML/CSS)
