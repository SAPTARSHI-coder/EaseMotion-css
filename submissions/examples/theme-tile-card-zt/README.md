# Theme Tile Card Component

## 🎨 Overview

A modern, CSS-only theme tile card component designed for theme selection interfaces. This component showcases four distinct theme options (Dark, Light, Ocean, and Sunset) with interactive hover effects, color palette previews, and smooth animations.

**Key Features:**
- ✨ Pure CSS animations (no JavaScript required)
- 🎯 Interactive hover effects with lift and scale
- 🎨 Color palette preview swatches
- ✅ Fully responsive design
- 🌓 Light/Dark mode support
- ♿ Accessible and reduced-motion friendly
- 📱 Mobile-optimized

---

## 📋 Component Structure

### Files Included
- **demo.html** — Standalone HTML demo with 4 theme cards
- **style.css** — Complete styling with animations
- **README.md** — Documentation (this file)

### HTML Markup

```html
<div class="ttc-card">
  <div class="ttc-card-header">
    <div class="ttc-card-icon">🌙</div>
    <h2 class="ttc-card-title">Dark Theme</h2>
  </div>
  
  <p class="ttc-card-description">
    Professional dark mode designed for reduced eye strain.
  </p>
  
  <div class="ttc-palette">
    <div class="ttc-color" style="--color: #0f172a;"></div>
    <div class="ttc-color" style="--color: #1e293b;"></div>
    <div class="ttc-color" style="--color: #334155;"></div>
    <div class="ttc-color" style="--color: #64748b;"></div>
  </div>
  
  <button class="ttc-button">Select Theme</button>
</div>
```

---

## 🎬 Animation Features

### 1. **Smooth Hover Lift**
- Cards translate up (`translateY(-12px)`) and slightly scale (`scale(1.02)`)
- Smooth cubic-bezier timing function for natural motion
- 400ms transition duration

### 2. **Border Glow Animation**
- Subtle gradient glow that pulses around the card border
- Uses CSS animation `ttc-glow-pulse` (3s on idle, 2s on hover)
- Combines opacity and scale for depth perception

### 3. **Color Palette Animation**
- Individual color swatches scale and lift on hover
- Shimmer effect with gradient shine animation (`ttc-color-shine`)
- Palette container receives hue rotation and brightness animation
- Creates a subtle "breathing" effect on the color palette

### 4. **Scale Effect & Icon Animation**
- Card icon scales and rotates slightly on hover
- Button has sliding shine effect on hover
- All elements use `cubic-bezier(0.34, 1.56, 0.64, 1)` for elastic feel

---

## 🎨 Theme Specifications

### Dark Theme
- **Primary:** `#0f172a` — Deep navy
- **Secondary:** `#1e293b` — Slate blue
- **Accent:** `#334155` — Medium slate
- **Muted:** `#64748b` — Neutral gray
- **Icon:** 🌙 Moon emoji

### Light Theme
- **Primary:** `#f8fafc` — Off white
- **Secondary:** `#f1f5f9` — Light slate
- **Accent:** `#e2e8f0` — Medium light
- **Muted:** `#cbd5e1` — Light gray
- **Icon:** ☀️ Sun emoji

### Ocean Theme
- **Primary:** `#0c4a6e` — Deep ocean blue
- **Secondary:** `#075985` — Ocean blue
- **Accent:** `#0369a1` — Bright sky blue
- **Bright:** `#0ea5e9` — Light cyan
- **Icon:** 🌊 Wave emoji

### Sunset Theme
- **Primary:** `#7c2d12` — Dark burnt orange
- **Secondary:** `#c2410c` — Burnt orange
- **Accent:** `#f59e0b` — Gold
- **Purple:** `#a855f7` — Vibrant purple
- **Icon:** 🌅 Sunset emoji

---

## 💻 CSS Variables Used

The component defines inline CSS variables for flexibility:

```css
--color: /* Theme color hex value */
--label: /* Color label (unused in current version) */
```

Additional global variables (can be overridden):
- `--ease-font-sans` — Font family
- `--ease-text-*` — Text colors
- `--ease-bg-*` — Background colors
- `--ease-radius-*` — Border radius values
- `--ease-space-*` — Spacing tokens

---

## 🚀 Use Cases

### 1. **SaaS Theme Selector**
Perfect for onboarding flows where users select their preferred theme/color scheme.

```
Example: Notion, Figma, VS Code theme selector screens
```

### 2. **Settings & Preferences**
Integrate into settings pages to allow users to customize their interface appearance.

### 3. **Design System Showcase**
Display multiple color schemes within a design system documentation site.

### 4. **Brand Color Selection**
Present multiple brand color variations for B2B dashboard applications.

### 5. **User Personalization**
Include as a theme selection card in profile or preference pages.

---

## 📐 Responsive Behavior

