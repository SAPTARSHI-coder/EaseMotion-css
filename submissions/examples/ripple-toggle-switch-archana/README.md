# 🎛️ Ripple Toggle Switch — EaseMotion CSS

A polished, pure CSS toggle switch component with smooth ripple animations, built for the EaseMotion CSS library. No JavaScript required.

## ✨ Features

- **Pure CSS** — No JavaScript dependencies
- **Ripple Animation** — Smooth, expandable ripple effect on interaction
- **Fully Accessible** — Keyboard navigation, focus states, semantic HTML
- **Responsive** — Adapts to all screen sizes with touch-friendly targets
- **Performance Optimized** — GPU-accelerated animations at 60 FPS
- **Multiple Sizes** — Small, Medium, and Large variants
- **Dark Mode Support** — Automatic theme switching
- **Reduced Motion Support** — Respects `prefers-reduced-motion`
- **High Contrast Mode** — Accessible for all users
- **Customizable** — CSS variables for easy theming
- **EaseMotion Integration** — Uses EaseMotion timing functions and design patterns

## 📦 Installation & Usage

### 1. **Basic HTML Structure**

\`\`\`html
<input type="checkbox" id="my-toggle" class="ripple-toggle-input">
<label for="my-toggle" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### 2. **Include the CSS**

Link the \`style.css\` file in your HTML:

\`\`\`html
<link rel="stylesheet" href="path/to/style.css">
\`\`\`

## 🎨 Component States

### Default (OFF)
\`\`\`html
<input type="checkbox" id="toggle-off" class="ripple-toggle-input">
<label for="toggle-off" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### Checked (ON)
\`\`\`html
<input type="checkbox" id="toggle-on" class="ripple-toggle-input" checked>
<label for="toggle-on" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### Disabled (OFF)
\`\`\`html
<input type="checkbox" id="toggle-disabled" class="ripple-toggle-input" disabled>
<label for="toggle-disabled" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

## 📏 Size Variants

Three pre-configured sizes are available.

### Small
\`\`\`html
<input type="checkbox" id="toggle-sm" class="ripple-toggle-input ripple-toggle-sm">
<label for="toggle-sm" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### Medium (Default)
\`\`\`html
<input type="checkbox" id="toggle-md" class="ripple-toggle-input ripple-toggle-md">
<label for="toggle-md" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### Large
\`\`\`html
<input type="checkbox" id="toggle-lg" class="ripple-toggle-input ripple-toggle-lg">
<label for="toggle-lg" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

## 🎨 Customization

### CSS Variables

All aspects of the toggle switch can be customized using CSS variables:

\`\`\`css
:root {
    --toggle-bg-off: #e0e0e0;
    --toggle-bg-on: #667eea;
    --toggle-thumb: #ffffff;
    --toggle-disabled: #cccccc;
    --toggle-disabled-thumb: #f0f0f0;
    --ripple-color: rgba(102, 126, 234, 0.4);
    --toggle-width: 52px;
    --toggle-height: 28px;
    --toggle-thumb-size: 24px;
    --toggle-thumb-offset: 2px;
    --ripple-size: 24px;
    --transition-base: 300ms;
    --transition-slow: 400ms;
}
\`\`\`

## ♿ Accessibility

### Keyboard Navigation

- **Tab** — Focus the toggle switch
- **Space** — Toggle the switch on/off
- **Enter** — Toggle the switch on/off

### Features

- Uses native \`<input type="checkbox">\` for state management
- Proper \`<label>\` association for click targets
- Visible focus ring when tabbed (WCAG AA compliant)
- Screen reader support with proper state announcement
- High contrast mode support
- Reduced motion support for users with motion sensitivity

## 🎬 Animation Details

### Ripple Effect Animation
- **Duration**: 400ms (slow transition)
- **Easing**: ease-out-cubic
- **Scale**: Expands from 24px to 60px
- **Opacity**: Fades from 1 to 0

### Thumb Movement
- **Duration**: 300ms
- **Easing**: ease-out-cubic
- **Distance**: ~50% of track width

### Background Transition
- **Duration**: 300ms
- **Easing**: ease-out-quad

## 📱 Responsive Behavior

- **Desktop**: Full animations and hover effects
- **Tablet (768px and below)**: Touch target size increased to minimum 44x44px
- **Mobile (480px and below)**: Sizing slightly reduced, animations smooth

## 🌙 Dark Mode

The component automatically adapts to dark mode with proper color adjustments.

## 📋 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome  | ✅ Full | 60+     |
| Firefox | ✅ Full | 55+     |
| Safari  | ✅ Full | 12.1+   |
| Edge    | ✅ Full | 79+     |
| iOS Safari | ✅ Full | 12.2+ |
| Android Chrome | ✅ Full | 60+ |

## 📁 File Structure

\`\`\`
submissions/examples/ripple-toggle-switch-archana/
├── demo.html          # Interactive demo page
├── style.css          # Component styles
└── README.md          # Documentation (this file)
\`\`\`

## 🚀 Implementation Checklist

- ✅ Pure CSS (no JavaScript required)
- ✅ Ripple animation on click
- ✅ Smooth thumb movement
- ✅ Keyboard navigation support
- ✅ Focus indicators (WCAG compliant)
- ✅ Disabled state styling
- ✅ Multiple size variants
- ✅ Dark mode support
- ✅ Reduced motion support
- ✅ High contrast mode support
- ✅ Touch-friendly (44x44px minimum)
- ✅ GPU-accelerated animations
- ✅ Responsive design
- ✅ EaseMotion integration
- ✅ Live demo page
- ✅ Comprehensive documentation

## 💡 Usage Examples

### Basic Toggle
\`\`\`html
<input type="checkbox" id="notifications" class="ripple-toggle-input">
<label for="notifications" class="ripple-toggle">
  <span class="ripple-toggle-thumb"></span>
  <span class="ripple-effect"></span>
</label>
\`\`\`

### With Label Text
\`\`\`html
<div style="display: flex; align-items: center; gap: 12px;">
  <input type="checkbox" id="dark-mode" class="ripple-toggle-input">
  <label for="dark-mode" class="ripple-toggle">
    <span class="ripple-toggle-thumb"></span>
    <span class="ripple-effect"></span>
  </label>
  <label for="dark-mode" style="cursor: pointer;">Enable Dark Mode</label>
</div>
\`\`\`

## 🎨 Design Inspiration

Modern Admin Panel UI patterns, Material Design, iOS-style controls adapted for web with smooth EaseMotion animations.

## 📝 License

Part of the EaseMotion CSS library and follows its open-source licensing.

---

**Created for GSSoC 2026** | **EaseMotion CSS** | **Pure CSS • Accessible • Responsive**
