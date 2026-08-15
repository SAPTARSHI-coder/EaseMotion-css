# Ease Reading Progress

A reading progress indicator that fills as the user scrolls through an article.

## Features

- Fixed top progress bar
- Real-time scroll tracking
- Smooth easing animation
- Responsive design
- Pure HTML, CSS, and JavaScript
- No external libraries

## Files

```text
demo.html
style.css
README.md
```

## How It Works

The script calculates:

```javascript
currentScroll / totalScrollableHeight
```

and converts it into a percentage:

```javascript
const progress =
    (scrollTop / scrollHeight) * 100;
```

The progress bar width is then updated:

```javascript
progressBar.style.width = progress + "%";
```

## Customization

### Progress Bar Height

```css
.progress-container {
    height: 6px;
}
```

### Progress Bar Color

```css
background: linear-gradient(
    90deg,
    #4f46e5,
    #06b6d4
);
```

### Animation Smoothness

```css
transition: width 0.15s ease-out;
```

### Article Width

```css
.article {
    max-width: 850px;
}
```

## Use Cases

- Blogs
- Documentation
- News websites
- Long-form articles
- Tutorials
- E-books

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Run

Simply open:

```text
demo.html
```

in your browser and start scrolling.