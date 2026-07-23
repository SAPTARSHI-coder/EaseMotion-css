# Gradient Animation Showcase

A simple, beginner-friendly web page showcasing animated CSS gradient backgrounds using only HTML and CSS.

## 🎯 Features

- Semantic HTML structure (header, main, section, footer)
- Responsive layout built with Flexbox
- Three animated gradient examples:
  - Slow Shifting linear gradient
  - Radial Breathing gradient
  - Conic Spinning gradient
- Clean, card-based UI
- No JavaScript, no frameworks, no external libraries

## 📂 Gradients Included

1. **Slow Shifting** — moves between two gradient positions
2. **Radial Breathing** — pulsing radial gradient center
3. **Conic Spinning** — rotating conic gradient

## 📁 File Structure

├── index.html   # Page structure and gradient cards
└── style.css    # Styling, layout, and keyframe animations

## 🚀 How to Run

1. Download or clone the files (index.html, style.css) into the same folder.
2. Open index.html in any modern web browser.
3. View the animated gradient cards directly on the page.

## 🛠️ How It Works

- Each gradient preview is a plain div styled with a CSS background gradient.
- CSS @keyframes animations continuously animate background-position, transform: scale(), or transform: rotate() to create the shifting, breathing, and spinning effects.
- No JavaScript is used; all motion is handled purely through CSS animations.

## 📱 Responsive Design

The showcase uses Flexbox with flex-wrap, so gradient cards automatically rearrange based on screen width. On small screens (480px and below), cards stack to full width for better readability.

## 🤝 Contributing

This project was built as part of a GSSoC issue for a gradient animation showcase. Contributions and additional gradient examples are welcome!

## 📄 License

Free to use for learning and demo purposes.