# Fizzy CSS Button

A lightweight and interactive button animation built using **pure HTML and CSS**. The button creates a fizzy particle burst effect on hover, providing engaging visual feedback without requiring any JavaScript.

## Features

* Pure HTML and CSS (zero JavaScript)
* Fizzy particle burst animation
* Lightweight and responsive
* Easy to customize
* Beginner-friendly code structure
* Works in modern browsers

## Files

```text
demo.html
style.css
README.md
```

## Usage

1. Clone or download the project.
2. Ensure that `demo.html` and `style.css` are in the same directory.
3. Open `demo.html` directly in your browser.

No build tools, dependencies, or installations are required.

## HTML Structure

```html
<button class="fizzy-btn">
  <span>Download</span>

  <div class="particles">
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span>
  </div>
</button>
```

## Customization

### Change Button Size

```css
.fizzy-btn {
  width: 220px;
  height: 60px;
}
```

### Change Colors

```css
.fizzy-btn {
  border: 2px solid #ffffff;
  color: #ffffff;
}

.particles span:nth-child(odd) {
  background: #00c4ff;
}

.particles span:nth-child(even) {
  background: #ff4f81;
}
```

### Adjust Animation Speed

```css
.fizzy-btn:hover .particles span {
  animation: fizz 0.9s ease-out forwards;
}
```

Modify the animation duration to make the effect faster or slower.

## Browser Support

Compatible with all modern browsers that support:

* CSS Animations
* CSS Transforms
* Flexbox/Grid Layout

## Acceptance Criteria

* Pure HTML and CSS (zero JS)
* Works by opening demo.html directly
* Includes: demo.html, style.css, README.md
* Added under: submissions/examples/ease-status-msg-zd/

## License

This example is provided for educational and demonstration purposes as part of the EaseMotion CSS examples collection.
