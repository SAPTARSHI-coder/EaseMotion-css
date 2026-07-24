# 🎨 Color Palette Picker

A beautiful color palette generator that creates harmonious color combinations with one click.

## 🚀 Features

- **Generate Palettes**: One-click generation of 5-color palettes
- **Color Selection**: Click any swatch to view detailed color info
- **Color Formats**: See HEX, RGB, and HSL values
- **Copy All Colors**: Copy all hex codes with one click
- **Color History**: Track last 10 selected colors
- **Smooth Animations**: Hover effects and transitions
- **Responsive**: Works on all devices

## 🎯 Color Generation Algorithm

### How Colors Are Generated

The algorithm works in two steps:

#### Step 1: Generate Base Color
```javascript
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}