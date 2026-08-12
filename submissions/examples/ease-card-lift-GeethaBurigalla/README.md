# ease-card-lift Hover Animation

A simple, reusable CSS utility class that lifts any card upward on hover with a soft shadow increase. Built for issue #37069.

## Usage

Add the `ease-card-lift` class to any card-like element:

```html
<div class="ease-card-lift">
    Card Content
</div>
```

```css
.ease-card-lift {
  transition: all 0.3s ease;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 24px;
}

.ease-card-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.15);
}
```

## Demo

This demo shows the utility applied to three different card types to show its reusability:
1. **Pricing card**
2. **Product card**
3. **Portfolio card**

## Features
- Single reusable utility class, no markup dependencies
- Smooth lift + shadow transition on hover
- Works on any card-shaped element (product cards, pricing cards, portfolio items, dashboard widgets)
- Respects prefers-reduced-motion

## How to View
Open demo.html directly in a browser - no build step needed.

## Author
Geetha Burigalla ([@GeethaBurigalla](https://github.com/GeethaBurigalla))
