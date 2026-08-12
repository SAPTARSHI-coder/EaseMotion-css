# CSS Rubik Cube Loader

A pure CSS 3D spinning Rubik's cube loading indicator with customizable colors, accessibility support, and responsive scaling.

## Usage

Include `style.css` in your project and add the HTML structure:

```html
<div class="ease-rubik-wrapper" role="status" aria-live="polite">
  <div class="ease-rubik-cube">
    <div class="ease-rubik-face ease-rubik-front">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
    <div class="ease-rubik-face ease-rubik-back">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
    <div class="ease-rubik-face ease-rubik-right">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
    <div class="ease-rubik-face ease-rubik-left">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
    <div class="ease-rubik-face ease-rubik-top">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
    <div class="ease-rubik-face ease-rubik-bottom">
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
      <span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span><span class="ease-rubik-tile"></span>
    </div>
  </div>
  <span class="ease-rubik-sr-only">Loading, please wait...</span>
</div>
```

## Why it fits EaseMotion CSS

It expands EaseMotion's UI loader ecosystem with a zero-dependency, pure CSS 3D motion pattern that is fully themeable and accessible without requiring JavaScript animation libraries.

## Customization

Customize dimensions and speeds using CSS custom properties:

```css
:root {
  --rubik-size: 80px;
  --rubik-speed: 2.6s;
  --rubik-perspective: 600px;
  --rubik-red: #ef4444;
  --rubik-orange: #f97316;
  --rubik-blue: #3b82f6;
  --rubik-green: #22c55e;
  --rubik-yellow: #eab308;
  --rubik-white: #f8fafc;
}
```
