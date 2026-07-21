# Crystallize Toggle Switch

A polished, accessible toggle switch component with smooth crystalline animations built with **EaseMotion CSS**.

## Features

✨ **Pure CSS** — No JavaScript required  
🎨 **Smooth Animations** — Crystalline glow and slide effects  
♿ **Accessible** — Focus states, disabled support, keyboard-friendly  
📱 **Responsive** — Works on all screen sizes  
🎯 **EaseMotion Integration** — Uses EaseMotion CSS variables and keyframes  

## Demo

Open `demo.html` in your browser to see the toggle switch in action with:
- Default (unchecked) state
- Active (checked) state
- Disabled state
- Multiple toggles in a feature list

## Usage

### Basic HTML

```html
<label class="crystallize-toggle">
    <input type="checkbox">
    <span class="toggle-slider"></span>
</label>
```

### With Labels

```html
<div class="toggle-group">
    <span class="label">Off</span>
    <label class="crystallize-toggle">
        <input type="checkbox">
        <span class="toggle-slider"></span>
    </label>
    <span class="label">On</span>
</div>
```

### Disabled State

```html
<label class="crystallize-toggle crystallize-toggle--disabled">
    <input type="checkbox" disabled>
    <span class="toggle-slider"></span>
</label>
```

## Customization

Edit CSS variables in `:root`:

```css
--crystallize-color-active: #6366f1;      /* Active toggle color */
--crystallize-color-inactive: #cbd5e1;    /* Inactive toggle color */
--crystallize-color-thumb: #ffffff;       /* Thumb/circle color */
--crystallize-duration: 0.4s;             /* Animation duration */
```

## Animations

- **`crystallize-glow`** — Glowing pulse effect on toggle activation
- **`crystallize-slide-in/out`** — Smooth thumb movement
- **Hover & Focus** — Visual feedback for interaction

## Browser Support

✅ Chrome/Edge 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Mobile browsers

## Accessibility

- ♿ Full keyboard support (Tab, Space to toggle)
- 🎯 Focus indicators with outline
- 🔊 Works with screen readers (native checkbox)
- ✋ Disabled state styling

---

**Created for GSSoC '26** | **EaseMotion CSS Library**