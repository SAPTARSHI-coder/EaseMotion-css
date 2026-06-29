# ease-sidebar-item-active-indicator

## What does it do?
Sidebar navigation items show a sliding bar indicator for the active item — pure CSS, no JavaScript.

## Features
- Vertical indicator bar slides to the active item position
- Uses radio buttons for exclusive selection
- Smooth `top` transition on the indicator bar
- Common dashboard sidebar pattern

## Usage
```html
<input type="radio" name="nav" id="item1" hidden checked>
<input type="radio" name="nav" id="item2" hidden>
<div class="sidebar-items">
  <label for="item1">Dashboard</label>
  <label for="item2">Analytics</label>
  <div class="indicator-bar"></div>
</div>
```

```css
.indicator-bar {
  position: absolute;
  top: 4px;
  transition: top 0.3s ease;
}

#item2:checked ~ .sidebar-items .indicator-bar {
  top: 44px;
}
```

## Browser Support
- `:checked` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
