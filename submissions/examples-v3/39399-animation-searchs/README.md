# Animation Search Demo

A simple, beginner-friendly web page that demonstrates common CSS animations with a live search feature to filter through them.

## 🎯 Features

- Centered heading and clean, modern UI
- Live search bar to filter animation cards (case-insensitive)
- 8 animation cards, each with:
  - Animation name
  - Short description
  - Hover preview of the animation
- "No animations found" message when search has no matches
- Fully responsive layout (mobile-friendly)
- Built with **only HTML, CSS, and Vanilla JavaScript** — no frameworks or libraries

## 📂 Animations Included

1. Fade In
2. Slide Up
3. Bounce
4. Zoom In
5. Rotate
6. Pulse
7. Flip
8. Shake

## 📁 File Structure

├── index.html   # Page structure and animation cards
├── style.css    # Styling, layout, and keyframe animations
└── script.js    # Live search / filter logic

## 🚀 How to Run

1. Download or clone the files (index.html, style.css, script.js) into the same folder.
2. Open index.html in any modern web browser.
3. Type into the search bar to filter animation cards in real time.
4. Hover over a card to preview its animation.

## 🛠️ How It Works

- Each animation card has a data-name attribute holding its lowercase name.
- On every keystroke in the search input, script.js compares the search text against each card's data-name.
- Matching cards are shown; non-matching cards are hidden.
- If no cards match, a "No animations found" message is displayed.

## 📱 Responsive Design

The card grid uses CSS Grid with auto-fit and minmax(), so cards automatically rearrange into fewer columns on smaller screens, and font sizes adjust for mobile devices.

## 🤝 Contributing

This project was built as part of a GSSoC issue: "Animation Search Bar for Demo Page." Contributions, improvements, and additional animation examples are welcome!

## 📄 License

Free to use for learning and demo purposes.