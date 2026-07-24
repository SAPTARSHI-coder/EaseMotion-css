# Ease Download Progress Ring

A modern CSS-only circular progress ring for representing download or upload progress with smooth animation.

## Features

- ⭕ Animated circular progress ring
- 📥 Perfect for download/upload status
- ✨ Smooth CSS animation
- 📱 Responsive design
- 🎨 Pure HTML & CSS
- 🚫 No JavaScript required

## Folder Structure

```
ease-download-progress-ring/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="progress-card">
    <div class="progress-ring">
        <svg width="170" height="170">
            <circle class="bg" cx="85" cy="85" r="70"></circle>
            <circle class="progress" cx="85" cy="85" r="70"></circle>
        </svg>
        <div class="percentage">75%</div>
    </div>

    <h2>Downloading...</h2>
    <p>File: EaseMotion.zip</p>
</div>
```

Open `demo.html` directly in any browser.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Created For

EaseMotion CSS

**Issue #49939**