# Rotate Fade Card Grid

A responsive card grid featuring a smooth rotate-and-fade hover animation built with pure HTML and CSS.

## Features

- Pure HTML & CSS
- Responsive grid layout
- Rotate + fade hover animation
- Hardware accelerated transforms
- Accessible with prefers-reduced-motion
- Easy customization using CSS variables

## Folder

submissions/examples/rotate-fade-card-grid/

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="rf-grid">
    <div class="rf-card">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

## CSS Variables

```css
--bg
--card
--primary
--text
--radius
--duration
```

## Accessibility

- Responsive on desktop, tablet and mobile
- Supports `prefers-reduced-motion`
- No JavaScript required

## Fits EaseMotion CSS

This example follows EaseMotion CSS principles by providing lightweight, reusable, animation-first components using only HTML and CSS.