### Desktop (> 1024px)
- 4 columns grid layout
- Full hover effects enabled
- Large card sizes with smooth transitions
- Gap: 1.5rem (24px)

### Tablet (769px - 1024px)
- 2-3 columns depending on viewport width
- Slightly reduced padding (1.5rem)
- Softer hover lift effect
- Gap: 1.5rem

### Mobile (< 768px)
- 1 column layout
- Single card takes full width (with padding)
- Reduced card padding (1.5rem instead of 1.75rem)
- Smaller icon sizes (50px instead of 60px)
- Reduced hover lift (8px instead of 12px)
- Touch-friendly button sizes
- Gap: 1rem

---

## ♿ Accessibility Features

### 1. **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
  /* Only subtle scale transform on hover */
}
```

Users with `prefers-reduced-motion: reduce` will see cards with minimal animation.

### 2. **Color Contrast**
- Text colors meet WCAG AA standards
- Icon backgrounds have sufficient contrast
- Button text is high contrast against gradient

### 3. **Semantic HTML**
- Proper heading hierarchy (`<h2>` for card titles)
- Native `<button>` element for interactions
- No div soup; clean structure

### 4. **Keyboard Navigation**
- Buttons are keyboard accessible by default
- Tab order is logical
- Focus states are visible (styled via standard button focus)

### 5. **Light Mode Support**
- Automatically adapts to `prefers-color-scheme: light`
- Inverted color scheme for readability
- Maintained contrast ratios in light mode

---

## 🔧 Customization

### Change Theme Colors
Modify the `--color` inline style in HTML:

```html
<div class="ttc-color" style="--color: #your-color-here;"></div>
```

### Adjust Animation Speed
Modify transition durations in CSS:

```css
.ttc-card {
  transition: all 0.4s cubic-bezier(...); /* Change 0.4s to desired duration */
}
```

### Change Border Glow Color
Update the `::before` gradient in `.ttc-card::before`:

```css
background: linear-gradient(
  135deg,
  transparent 0%,
  rgba(YOUR_COLOR, 0.1) 50%, /* Change rgba values */
  transparent 100%
);
```

### Modify Icon Size
Change `.ttc-card-icon` dimensions:

```css
.ttc-card-icon {
  width: 60px;  /* Adjust width */
  height: 60px; /* Adjust height */
}
```

---

## 🎯 How It Fits EaseMotion CSS

This component embodies EaseMotion CSS principles:

1. **Pure CSS Animations** — Zero JavaScript, 100% CSS-driven interactions
2. **Smooth Easing Functions** — Uses cubic-bezier for natural, springy motion
3. **Accessibility-First** — Respects `prefers-reduced-motion` and contrast standards
4. **Responsive Design** — Mobile-first approach with progressive enhancement
5. **Performance Optimized** — Hardware acceleration via `will-change` and `transform`
6. **Component Philosophy** — Self-contained, reusable, and modular
7. **Modern CSS Features** — Uses CSS Grid, backdrop-filter, gradients, and animations
8. **Variable Support** — Leverages CSS custom properties for theming

---

## 🧪 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ⚠️ Mobile browsers (iOS Safari 14+, Chrome Mobile)

**CSS Features Used:**
- CSS Grid
- CSS Custom Properties (Variables)
- `backdrop-filter` (graceful fallback included)
- CSS Animations & Transitions
- CSS Gradients
- `aspect-ratio`

---

## 📝 Example Integration

```html
<!-- In your HTML page -->
<link rel="stylesheet" href="./style.css">

<div class="ttc-grid">
  <!-- Insert theme cards here -->
</div>

<!-- No JavaScript required! -->
```

---

## 🔄 Animation Timeline

### Card Hover Sequence (Total: 400ms)
1. **0ms-400ms:** Card lifts up, scales, and glows
2. **0ms-infinite:** Border glow pulses (2s cycle on hover)
3. **0ms-400ms:** Icon rotates and scales
4. **0ms-400ms:** Colors scale and lift
5. **0ms-1500ms:** Color shine animation loops

---

## 📚 Related Components in EaseMotion CSS

- [Card Component](../../../components/cards.css)
- [Hover Animations](../../../easemotion/hover.css)
- [Color Utilities](../../../core/variables.css)
- [Animations Library](../../../easemotion/all.css)

---

## 🏆 Original Submission

**Author:** ZT (theme-tile-card-zt)  
**Type:** CSS-Only Component  
**Category:** UI Pattern / Theme Selection  
**Last Updated:** 2026-06-14

---

## 📖 Notes

- This component is **production-ready** and can be integrated into any project
- No external dependencies or JavaScript frameworks required
- All styles are scoped with `.ttc-` prefix to avoid conflicts
- Fully compatible with EaseMotion CSS utility classes
- Can be extended with additional themes by duplicating the card structure

---

Enjoy building beautiful theme selection interfaces! ✨
